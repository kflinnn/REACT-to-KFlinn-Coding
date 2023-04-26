import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

function Navigation () {
    return (
        <nav>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
        </nav>
    );
}

export default Navigation;