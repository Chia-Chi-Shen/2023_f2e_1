import React from "react";
import './contact.css'
import title from '../static/民眾服務信箱.png'
import cat from '../static/footer_cat.png'

const Contact = () => {
    return(
        <section id="Contact">
        <div className="container"><div className="row">
            <div className="contact-text col-7">
                {/* <h2 className="contact-title">民眾服務信箱</h2> */}
                <img src={title} alt="民眾服務信箱" className="title"/>
                <h4 className="contact-subtitle">您的聲音，我們的行動！</h4>
                <h4 className="contact-content">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。
                無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</h4>
            </div>
            <div className="contact-form col-5">
                <form className="contact-form-content">
                    <div className="mb-3">
                        <input type="text" className="form-control" id="name" placeholder="您的姓名"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" placeholder="您的Email"/>
                    </div>
                    <div className="mb-3">
                        <input type="tel" className="form-control" id="phone" placeholder="您的手機"/>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" rows="3" placeholder="您的建言"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">送出意見</button>
                </form>
            </div>
        </div></div>
        <img className="footer-cat" rc={cat} alt="cat"/>
        </section>
    )
}

export default Contact;