import React, { useState } from "react";
import Students from "./components/students.jsx";
import Form from "./components/Form.jsx";


const Home = () => {

    const [showModel, setShowModel] = useState(false);

    const openModel = () => setShowModel(true);
    const closeModel = () => setShowModel(false);

    return(
        <div className="home">
            <header>
                <h1>Welcome to Student Registration Protal</h1>
            </header>

            <Students/>

            <button className="new-registration" onClick={openModel}>Add New Student</button>

            {showModel && (
                <div className="modal-overlay">
                    <Form onClose={closeModel}/>
                </div>
            )}

        </div>
    );
}

export default Home;