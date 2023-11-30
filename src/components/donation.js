import React from "react";
import './donation.css';
import title from '../static/小額捐款.png'
import number from '../static/累積金額.png'

const Donation = () => {
    return (
        <section id="Donation">
        <div className="container"><div className="row">
        <div className="donation-card col-7 ">
            <div className="container d-flex flex-column align-items-center py-4 justify-content-between">
            <img src={title} alt="小額捐款" className="title"/>
            {/* <h2 className="donation-title">小額捐款</h2> */}
            <h4 className="donation-subtitle">您的小筆捐款，是每隻毛孩未來的大大動力！</h4>
            {/* <div className="donation-content"></div>
            <div className="donation-number"></div> */}
            <img src={number} alt="累積金額" className="donation-number py-2"/>
            <button className="btn btn-primary mt-4" type="button">前往捐款</button>
            </div>
        </div>
        </div></div>
        </section>
    );
    }

export default Donation;