import Category from "../../homepage/component/Category";
import "./MainProduct.css"

function MainProduct() {

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

            <Category />

            <div className="container product__content">
                <div className="product-card p-4 text-white text-center">
                    <h2 className="font-weight-bold mb-3">Sản phẩm chính</h2>
                    <p>Trang thương mại điện tử áp dụng công nghệ blockchain, thanh toán coin nội bộ và USDT</p>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="product-item">
                                <img src="./icon/productcontent1.svg" alt="Viễn thông" className="mb-2"/>
                                <p className="font-weight-bold">Viễn thông</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-item">
                                <img src="./icon/productcontent2.svg" alt="Tài chính" className="mb-2"/>
                                <p className="font-weight-bold">Tài chính</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-item">
                                <img src="./icon/productcontent3.svg" alt="Cung ứng lao động" className="mb-2"/>
                                <p className="font-weight-bold">Cung ứng lao động</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainProduct;