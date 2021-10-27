
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import signUpImg from '../../Images/signup-image.jpg';
import './SignUp.css';

const SignUP = () => {

    const { error, handleEmailChange, handlePasswordChange, handleSignUp, handleRePasswordChange, handleNameChange } = useAuth();




    return (
        <>
            <section className="signup mt-5 ">
                <div className="containerr">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form onSubmit={handleSignUp} className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input onBlur={handleNameChange} type="text" name="name" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email" ></i></label>
                                    <input onBlur={handleEmailChange} type="email" name="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input onBlur={handlePasswordChange} type="password" name="pass" id="pass" placeholder="Password" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input onBlur={handleRePasswordChange} type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" required />
                                </div>
                                <p className='text-danger'>{error}</p>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Sign Up" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <div>
                                <img src={signUpImg} alt="" />
                                <Link to='/login' className="signup-image-link">I am already member</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUP;