import Profile from "../../cart/component/Profile";
import "./MainAcount.css"

function MainAcount() {
    return (
        <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-8 col-12 row main-container">
            <Profile/>

            <div style={{width:'40px'}} className=""></div>
            <div className="col-xl-8 col-md-12">
                <div className="user__wraper">
                    <div className="user-settings container mt-5">
                        <h2 className="user-settings__title mb-4">Cài đặt người dùng</h2>

                        {/* Chi tiết */}
                        <div className="user-settings__section user-settings__details mb-5">
                            <h5 className="user-settings__section-title">Chi tiết</h5>
                            <div className="user-settings__form row g-3">
                                <div className="user-settings__form-group col-md-6">
                                    <label htmlFor="firstName" className="user-settings__form-label">Tên</label>
                                    <input
                                        type="text"
                                        className="user-settings__form-input form-control"
                                        id="firstName"
                                        placeholder="Pepito Rodrick ..."
                                    />
                                </div>
                                <div className="user-settings__form-group col-md-6">
                                    <label htmlFor="lastName" className="user-settings__form-label">Họ</label>
                                    <input
                                        type="text"
                                        className="user-settings__form-input form-control"
                                        id="lastName"
                                        placeholder="Coronel Sifuentes ..."
                                    />
                                </div>
                                <div className="user-settings__form-group col-md-6">
                                    <label htmlFor="email" className="user-settings__form-label">Email</label>
                                    <input
                                        type="email"
                                        className="user-settings__form-input form-control"
                                        id="email"
                                        placeholder="pepito.c.sifuentes@uni.pe"
                                    />
                                </div>
                                <div className="user-settings__form-group col-md-6">
                                    <label htmlFor="phone" className="user-settings__form-label">Số Điện Thoại</label>
                                    <div className="input-group">
                                        <span className="user-settings__input-group-text input-group-text">+51</span>
                                        <input
                                            type="tel"
                                            className="user-settings__form-input form-control"
                                            id="phone"
                                            placeholder="969 123 456"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="user-settings__button btn btn-primary mt-3">Lưu thay đổi</button>
                        </div>

                        {/* Mật khẩu */}
                        <div className="user-settings__section user-settings__password">
                            <h5 className="user-settings__section-title">Mật Khẩu</h5>
                            <div className="user-settings__form row g-3">
                                <div className="user-settings__form-group col-md-6">
                                    <label htmlFor="oldPassword" className="user-settings__form-label">Mật khẩu cũ</label>
                                    <input
                                        type="password"
                                        className="user-settings__form-input form-control"
                                        id="oldPassword"
                                        placeholder="Nhập mật khẩu cũ..."
                                    />
                                </div>
                                <div className="user-settings__form-group col-md-6 d-flex align-items-end">
                                    <label htmlFor="confirmOldPassword" className="user-settings__form-label"></label>
                                    <input
                                        type="password"
                                        className="user-settings__form-input form-control"
                                        id="confirmOldPassword"
                                        placeholder="Nhập lại mật khẩu cũ..."
                                    />
                                </div>
                                <div className="user-settings__form-group col-md-6">
                                    <label htmlFor="newPassword" className="user-settings__form-label">Mật khẩu mới</label>
                                    <input
                                        type="password"
                                        className="user-settings__form-input form-control"
                                        id="newPassword"
                                        placeholder="Nhập mật khẩu mới..."
                                    />
                                </div>
                                <div className="user-settings__form-group col-md-6 d-flex align-items-end">
                                    <label htmlFor="confirmNewPassword" className="user-settings__form-label"></label>
                                    <input
                                        type="password"
                                        className="user-settings__form-input form-control"
                                        id="confirmNewPassword"
                                        placeholder="Nhập lại mật khẩu mới..."
                                    />
                                </div>
                            </div>
                            <button className="user-settings__button mt-3">Lưu thay đổi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAcount;