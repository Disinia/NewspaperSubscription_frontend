import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-flu">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <Link className="nav-link" to="">NEWSPAPER SUBSCRIPTION</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Add Subscriber</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/view">View Subscriber</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/delete">Delete</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
