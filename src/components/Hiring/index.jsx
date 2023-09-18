import React from "react";
import hiringLeft from '../../icons/hiring_left.png';
import hiringRight from '../../icons/hiring_right.png';
import './style.css';
const Hiring = () => {
    return (
        <section className="hiring">
            <div className="hiring-left">
                <img src={hiringLeft} alt="hiring_left"/>
            </div>
            <div className="hiring-content">
                <h2 className="hiring-content-title">We are hiring!</h2>
                <p className="hiring-content-text">We're always looking for talented people <br/>to join and help build our startups.<br/>Check out our current openings</p>
                <button className="hiring-content-button">See current openings </button>
            </div>
            <div className="hiring-right">
                <img src={hiringRight} alt="hiring_right"/>
            </div>
        </section>
    )
}
export default Hiring;