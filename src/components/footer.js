import React from "react"
import './footer.css'
import title from '../static/logo淺色.png'

const Footer = () => {
    return (
        <>
        <footer>
        <div className="container">
            <div className="row mb-4">
                <div className="footer-title col-5 align-self-start text-start">
                <img src={title} alt="喵立翰" className="footer-title"/>
                </div>
                <div className="footer-content col-7 align-self-end">
                <div className="row justify-content-evenly">
                <div className="col-auto">
                <p className="footer-subtitle">Menu</p>
                <ul className="footer-menu">
                    <li><a href="/">首頁</a></li>
                    <li><a href="#Event">最新活動</a></li>
                    <li><a href="#Contact">民眾服務信箱</a></li>
                </ul>
                <ul className="footer-menu">
                    <li><a href="#About">候選人主張</a></li>
                    <li><a href="#Policy">政策議題</a></li>
                    <li><a href="#Donation">小額捐款</a></li>
                </ul>
                </div>
                <div className="col-auto">
                <p className="footer-subtitle">Office information</p>
                <p className="text-start">地址：台北市喵星區毛茸茸大道88號喵喵大樓3樓<br/>
                電話：(02) 888-5678 <br/>
                郵件：meowoffice@linmeow.tw
                </p>
                </div>
                </div>
                </div>
            </div>
            <p style={{color: "#999999"}}>版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。</p>
        </div>
    </footer>
    </>
    )
}

export default Footer;