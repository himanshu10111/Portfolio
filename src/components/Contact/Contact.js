import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <div className="branding">
                    <span className="dot"></span>
                    <span className="name-title">Nicol Rider - Editor</span>
                </div>
                <nav className="contact-nav">
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact" className="contact-link">Contact</Link>
                </nav>
            </div>
            <div className="contact-body">
                <div className="contact-info">
                    <h2>Contact</h2>
                    <p>Looking forward to hearing from you</p>
                    <p><strong>Phone</strong><br />123-456-7890</p>
                    <p><strong>Email</strong><br />info@mysite.com</p>
                </div>
                <form className="contact-form">
                    <div className="form-row">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="form-row">
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="Subject" />
                    </div>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
