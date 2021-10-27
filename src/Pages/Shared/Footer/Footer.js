import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './Footer.css';

const Footer = () => {

    return (
        <footer
            className="text-center text-lg-start text-white footer-color ">

            <div className="container p-4 pb-0">
                <section className="">

                    <div className="row my-3">

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                CHANGE HEALTH CARE
                            </h6>
                            <p className='color'>
                                Change Health Care is a household name in the nursing service industry in Bangladesh. We provide compassionate nursing services and various types of home care in BD. We have a great team of physiotherapists, nurses, and other professionals.
                            </p>
                        </div>


                        <hr className="w-100 clearfix d-md-none" />


                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto ">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Quick Links</h6>
                            <NavLink to="/home" className='nav-link p-0 fs-6'>Home</NavLink>
                            <NavLink as={HashLink} to="/home#services" className='nav-link  p-0 fs-6'>Services</NavLink>
                            <NavLink to="/about" className='nav-link  p-0 fs-6'>About</NavLink>
                            <NavLink to="/contact" className='nav-link  p-0 fs-6' > Contact</NavLink>
                        </div>


                        <hr className="w-100 clearfix d-md-none" />


                        <hr className="w-100 clearfix d-md-none" />


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto ">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p className='color'><i className="fas fa-home mr-3"></i> Dhaka-1012, Bangladesh</p>
                            <p className='color'><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                            <p className='color'><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p className='color'><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>


                            <a
                                className="btn btn-primary btn-floating m-1 facebook"
                                href="#!"
                                role="button"
                            ><i className="fab fa-facebook-f"></i
                            ></a>


                            <a
                                className="btn btn-primary btn-floating m-1 twitter"
                                href="#!"
                                role="button"
                            ><i className="fab fa-twitter"></i
                            ></a>

                            <a
                                className="btn btn-primary btn-floating m-1 google"
                                href="#!"
                                role="button"
                            ><i className="fab fa-google"></i
                            ></a>


                            <a
                                className="btn btn-primary btn-floating m-1 instagram"
                                href="#!"
                                role="button"
                            ><i className="fab fa-instagram"></i
                            ></a>


                            <a
                                className="btn btn-primary btn-floating m-1 linkedin"
                                href="#!"
                                role="button"
                            ><i className="fab fa-linkedin-in"></i
                            ></a>
                            <a
                                className="btn btn-primary btn-floating m-1 whatsapp"
                                href="#!"
                                role="button"
                            ><i className="fab fa-whatsapp"></i
                            ></a>


                        </div>
                    </div>

                </section>

            </div>
            <div
                className="text-center p-3 copy-right">
                <p className="text-white"> © 2021 Copyright: CHANGE HEALTH CARE</p>
            </div>

        </footer>
    );
};

export default Footer;