import Profile from "../../cart/component/Profile";

function MainAcount() {
    return (
        <div className="col-md-8 row">
            <Profile/>
            <div style={{background:'#FFFFFF'}} className="col-9">
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
                            <div className="user-settings__form-group col-md-6">
                                <label htmlFor="confirmOldPassword" className="user-settings__form-label">Nhập lại mật khẩu cũ</label>
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
                            <div className="user-settings__form-group col-md-6">
                                <label htmlFor="confirmNewPassword" className="user-settings__form-label">Nhập lại mật khẩu mới</label>
                                <input
                                    type="password"
                                    className="user-settings__form-input form-control"
                                    id="confirmNewPassword"
                                    placeholder="Nhập lại mật khẩu mới..."
                                />
                            </div>
                        </div>
                        <button className="user-settings__button btn btn-primary mt-3">Lưu thay đổi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAcount;