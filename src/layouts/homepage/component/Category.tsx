import React, { useState } from "react";
import "./Category.css";

// Định nghĩa kiểu cho props
type CategoryProps = {
    onCategoryClick: (categoryName: string) => void;
};

// Định nghĩa kiểu cho từng item trong categoryItems
type CategoryItem = {
    name: string;
    inlogo: string;
};

const Category: React.FC<CategoryProps> = ({ onCategoryClick }) => {
    // Danh sách category với kiểu dữ liệu rõ ràng
    const categoryItems: CategoryItem[] = [
        { name: 'VJTEL', inlogo: './icon/iconvjtel.svg' },
        { name: 'VJFINTECH', inlogo: './icon/iconlist2.svg' },
        { name: 'VJMALL', inlogo: './icon/iconlist3.svg' },
        { name: 'VJSOURCE', inlogo: './icon/iconlist4.svg' }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleItemClick = (index: number, categoryName: string) => {
        setActiveIndex(index);
        onCategoryClick(categoryName); // Gọi hàm từ MainProduct
    };

    return (
        <ul className="main__list mt-4">
            {categoryItems.map((category, index) => (
                <li 
                    key={index} 
                    className={`main__list-items ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleItemClick(index, category.name)}
                >
                    <a href="#" className="main__list-items-link">
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
            ))}
        </ul>
    );
};

export default Category;
