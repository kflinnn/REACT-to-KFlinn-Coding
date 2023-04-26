import React from 'react';
import "./style.css";

function Header () {
    return (
        <header>
            <h1>KFlinn Coding</h1>
            <div>
                <a href="https://www.linkedin.com/in/kelley-flinn-1509a6167/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://github.com/kflinnn" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </div>
            <a href="#contact" className="cta-button">Contact Me</a>
        </header>
    );
}

export default Header;