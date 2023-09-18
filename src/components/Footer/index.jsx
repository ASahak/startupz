import React from "react";
import logo from '../../icons/logo.png';
import twitter from '../../icons/twitter.png';
import linkedin from '../../icons/Linkedin.png';
import instagram from '../../icons/instagram.png';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-logo">
                        <a href="#"><img src={logo} alt="logo"/></a>
                        <p className="footer-logo-text">© 2020 Startupz. <br/>All rights reserved. </p>
                    </div>
                    <div className="footer-companies">
                        <h5 className="footer-companies-title">Companies</h5>
                        <a href="#" className="footer-companies-link"> Told</a>
                        <a href="#" className="footer-companies-link"> LegalSite</a>
                        <a href="#" className="footer-companies-link"> Codekeeper</a>
                        <a href="#" className="footer-companies-link"> Feedback Labs</a>

                    </div>
                    <div className="footer-contact">
                        <h5 className="footer-contact-title">Contact</h5>
                        <p className="footer-contact-text ">World Trade Center - The Hague <br/> Prinses Margrietplantsoen 33 <br/>2595 AM The Hague <br/>The Netherlands</p>
                        <a href="#" className="footer-contact-link">Send us an email</a>
                    </div>
                    <div className="footer-follow">
                        <h5 className="footer-follow-title">Follow us</h5>
                        <button className="footer-follow-button"><img src={twitter} alt="twitter"/></button>
                        <button className="footer-follow-button"><img src={linkedin} alt="linkedin"/></button>
                        <button className="footer-follow-button"><img src={instagram} alt="instagram"/></button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;