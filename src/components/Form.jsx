import React from "react";

const Form = () => {
    return(
        <div className="form">
            <form>
                <div className="input">
                    <label htmlFor="name">Name : </label>
                    <input type="text" />
                </div>
                
                <div className="input">
                    <label htmlFor="reg-number">Registrarion Number : </label>
                    <input type="text" />
                </div>

                <div className="input">
                    <label>Cource Code : </label>
                    <select>
                        <option>CSC301S3</option>
                    </select>
                </div>

                <div className="input">
                    <label htmlFor="contact-number">Contact Number : </label>
                    <input type="text" />
                </div>

                <div className="input">
                    <label htmlFor="email">Email : </label>
                    <input type="text" />
                </div>

            </form>
        </div>
    );
}

export default Form;