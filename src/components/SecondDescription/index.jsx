import React from 'react';
import idea from '../../icons/idea.png';
import '../Description/style.css';

const SecondDescription = () => {
    return (
        <section className="description">
            <div className="container">
                <div className="description-wrapper">
                    <div className="description-header">
                        <div className="description-info">
                            <h2 className="description-info-title">Our core values</h2>
                        </div>
                        <div className="description-img-wrapper">
                            <img className="about-img" src={idea} alt="question"/>
                        </div>
                    </div>
                    <div className="description-main">
                        <div className="description-main-item">
                            <span>01. Innovation</span>
                            <p>Startupz operates where entrepreneurship <br/> and technology intersect. We design solutions <br/> and turn them into businesses models.</p>
                        </div>
                        <div className="description-main-item">
                            <span>02. People</span>
                            <p>Talent is what enable us <br/> to create great <br/>companies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SecondDescription;
