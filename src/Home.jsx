import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
        { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
        { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 }
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
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

*/