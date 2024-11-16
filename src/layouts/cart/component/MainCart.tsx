import { useState } from "react";
import "./MainCart.css"
import Profile from "./Profile";

function MainCart() {

    const handleTabClick = (tab: string): void => {
        console.log(`Tab selected: ${tab}`);
    };

    const [activatedProducts, setActivatedProducts] = useState<boolean[]>(Array(6).fill(false));

    const handleActivateProduct = (index: number): void => {
        setActivatedProducts((prevState) => {
            const newState = [...prevState];
            newState[index] = true; // Đánh dấu sản phẩm tại index đã được kích hoạt
            return newState;
        });
    };
    return (
        <div className="col-9 main-container">
            <div className="row">
                {/* Sidebar */}
                <Profile/>

                <div style={{width: '50px'}}>

                </div>

                {/* Main Content */}
                <div className="main-content col-md-8">
                    {/* Navigation */}
                    <div className="main-content__navigation d-flex justify-content-around">
                        <button
                            className="main-content__tab main-content__tab--active"
                            onClick={() => handleTabClick("purchased")}
                        >
                            Sản phẩm đã mua
                        </button>
                        <button
                            className="main-content__tab main-content__tab--active"
                            onClick={() => handleTabClick("cart")}
                        >
                            Giỏ hàng
                        </button>
                    </div>
                    {/* Product Grid */}
                    <div className="main-content__product-grid">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                className="main-content__product-card"
                                key={index}
                            >
                                <div className="main-content__product-body">
                                    <h5 className="main-content__product-title">
                                        VJTEL 1
                                    </h5>
                                    <button
                                        className="main-content__product-button"
                                        onClick={() =>
                                            handleActivateProduct(index)
                                        }
                                        disabled={activatedProducts[index]}
                                    >
                                        {activatedProducts[index] ? "Đã kích hoạt" : "Kích hoạt"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCart;