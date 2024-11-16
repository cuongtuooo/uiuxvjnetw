import "./MainCart.css"

function MainCart() {

    const handleTabClick = (tab: string): void => {
        console.log(`Tab selected: ${tab}`);
    };

    const handleActivateProduct = (productName: string): void => {
        alert(`Sản phẩm ${productName} đã được kích hoạt!`);
    };
    return (
        <div className="col-9">
            <div className="row">
                {/* Sidebar */}
                <div className="sidebar col-md-3">
                    <div className="sidebar__profile text-center mb-4">
                        <img
                            src="./image/profileimg.png"
                            alt="User Avatar"
                            className="sidebar__profile-image"
                        />
                        <h5 className="sidebar__username">@User-Name</h5>
                        <p className="sidebar__email">
                            sampleuser@email.com
                        </p>
                    </div>

                    {/* info */}
                    <div className="sidebar__info-box">
                        <h6 className="sidebar__info-title">Thông tin</h6>
                        <p className="d-flex">
                            <b style={{marginRight:'14px'}}>Tên:</b> Name, Last Name
                        </p>
                        <p>
                            <b style={{marginRight:'14px'}}>Email:</b> user@email.com
                        </p>
                        <p>
                            <b style={{marginRight:'14px'}}>SDT:</b> +51 966 696 123
                        </p>

                        <div className="sidebar__language-select">
                            <h6 className="sidebar__language-title">Lựa chọn</h6>
                            <div className="sidebar__language__wrap d-flex align-items-center">
                                <label htmlFor="language" className="sidebar__language-label">Ngôn ngữ:</label>
                                <select
                                    id="language"
                                    className="sidebar__language-dropdown"
                                >
                                    <option value="vi">Tiếng Việt</option>
                                    <option value="en">English</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Content */}
                <div className="main-content col-md-9">
                    {/* Navigation */}
                    <div className="main-content__navigation d-flex">
                        <button
                            className="main-content__tab main-content__tab--active"
                            onClick={() => handleTabClick("purchased")}
                        >
                            Sản phẩm đã mua
                        </button>
                        <button
                            className="main-content__tab"
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
                                            handleActivateProduct("VJTEL 1")
                                        }
                                    >
                                        Kích hoạt
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