import "./Login.css"

function SignUp (){
    return (
        <div className="container-fuid">
            <div className="row">
                <div className="login_image col-md-7">
                    <img className="login_image-png" src="./image/login1.png" alt="" />
                </div>

                <div className="login_from col-md-5">
                    <img className="login_form-logo" src="./image/logo.png" alt="" />

                    <div className="login_form-details">
                        <h2 className="login_form-header">Account Signup</h2>
                        <p className="login_form-ders">Become a member and enjoy exclusive <br/> promotions.</p>
                        <div className="ruler"></div>

                        <form  action="/Login" className="login-action">
                            <div className="login__input">
                                <label htmlFor="" className="login__input-label">Full Name</label>
                                <input type="text" name="fullName" className="login__input-post"/>
                            </div>

                            <div className="login__input">
                                <label htmlFor="" className="login__input-label">Email Address</label>
                                <input type="email" name="email" className="login__input-post"/>
                            </div>

                            <div className="login__input">
                                <label htmlFor="" className="login__input-label">Gender</label>
                                <input type="text" name="gender" className="login__input-post"/>
                            </div>

                            <div className="login__input">
                                <label htmlFor="" className="login__input-label">Date Of Birth</label>
                                <input type="text" name="date" className="login__input-post"/>
                            </div>

                            <button type="submit" className="btn_sublit"> Register Account</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;