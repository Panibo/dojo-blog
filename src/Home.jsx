import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('mario')
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi');
        setAge(30);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;

/*
Notes:
To not invoke the function during creation use anonymous function like this:
             
<button onClick={(e) => { handleClickAgain("mario", e) }}>Click me again</button>

e is the event and is passed as an argument to the anonymous function and then passed to handleClickAgain function.

*/