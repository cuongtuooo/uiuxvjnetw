import { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router";
import { registerUser } from "../../Api/fakeApi";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const newUser = registerUser({ email, password });
            console.log("Registered:", newUser);
            navigate("/login"); // Chuyển hướng đến trang login sau khi đăng ký thành công
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

                <div style={{ width: '40px' }}></div>


                <div className="login_from col-lg-4 col-md-12 d-flex flex-column align-items-center justify-content-center  ">
                    <img className="login_form-logo" src="./image/logo.png" alt="" />

                    <div className="login_form-details">
                        <h2 className="login_form-header">Account Signup</h2>
                        <p className="login_form-ders">Become a member and enjoy exclusive <br /> promotions.</p>
                        <div className="ruler"></div>

                        <form onSubmit={handleSubmit} className="login-action">
                            <div className="login__input">
                                <label htmlFor="" className="login__input-label">Full Name</label>
                                <input type="text" name="fullName" className="login__input-post" />
                            </div>

                            <div className="login__input">
                                <label htmlFor="" className="login__input-label">Email Address</label>
                                <input type="email" name="email" className="login__input-post" />
                            </div>

                            <div className="login__input">
                                <label htmlFor="" className="login__input-label">Gender</label>
                                <input 
                                    // type="text" 
                                    name="gender" 
                                    className="login__input-post"   
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="login__input">
                                <label htmlFor="" className="login__input-label">Date Of Birth</label>
                                <input type="text" name="date" className="login__input-post" />
                            </div>

                            <button type="submit" className="btn_sublit"> Contine</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;