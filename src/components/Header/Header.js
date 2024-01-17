import React from 'react';
import './Header.css';
import profileImage from './profile-image.jpg';
import { Link } from 'react-router-dom'; // Import Link

function Header() {
    return (
        <>
            <header className="header">
                <div className="top-left-info">
                    <span className="dot"></span>
                    <span className="name-title">Himanshu Doye - Developer</span>
                </div>

                <div className="header-inner">
                    <div className="profile-picture">
                        <img src={profileImage} alt="Profile" />
                    </div>

                    <div className="header-content">
                        <h1 className="hello-text">Hello</h1>
                        <h2>A Bit About Me</h2>
                        <p>Innovative Developer with expertise in Corda R3 DLT, Spring Boot, and MySQL. Proficient in Version Control and Azure, I excel in creating user-focused applications. My passion for blockchain and cloud technologies drives me to deliver robust, cutting-edge solutions in dynamic team settings.</p>

                        <div className="header-buttons">
                            {/* Use Link instead of button for navigation */}
                            <Link to="/resume" className="round-button" id='c1'>Resume</Link>
                            <Link to="/projects" className="round-button" id='c2'>Projects</Link>
                            <Link to="/contact" className="round-button" id='c3'>Contact</Link>
                        </div>
                    </div>

                    <nav className="header-nav">
                        <Link to="/resume">Resume</Link> |
                        <Link to="/projects">Projects</Link> |
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </nav>
                </div>
            </header>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Phone</h3>
                        <p>+91 8407928568</p>
                    </div>
                    <div className="footer-section">
                        <h3>Email</h3>
                        <p>Himanshudoye42@gmail.com</p>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Me</h3>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin" />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo.png" alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 By Himanshu Doye. </p>
                </div>
            </footer>
        </>
    );
}

export default Header;
