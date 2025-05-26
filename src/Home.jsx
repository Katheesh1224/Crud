import React from "react";
import Students from "./components/students.jsx";
import Form from "./components/Form.jsx";


const Home = () => {
    return(
        <div className="home">
            <header>
                <h1>Welcome to Student Registration Protal</h1>
            </header>

            <Students/>

            <button className="new-registration">Add New Student</button>

            <Form/>
        </div>
    );
}

export default Home;