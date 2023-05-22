import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header>
            <h1>KFlinn Coding</h1>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/resume">Resume</Link> */}
        </nav>
        </header>
    );
}

export default Header;