import "./Menu.css"

function Menu() {
    return (
        <div className="menu col-3 p-0">
            <img src="./image/logohomepage.png" alt="" className="menu__logo" />
            <ul className="menu__list list-style-none list-unstyled">
                <li className="menu__list-items">
                    <a href="./" className="menu__list-items__links text-decoration-none">
                        <img src="./icon/tongquanlogo.svg" alt="" className="menu__list-items-logo" />
                        <p className="menu__list-item-text">Tổng quan</p>
                    </a>
                </li>

                <li className="menu__list-items">
                    <a href="/sanpham" className="menu__list-items__links text-decoration-none">
                        <img src="./icon/sanphamlogo.svg" alt="" className="menu__list-items-logo" data-animation="bounceIn" />
                        <p className="menu__list-item-text">Sản phẩm</p>
                    </a>
                </li>

                <li className="menu__list-items">
                    <a href="/giohang" className="menu__list-items__links text-decoration-none">
                        <img src="./icon/giohanglogo.svg" alt="" className="menu__list-items-logo" />
                        <p className="menu__list-item-text">Giỏ hàng</p>
                    </a>
                </li>

                <li className="menu__list-items">
                    <a href="" className="menu__list-items__links text-decoration-none">
                        <img src="./icon/taikhoanlogo.svg" alt="" className="menu__list-items-logo" />
                        <p className="menu__list-item-text">Tài khoản</p>
                    </a>
                </li>

            </ul>

            <ul className="menu__list list-unstyled" style={{ marginTop: '120px' }}>
                <li className="menu__list-items">
                    <a href="" className="menu__list-items__links text-decoration-none">
                        <img src="./icon/trogiuplogo.svg" alt="" className="menu__list-items-logo" />
                        <p className="menu__list-item-text">Trợ giúp</p>
                    </a>
                </li>

                <li className="menu__list-items">
                    <a href="" className="menu__list-items__links text-decoration-none">
                        <img src="./icon/dangxuatlogo.svg" alt="" className="menu__list-items-logo" />
                        <p className="menu__list-item-text">Đăng xuất</p>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default Menu;