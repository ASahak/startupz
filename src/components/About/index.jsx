import React from 'react';
import about from '../../icons/about.png';
import './style.css';
const About = () => {
    return(
        <section className="about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-info">
                        <h1 className="about-info-title">We Create <br/>Startups.</h1>
                        <p className="about-info-description">We are startup studio that develops and launches new companies.</p>
                        <button className="about-info-button" aria-label="Our Works">See our works</button>
                    </div>
                    <div className="about-info-image">
                        <img src={about} alt="about"/>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default About;