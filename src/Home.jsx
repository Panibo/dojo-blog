import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                })
        }, 1000)
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
}

export default Home;

/*
Notes:
To not invoke the function during creation use anonymous function like this:
             
<button onClick={(e) => { handleClickAgain("mario", e) }}>Click me again</button>

e is the event and is passed as an argument to the anonymous function and then passed to handleClickAgain function.
---
To be able to change what is outputed to the user it needs to be in a useState hook. For example:

const [name, setName] = useState("mario");

setName is a function that can be used to change the value of name.
---
Functions can be passed as props to other components. For example:

<BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />

Where handleDelete is the prop name and handleDelete is the function that is passed as a prop.
---
useEffect hook runs every time the component renders. To make it run only once, pass an empty array as a second argument. To only run when a state changes pass the state as a second argument (Will still run on first render). For example:

useEffect(() => {
    console.log("use effect ran");
    console.log(name);
}, [name]);
---
*/