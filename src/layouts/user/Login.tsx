import { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router";
import { loginUser } from "../../Api/fakeApi";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
          const user = loginUser(email, password);
          console.log("Logged in:", user);
          navigate("/homepage"); // Redirect to dashboard page
        } catch (err: any) {
          setError(err.message);
        }
      };

    return (
        <div className="container-fuid">
            <div className="row">
                <div className="login_image col-lg-7 d-none d-lg-block">
                    <img className="login_image-png" src="./image/login1.png" alt="" />
                </div>
                <div style={{width:'40px'}}></div>
                <div className="login_from col-lg-4 col-md-12 d-flex flex-column align-items-center justify-content-center">
                    <img className="login_form-logo" src="./image/logo.png" alt="" />

                    <div className="login_form-details">
                        <h2 className="login_form-header">Account Login</h2>
                        <p className="login_form-ders signup__ders">If you are already a member you can login with your email address and password.</p>
                        <div className="ruler"></div>

                        <form onSubmit={handleSubmit} className="login-action">
                            <div className="login__input">
                                <label htmlFor="" className="login__input-label">Email address</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                    className="login__input-post"
                                />
                            </div>

                            <div className="login__input">
                                <label htmlFor="" className="login__input-label">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                    className="login__input-post"
                                />
                            </div>
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            <div className="remember ">
                                <input type="checkbox" className="remember_checkbox float-left"/>
                                <label className="remember_label">Remember me</label>
                            </div>

                            <button type="submit" className="btn_sublit"> Register Account</button>
                        </form>

                        <p className="signup__text">Dont have an account ?  <a href="/signup" className="signup__link">Sign up here</a> </p>
                    </div>

                    <div className="link__in4">
                        <div className="link__wrap m-3">
                            <a href="" className="link__in4-dt"><img className="link__in4-logo link__in4-logogg" src="./icon/google.svg" alt="" /></a>
                        </div>
                        <div className="link__wrap m-3">
                            <a href="" className="link__in4-dt"><img className="link__in4-logo link__in4-logofb" src="./icon/facebook.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;