import React from "react";
import { useState, useRef, useEffect } from "react";


const Form = ({onClose}) => {

    const courses = ['CSC301S3', 'CSC302S3', 'CSC303S3'];
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleCheckboxChange = (course) => {
        setSelectedCourses((prev) =>
            prev.includes(course)
                ? prev.filter((c) => c !== course)
                : [...prev, course]
        );
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleRegister = (e) => {
        e.preventDefault();
        // Process form data here...
        onClose(); // Close popup after submission
    };
    
    return(
        <div className="form" onSubmit={handleRegister}>
            <h3>Student Registration</h3>
            <form>
                <div className="input">
                    <label htmlFor="name">Name  </label>
                    <input type="text" />
                </div>
                
                <div className="input">
                    <label htmlFor="reg-number">Registrarion Number  </label>
                    <input type="text" />
                </div>

                {/* <div className="dropdown-container" ref={dropdownRef}>
                    <label>Course Code</label>
                    <div className="dropdown-header" onClick={toggleDropdown}>
                        {selectedCourses.length > 0
                            ? selectedCourses.join(', ')
                            : 'Select Courses'}
                        <span className="arrow">{dropdownOpen ? '▲' : '▼'}</span>
                    </div>
                    {dropdownOpen && (
                        <div className="dropdown-list">
                            {courses.map((course) => (
                                <label key={course} className="dropdown-item">
                                    <input
                                        type="checkbox"
                                        value={course}
                                        checked={selectedCourses.includes(course)}
                                        onChange={() => handleCheckboxChange(course)}
                                    />
                                    {course}
                                </label>
                            ))}
                        </div>
                    )}
                </div> */}

                <div className="input">
                    <label htmlFor="contact-number">Contact Number  </label>
                    <input type="text" />
                </div>

                <div className="input">
                    <label htmlFor="email">Email  </label>
                    <input type="text" />
                </div>

                <button type="submit" className="register">Register</button>

            </form>
        </div>
    );
}

export default Form;