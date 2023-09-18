import React from 'react';
import works_1 from '../../icons/work_1.png';
import works_2 from '../../icons/work_2.png';
import works_3 from '../../icons/work_3.png';
import works_4 from '../../icons/work_4.png';
import './style.css';

const Works = () => {
    return (
        <section className="works">
            <div className="container">
                <div className="works-wrapper">
                    <div className="works-title-wrapper">
                        <h2 className="works-title">Our works</h2>
                    </div>
                    <div className="work-content">
                        <div className="work-content-item">
                            <div className="work-content-item-title">
                                <h2 className="text-color-first">Told</h2>
                            </div>
                            <div className="work-content-item-description">
                                <p>Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.</p>
                            </div>
                            <div className="work-content-item-img">
                                <img src={works_1} alt="img"/>
                            </div>
                            <div className="work-content-item-button-wrapper">
                                <button className="work-content-item-button">More</button>
                            </div>
                        </div>
                        <div className="work-content-item">
                            <div className="work-content-item-title">
                                <h2 className="text-color-second">Feedback Labs</h2>
                            </div>
                            <div className="work-content-item-description">
                                <p>Feedback Labs turns feedback into actionable insights for your team.</p>
                            </div>
                            <div className="work-content-item-img">
                                <img src={works_2} alt="img"/>
                            </div>
                            <div className="work-content-item-button-wrapper">
                                <button className="work-content-item-button">More</button>
                            </div>
                        </div>
                        <div className="work-content-item">
                            <div className="work-content-item-title">
                                <h2 className="text-color-third">Codekeeper</h2>
                            </div>
                            <div className="work-content-item-description">
                                <p>Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.</p>
                            </div>
                            <div className="work-content-item-img">
                                <img src={works_3} alt="img"/>
                            </div>
                            <div className="work-content-item-button-wrapper">
                                <button className="work-content-item-button">More</button>
                            </div>
                        </div>
                        <div className="work-content-item">
                            <div className="work-content-item-title">
                                <h2 className="text-color-fourth">LegalSite</h2>
                            </div>
                            <div className="work-content-item-description">
                                <p>Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.</p>
                            </div>
                            <div className="work-content-item-img">
                                <img src={works_4} alt="img"/>
                            </div>
                            <div className="work-content-item-button-wrapper">
                                <button className="work-content-item-button">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Works;