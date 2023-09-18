import React from 'react';
import questionMark from '../../icons/question_mark.png';
import './style.css';
const Description = () => {
    return (
        <section className="description">
            <div className="container">
                <div className="description-wrapper">
                    <div className="description-header">
                        <div className="description-info">
                            <h2 className="description-info-title">Who we are</h2>
                            <p className="description-info-description">We create products that have innovation and technology at their core.</p>
                            <p className="description-info-description">We value working with talented people that understand the possibilities of today.</p>
                        </div>
                        <div className="description-img-wrapper">
                            <img className="about-img" src={questionMark} alt="question"/>
                        </div>
                    </div>
                    <div className="description-main">
                        <div className="description-main-item">
                            <span>01</span>
                            <p>We develop innovative <br/> products, systems and <br/>services</p>
                        </div>
                        <div className="description-main-item">
                            <span>02</span>
                            <p>Next we build teams to <br/> scale them into <br/> companies</p>
                        </div>
                        <div className="description-main-item">
                            <span>03</span>
                            <p>Each startup solving <br/> one problem <br/> at a time</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Description;