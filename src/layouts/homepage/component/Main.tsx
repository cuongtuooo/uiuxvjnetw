import { useState } from "react";
import "./Main.css"
import Calender from "./Calender";
import Carousel from "./Carousel";
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
                    <div className="card shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                        <Calender />

                        <div className="card-body nationnal__card row">
                            <h5 className="card__title">Đối Tác Quốc tế</h5>
                            <ul className="nationnal__card__list col-md-5">
                                <li className="nationnal__card__list-items">Hợp tác với nhiều quốc gia.</li>
                                <li className="nationnal__card__list-items">Sở hữu đội ngũ nhân viên dày kinh nghiệm trong ngành truyền thông,  là cánh tay đắc lực hỗ trợ trung tâm xây dựng chiến lược truyền thông bài bản cùng những định hướng phát triển trong tương lai.</li>
                            </ul>

                            <div className="nationnal__card-img col-md-7">
                                <img src="./image/doitacquocte.png" alt="" className="nationnal__card-img-details" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default Main;