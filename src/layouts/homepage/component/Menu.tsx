import { useState } from "react";
import "./Menu.css"

function Menu() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <button style={{background:'url("./icon/bars-solid.svg") '}} className="menu-toggle" onClick={toggleMenu}></button>
            <div className={`menu col-lg-3 col-md-4 col-12 ${isMenuOpen ? 'active' : ''}`}>
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
                        <a href="/taikhoan" className="menu__list-items__links text-decoration-none">
                            <img src="./icon/taikhoanlogo.svg" alt="" className="menu__list-items-logo" />
                            <p className="menu__list-item-text">Tài khoản</p>
                        </a>
                    </li>

                </ul>

                <ul className="menu__list list-unstyled" style={{ marginTop: '50px' }}>
                    <li className="menu__list-items">
                        <a href="/trogiup" className="menu__list-items__links text-decoration-none">
                            <img src="./icon/trogiuplogo.svg" alt="" className="menu__list-items-logo" />
                            <p className="menu__list-item-text">Trợ giúp</p>
                        </a>
                    </li>

                    <li className="menu__list-items">
                        <a href="/login" className="menu__list-items__links text-decoration-none">
                            <img src="./icon/dangxuatlogo.svg" alt="" className="menu__list-items-logo" />
                            <p className="menu__list-item-text">Đăng xuất</p>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu;