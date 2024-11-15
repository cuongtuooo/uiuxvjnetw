import { useState } from "react";
import "./Main.css"
import Calender from "./Calender";
import Carousel from "./Carousel";
import Category from "./Category";
function Main() {
    return (
        <div className="main col-9">
            <Category/>

            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                        <Calender />

                        <div className="card-body nationnal__card row mt-4">
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