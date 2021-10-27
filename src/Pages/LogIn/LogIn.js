
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import signInImg from '../../Images/signin-image.jpg';
import './LogIn.css';

const LogIn = () => {

    const { error, setIsLoading, setUser, setError, signInUsingGoogle, handleEmailChange, handlePasswordChange, handleForgetPassword, handleLogin } = useAuth();

    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();

    const handleGoogleLogin = () => {
        setIsLoading(true);

        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.code);
            })
            .finally(() => setIsLoading(false));
    }










    return (
        <>
            <section className="sign-in mt-5">
                <div className="containerr ">
                    <div className="signin-content">
                        <div className="signin-image">
                            <div>
                                <img src={signInImg} alt="" />
                                <Link to="/signup" className="signup-image-link">Create an account</Link>
                            </div>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Login</h2>
                            <form onSubmit={handleLogin} className="register-form" id="login-form">
                                <div className="form-group">
                                    <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input onBlur={handleEmailChange} type="email" name="email" placeholder='Email' id="signInEmail" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input onBlur={handlePasswordChange} type="password" name="password" placeholder='Password' id="signInPass" required />
                                </div>
                                <h5 className='text-primary text-decoration' onClick={handleForgetPassword}><u>Forget Password</u></h5>
                                <p className='text-danger'>{error}</p>

                                <div className="form-group form-button">
                                    <input type="submit" name="login" className="form-submit" value="Log in" />
                                </div>
                            </form>
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li onClick={handleGoogleLogin}><Link to="#" ><i className="display-flex-center zmdi zmdi-google fab fa-google "></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LogIn;