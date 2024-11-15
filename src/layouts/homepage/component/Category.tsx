import { useState, useEffect } from "react";
import "./Category.css";

function Category() {
    const categoryItems = [
        { name: 'VJTEL', inlogo: './icon/iconvjtel.svg' , links:'./'},
        { name: 'VJFINTECH', inlogo: './icon/iconlist2.svg' , links:'./sanpham'},
        { name: 'VJMALL', inlogo: './icon/iconlist3.svg' , links:'./'},
        { name: 'VJSOURCE', inlogo: './icon/iconlist4.svg' , links:'./'}
    ];

    // Lấy giá trị `activeIndex` từ localStorage (nếu có) khi component được khởi tạo
    const [activeIndex, setActiveIndex] = useState<number | null>(() => {
        const storedIndex = localStorage.getItem("activeIndex");
        return storedIndex !== null ? parseInt(storedIndex, 10) : null;
    });

    // Cập nhật `localStorage` khi `activeIndex` thay đổi
    const handleSetActiveIndex = (index: number) => {
        setActiveIndex(index);
        localStorage.setItem("activeIndex", index.toString()); // Lưu vào localStorage
    };

    return (
        <ul className="main__list mt-4">
            {
                categoryItems.map((category, index) => (
                    <li 
                        key={index} 
                        className={`main__list-items ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleSetActiveIndex(index)}
                    >
                        <a href={category.links} className="main__list-items-link">
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
    );
}

export default Category;
