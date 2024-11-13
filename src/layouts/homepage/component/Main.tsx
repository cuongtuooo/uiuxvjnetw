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
        </div>
    )
}

export default Main;