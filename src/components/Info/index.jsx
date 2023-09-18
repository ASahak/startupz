import  React from 'react';
import likeLeft from '../../icons/like_left.png';
import likeRight from '../../icons/like_right.png';
import './style.css';
const Info = () => {
    return (
        <section className="info">
            <div className="container">
                <div className="info_wrapper">
                    <div className="info-left-image">
                        <img src={likeLeft} alt="like"/>
                    </div>
                    <div className="about-info-text">
                        <p>Startups create a world that actually is better. <br/>Any problem that can be solved,<br/> will be solved by a startup, and that is a huge opportunity.</p>
                    </div>
                    <div className="info-right-image">
                        <img src={likeRight} alt="like"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Info;