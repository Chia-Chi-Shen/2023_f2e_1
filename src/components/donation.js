import React from "react";
import './donation.css';

const Donation = () => {
    return (
        <section id="Donation">
        <div className="container"><div className="row">
        <div className="donation-card col-7">
            <h2 className="donation-title">小額捐款</h2>
            <h4 className="donation-subtitle">您的小筆捐款，是每隻毛孩未來的大大動力！</h4>
            <div className="donation-content"></div>
            <div className="donation-number"></div>
            <button className="btn btn-primary" type="button">前往捐款</button>
        </div>
        </div></div>
        </section>
    );
    }

export default Donation;