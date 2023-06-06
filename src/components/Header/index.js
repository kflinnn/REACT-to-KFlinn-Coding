import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

export default function Header () {
    
    // function toggleNav() {
    //     const nav = document.getElementById('nav');
    //     nav.classList.toggle('show');
    // }
    return (
        <header>
            <h1>KFlinn Coding</h1>
            {/* <div class="hamburger" onClick={toggleNav()}>
                <span></span>
                <span></span>
                <span></span>
            </div> */}
            <nav>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/resume">Resume</Link> */}
        </nav>
        </header>
    );
}