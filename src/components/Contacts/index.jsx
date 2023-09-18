import React from "react";
import './style.css';
const Contacts = () => {
    return (
        <section className="contacts">
            <h2 className="contacts-title">Are you ready <br/> to board this rocket ship?</h2>
            <p className="contacts-text">Share your excitement with us.</p>
            <form action="" className="contacts-form">
                <input type="text" className="contacts-name-input" placeholder="Name*"/>
                <input type="email" className="contacts-email-input" placeholder="Email*"/>
                <textarea  className="contacts-message-input" placeholder="Message*">Message*</textarea>
                <button className="contacts-send-button"> Shoot us a message </button>
            </form>
        </section>
    );
};
export default Contacts;