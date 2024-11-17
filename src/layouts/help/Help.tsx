import Menu from "../homepage/component/Menu";
import "./Help.css"
function Help() {
    return (
        <div className="">
            <div className="container-fuid background">
                <div className="row">
                    <Menu />

                    <div className="col-9 main-container">
                        <div className="help-form__header text-center">
                            <h3 className="help-form__title">Trợ giúp</h3>
                        </div>
                        <div className="help-form container">
                            <div className="help-form__body d-flex flex-column gap-2">
                                <textarea
                                    className="help-form__textarea form-control"
                                    placeholder="Bạn cần chúng tôi trợ giúp điều gì?"
                                />
                                <button className="help-form__button">
                                    Send <span className="help-form__button-icon">→</span>
                                </button>
                            </div>
                        </div>
                        <div className="help-form__footer">
                            <div className="help-form__contact">
                                <span className="help-form__icon">📧</span> vjnetwork2655@gmail.com
                            </div>
                            <div className="help-form__contact">
                                <span className="help-form__icon">📞</span> 0345637034
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help;