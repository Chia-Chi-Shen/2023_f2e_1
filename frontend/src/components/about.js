import React from "react";
import banner_profile from '../static/banner-profile.png'
import banner_right from '../static/banner-right.png'
import banner_bottom from '../static/banner-bottom.png'
import banner_h1 from '../static/banner-h1.png'
import banner_h4 from '../static/banner-h4.png'
import './about.css'

const About = () => {
    return (
        <section id="About" className="d-block">
        <div className="container">
        <div className='banner_main text-start'>
            <div className='banner_title text-start d-inline-block'>
                <img src={banner_h4} alt="banner_h4" className="banner_h4 d-block"/>
                <img src={banner_h1} alt="banner_h1" className="banner_h1"/>
            </div>
            <img src={banner_profile} alt="banner_profile" className="banner_profile"/>
            <img src={banner_right} alt="banner_right" className="banner_right"/>
            <img src={banner_bottom} alt="banner_bottom" className="banner_bottom"/>
            <div className="banner_content">
            <div className="banner_content_title">護航台灣幸福經濟 從照顧每一隻貓咪開始</div>
            <div className="banner_content_text">我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。
            <br/><br/> 
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。</div>
        </div>
        </div>
        
        
        
        
        </div>
        </section>
    );
    }
export default About;