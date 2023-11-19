import React from 'react'
import image1 from '../static/Img-活動01.png'
import image2 from '../static/Img-活動02.png'
import image3 from '../static/Img-活動03.png'
import './event.css'


const Event = () => {
    return (
        <section className="container" id="Event">
        <h1 className='text-center'>最新活動</h1>
        <div className="row" style={{height:"493px"}}>
        <div className="col-5">
        <div className="card">
            <div className="box-tag text-white">
                <h4>26</h4><p>DEC.</p>
            </div>
            <img src={image1} className="card-img-top event-img1" alt="..." style={{height:"20em", objectFit:"cover"}}/>
            <div className="card-body">
                <h5 className="card-title">參與台北寵物論壇 爭取貓咪友善環境</h5>
                <p className="card-text">炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，
                決定要全力宣傳「貓咪至上」的理念！
                我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。</p>
            </div>
        </div></div>
        <div className="col-7">
        <div className="row" style={{height:"232px",}}> <div className='col'>
        <div className="card">
            <div className="row g-0">
            <div className="col-5 col-xl-4"><img src={image2} className="img-fluid rounded-start" alt="..." style={{objectFit:"cover"}}/></div>
            <div className="col-7 col-xl-8"><div className="card-body">
                <div className="tag text-white">2023.12.26</div>
                <h5 className="card-title">帶著你的貓耳，來和我一起走！</h5>
                <p className="card-text">街上氣氛真的很棒，從小孩到大人，
                甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！
                這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。</p>
            </div></div></div>
        </div></div></div>
        <div className="row" style={{height:"232px",}}> <div className='col align-self-end'>
        <div className="card">
            <div className="row g-0 ">
            <div className="col-4"><img src={image3} className="img-fluid rounded-start" alt="..." style={{objectFit:"cover"}}/></div>
            <div className="col-8"><div className="card-body">
            <div className="tag text-white">2023.12.20</div>
                <h5 className="card-title">收容所模特兒大比拼！</h5>
                <p className="card-text">活動三消息內容：今天的收容所不再是一片寂靜。
                為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！</p>
            </div></div></div>
        </div></div></div>
        </div>
        </div>
        </section>
    );
    }

export default Event;