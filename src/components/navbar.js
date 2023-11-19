import React from "react";
import logo from "../static/logo深色.png";
import './navbar.css';

//
const Navbar = () =>
{
    return(
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="Logo" className="logo" />
            </a>
            <div className="navbar-collapse collapse" >
            <div className="navbar-nav">
                <a className="nav-link " href="#About">候選人主張</a>
                <a className="nav-link" href="#Event">最新活動</a>
                <a className="nav-link" href="#Policy">政策議題</a>
                <a className="nav-link" href="#Contact">民眾服務信箱</a>
            </div>
            </div>
            <button className="btn btn-primary goto-donation" type="button">
                <a href="#Donation">小額捐款</a>
            </button>
        </div>
        </nav>
    )
}

export default Navbar;


/*
<div className="navbar">
        <div className="logo-box">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">候選人主張</a></li>
            <li><a href="#">最新活動</a></li>
            <li><a href="#">政策議題</a></li>
            <li><a href="#">民眾服務信箱</a></li>
          </ul>
        </nav>
        <button>
          <a href="#">小額捐款</a>
        </button>
        </div>
*/