import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="container">
                <div className="row pt-4">
                    <div className="col-lg-4 text-start">
                        <h5 className='mb-3'>BLOG</h5>
                        <p>TERMS OF USAGE</p>
                        <p>PRIVACY POLICY</p>
                        <p>PRICING AND PLAN</p>
                        <p>DOCUMENTATION</p>
                    </div>
                    <div className="col-lg-4 text-start">
                        <h5 className='mb-3'>POPULAR COURSES</h5>
                        <p>Learning English</p>
                        <p>Learning Spanish</p>
                        <p>Learning French</p>
                        <p>Learning Germany</p>
                    </div>
                    <div className="col-lg-4 text-start">
                        <h5 className='mb-3'>GET IN TOUCH</h5>
                        <p><i className="fab fa-facebook-square"></i> Facebook</p>
                        <p><i className="fab fa-youtube-square"></i> YouTube</p>
                        <p><i className="fab fa-instagram-square"></i>  Instagram</p>
                        <p><i className="fab fa-linkedin"></i> LinkedIn</p>
                    </div>
                </div>
                <hr />
                <div className='pb-3'>
                    <small>COPYRIGHTS © 2023 <span className="text-danger">LEARNING LANGUAGE</span>  ALL RIGHTS RESERVED.</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;