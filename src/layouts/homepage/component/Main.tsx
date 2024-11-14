import { useState } from "react";
import "./Main.css"
function Main() {
    const categoryItems = [
        { name: 'VJTEL', inlogo: './icon/iconvjtel.svg' },
        { name: 'VJFINTECH', inlogo: './icon/iconlist2.svg' },
        { name: 'VJMALL', inlogo: './icon/iconlist3.svg' },
        { name: 'VJSOURCE', inlogo: './icon/iconlist4.svg' }
    ]

    return (
        <div className="main col-9">
            <ul className="main__list">
                {
                    categoryItems.map((category) => (
                        <li className="main__list-items">
                            <a href="" className="main__list-items-link">
                                <div className="main_items-items-logo-wrap">
                                    <img src="./image/logolist.png" alt="" className="main__list-items-logo" />
                                    <img src={category.inlogo} alt="" className="main__list-items-logo-icon" />
                                </div>
                                <div className="main__list-items-name">
                                    <p className="main__list-items-name-text">{category.name}</p>
                                    <img src="./image/imglist.png" alt="" className="main__list-items-name-img" />
                                </div>

                                <button className="main__list-items-button">View</button>
                            </a>
                        </li>
                    ))
                }
            </ul>

            
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Khách hàng</h5>
                            <ul>
                                <li>Luôn tôn trọng khách hàng...</li>
                                <li>Giải quyết nhanh chóng vấn đề khách hàng gặp phải.</li>
                                <li>Gắn kết và tương tác thường xuyên với khách hàng.</li>
                            </ul>
                            <p><strong>Ngày:</strong> 17/09/2024</p>
                            <p><strong>Số lượng:</strong> 1,368 Khách hàng</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Tin tức khuyến mãi</h5>
                            <div id="promoCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#promoCarousel" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                </div>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="./image/carousel1.png" className="d-block w-100" alt="Promotion 1"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./image/carousel2.png" className="d-block w-100" alt="Promotion 2"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="./image/carousel3.png" className="d-block w-100" alt="Promotion 3"/>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#promoCarousel"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#promoCarousel"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;