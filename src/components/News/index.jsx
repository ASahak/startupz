import React from 'react';
import likeLeft from '../../icons/like_left.png';
import likeRight from '../../icons/like_right.png';
import xSvg from '../../icons/x.png';
import newImg from '../../icons/news_img.png';
import './style.css';
const News = () => {
    return (
        <section className="news">
            <div className="container">
                <div className="news_wrapper">
                    <div className="news-left">

                    </div>
                    <div className="news_main">
                        <div className="news_left_img">
                            <img src={likeLeft} alt="like"/>
                        </div>
                        <div className="news_title">
                            <p>We love solving problems!</p>
                        </div>
                        <div className="news_right_img">
                            <img src={likeRight} alt="like"/>
                        </div>
                    </div>
                    <div className="news-right">
                        <div className="new-message">
                            <p>Hi! I am Ben, your virtual assistant. How can I make your day better?</p>
                        </div>
                        <div className="cancel_button">
                            <button><img src={xSvg} alt="cancel"/></button>
                        </div>
                        <div className="new_img">
                            <img src={newImg} alt="news"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default News;