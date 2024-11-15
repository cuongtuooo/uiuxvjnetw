import "./Calender.css"

function Calender() {
    return (
            <div className="card-body custom__card row">
                <h5 className="card__title">Khách hàng</h5>
                <ul className="custom__card__list col-md-7">
                    <li className="custom__card__list-items">Luôn tôn trọng khách hàng, giữ thái độ lịch sự và văn minh khi tiếp xúc với khách hàng</li>
                    <li className="custom__card__list-items">Giải quyết nhanh chóng vấn đề khách hàng gặp phải</li>
                    <li className="custom__card__list-items">Giữ liên lạc, tương tác thường xuyên với khách hàng</li>
                </ul>
                <div className="custom__card-calender col-md-5">
                    <div className="custom__card-calender-date-wrap">
                        <div className="custom__card-calender-date">
                            <h3 className="custom__card-calender-date-text" style={{ fontWeight: '700' }}>17</h3>
                            <small style={{ fontWeight: '700' }}>DD</small>
                        </div>
                        <div className="custom__card-calender-date">
                            <h3 className="custom__card-calender-date-text" style={{ fontWeight: '700' }}>09</h3>
                            <small style={{ fontWeight: '700' }}>MM</small>
                        </div>
                        <div className="custom__card-calender-date">
                            <h3 className="custom__card-calender-date-text" style={{ fontWeight: '700' }}>2024</h3>
                            <small style={{ fontWeight: '700' }}>YYYY</small>
                        </div>
                    </div>
                    
                    <div className="custom__card-calender-custom-wrap">
                        <div className="custom__card-calender-custom">
                            <h4 style={{ fontWeight: '700', margin: '0' }}>1368</h4>
                            <small style={{fontSize: '20px', fontWeight: '700'}}>Khách hàng</small>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Calender;