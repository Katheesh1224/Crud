import React from "react";

const Students = () => {

    // const students = [
    //     {
    //         name: "Tony Stark",
    //         reg: "2020CSC027",
    //         course

    //     }
    // ];


    return(
        <div className="table">
            <h2>Registered Student Details</h2>
            <table>
                    <tr>
                        <th>Name</th>
                        <th>Registration Number</th>
                        <th>Course Code</th>
                        <th>Contact No.</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>

                    <tr>
                        <td>Tony Stark</td>
                        <td>2020CSC027</td>
                        <td>CSC301S3</td>
                        <td>0779784562</td>
                        <td>tonystark@gmail.com</td>
                        <td>
                            <button className="edit">Edit</button>
                            <button className="delete">Delete</button>
                        </td>
                    </tr>

            </table>
        </div>
    );
}

export default Students;