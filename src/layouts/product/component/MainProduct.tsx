import React, { useState } from "react";
import Category from "../../homepage/component/Category";
import "./MainProduct.css";

function MainProduct() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    //modal
    const openModal = (): void => {
        const modal = document.getElementById("modal");
        if (modal) {
            modal.style.display = "flex";
        } else {
            console.error("Modal element not found");
        }
    }

    const closeModal = (): void => {
        const modal = document.getElementById("modal");
        if (modal) {
            modal.style.display = "none";
        } else {
            console.error("Modal element not found");
        }
    }

    //confirm
    const closeConfirm = (): void => {
        const cofirm = document.querySelector('.modal-dialog') as HTMLDivElement;
        if (cofirm) {
            cofirm.style.display = "none";
        } else {
            console.error("Modal element not found");
        }
    }

    const openConfirm = (): void => {
        const cofirm = document.querySelector('.modal-dialog') as HTMLDivElement;
        if (cofirm) {
            cofirm.style.display = "block";
        } else {
            console.error("Modal element not found");
        }
    }

    return (
        <div className="col-9 main-container">
            <div className="product">
                <div className="product_heading">
                    <h5 className="product_heading-text">Danh mục sản phẩm</h5>
                </div>

                <a href="./giohang" className="product__cart">
                    <img className="product__cart-icon" src="./image/cartlogo.png" alt="Giỏ hàng" />
                    <span className="product__cart-text">Giỏ hàng</span>
                </a>
            </div>

            {/* Truyền hàm handleCategoryClick xuống Category */}
            <Category onCategoryClick={handleCategoryClick} />

            {/* Hiển thị nội dung dựa trên selectedCategory */}
            <div className="container product__content">
                {selectedCategory === null ? (
                    // Mặc định hiển thị "Sản phẩm chính"
                    <div className="product-card p-4 text-white text-center">
                        <h2 className="font-weight-bold mb-3">Sản phẩm chính</h2>
                        <p>Trang thương mại điện tử áp dụng công nghệ blockchain, thanh toán coin nội bộ và USDT</p>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="product-item">
                                    <img src="./icon/productcontent1.svg" alt="Viễn thông" className="mb-2" />
                                    <p className="font-weight-bold">Viễn thông</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-item">
                                    <img src="./icon/productcontent2.svg" alt="Tài chính" className="mb-2" />
                                    <p className="font-weight-bold">Tài chính</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-item">
                                    <img src="./icon/productcontent3.svg" alt="Cung ứng lao động" className="mb-2" />
                                    <p className="font-weight-bold">Cung ứng lao động</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : selectedCategory === "VJTEL" ? (
                    // Hiển thị các gói giá của VJTEL khi chọn "VJTEL"
                    <div className="vj-tel-content">
                        <div className="price-card">
                            <h2>VJTEL 1 Tháng</h2>
                            <img src="./icon/product1.png" alt="Sản phẩm 1" className="price-image" />

                            <div className="price-info">
                                <ul>
                                    <li>Phù hợp với cá nhân, hộ gia đình</li>
                                    <li>Phí hòa mạng</li>
                                    <li>Trang bị Modem 2 băng tần 2.4Ghz & 5.0Ghz</li>
                                    <li>Tặng: Lắp đặt nhanh trong ngày</li>
                                </ul>
                            </div>

                            <div className="price-buttons">
                                <button className="buy-now" onClick={openModal}>Mua ngay</button>
                                <button className="add-to-cart">+ Giỏ hàng</button>
                            </div>

                            {/* Modal */}
                            <div id="modal" className="modal">
                                <div className="modal-content">
                                    <div className="modal__content-wrap">
                                        <span className="close" onClick={closeModal}>&times;</span>
                                        <h2>VJTEL 1 Tháng</h2>
                                    </div>
                                    <p className="modal-content-details">Chi tiết</p>
                                    <div className="modal-content-total">
                                        <p>Tổng:</p>
                                        <p>5 USDT</p>
                                    </div>
                                    <button className="pay-now" onClick={openConfirm}>Thanh toán</button>

                                    <div className="modal-dialog">
                                        <div className="confirm-content">
                                            <div className="confirm-header">
                                                <h5 className="confirm-title">VJTEL 1 Tháng</h5>
                                            </div>
                                            <div className="confirm-body text-center">
                                                <p>Bạn có chắc muốn mua gói VJTEL?</p>
                                            </div>
                                            <div className="confirm-footer">
                                                <button type="button" className="btn btn-secondary"  onClick={closeModal}>Hủy</button>
                                                <button type="button" className="btn btn-primary" onClick={closeConfirm}>Xác nhận</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>

                        <div className="price-card">
                            <h2>VJTEL 3 Tháng</h2>
                            <img src="./icon/product2.svg" alt="Sản phẩm 2" className="price-image" />

                            <div className="price-info">
                                <ul>
                                    <li>Phù hợp với cá nhân, hộ gia đình</li>
                                    <li>Phí hòa mạng</li>
                                    <li>Trang bị Modem 2 băng tần 2.4Ghz & 5.0Ghz</li>
                                    <li>Tặng: Lắp đặt nhanh trong ngày</li>
                                </ul>
                            </div>

                            <div className="price-buttons">
                                <button className="buy-now">Mua ngay</button>
                                <button className="add-to-cart">+ Giỏ hàng</button>
                            </div>
                        </div>
                        <div className="price-card">
                            <h2>VJTEL 6 Tháng</h2>
                            <img src="./icon/product3.png" alt="Sản phẩm 3" className="price-image" />

                            <div className="price-info">
                                <ul>
                                    <li>Phù hợp với cá nhân, hộ gia đình</li>
                                    <li>Phí hòa mạng</li>
                                    <li>Trang bị Modem 2 băng tần 2.4Ghz & 5.0Ghz</li>
                                    <li>Tặng: Lắp đặt nhanh trong ngày</li>
                                </ul>
                            </div>


                            <div className="price-buttons">
                                <button className="buy-now">Mua ngay</button>
                                <button className="add-to-cart">+ Giỏ hàng</button>
                            </div>
                        </div>
                        <div className="price-card">
                            <h2>VJTEL 12 Tháng</h2>
                            <img src="./icon/product4.svg" alt="Sản phẩm 4" className="price-image" />

                            <div className="price-info">
                                <ul>
                                    <li>Phù hợp với cá nhân, hộ gia đình</li>
                                    <li>Phí hòa mạng</li>
                                    <li>Trang bị Modem 2 băng tần 2.4Ghz & 5.0Ghz</li>
                                    <li>Tặng: Lắp đặt nhanh trong ngày</li>
                                </ul>
                            </div>


                            <div className="price-buttons">
                                <button className="buy-now">Mua ngay</button>
                                <button className="add-to-cart">+ Giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Hiển thị "Coming Soon" cho các category khác
                    <div className="coming-soon">
                        <h2>COMING SOON</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MainProduct;
