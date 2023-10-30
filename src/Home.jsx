const Home = () => {

    const handleClick = (e) => {
        console.log("Hello, ninjas!", e);
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name, e);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            {/* Note: To not invoke the function during creation 
                use anonymous function like below */}
            <button onClick={(e) => { handleClickAgain("mario", e) }}>Click me again</button>
        </div>
    );
}

export default Home;
