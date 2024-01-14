import React from 'react';
import './Header.css';
import profileImage from './profile-image.jpg'; // Ensure the image is correctly placed in the public folder or within src

function Header() {
    return (
        <header className="header">
            {/* Top-left name and title */}
            <div className="top-left-info">
                <span className="dot"></span>
                <span className="name-title">Himanshu Doye - Developer</span>
            </div>
            
            <div className="header-inner">
                {/* Profile Picture */}
                <div className="profile-picture">
                    <img src={profileImage} alt="Profile" />
                </div>
                
                {/* Main Content */}
                <div className="header-content">
                    <h1 className="hello-text">Hello</h1>
                    <h2>A Bit About Me</h2>
                    <p>Innovative Developer with expertise in Corda R3 DLT, Spring Boot, and MySQL. Proficient in Version Control and Azure, I excel in creating user-focused applications. My passion for blockchain and cloud technologies drives me to deliver robust, cutting-edge solutions in dynamic team settings.</p>
                    
                    {/* Buttons */}
                    <div className="header-buttons">
                        <button className="round-button" id='c1'>Resume</button>
                        <button className="round-button" id='c2'>Projects</button>
                        <button className="round-button" id='c3'>Contact</button>
                    </div>
                </div>
                
                {/* Navigation Menu */}
                <nav className="header-nav">
                    <a href="#resume">Resume</a> |
                    <a href="#projects">Projects</a> |
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
