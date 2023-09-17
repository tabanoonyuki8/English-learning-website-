import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                <div className="container-fluid ">

                    <h3 className="navbar-brand fw-bold"><i className="fas fa-book-reader mx-2"></i>Learning Language</h3>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse header-hover  " id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex">

                            <li className="nav-item ">
                                <Link className="nav-link active mx-3 fw-bold" to="/home">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active mx-3 fw-bold" to="/courses">Courses</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active mx-3 fw-bold" to="/about">About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active mx-3 fw-bold" to="/contact">Contact</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;