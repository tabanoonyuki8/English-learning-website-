import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <div>
            <div className="container-fluid contact">
                <h2>Contact with us</h2>
            </div>
            <div className="row m-2 p-5">
                <div className="col-lg-4">
                    <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h3>Location</h3>
                        <hr className="mx-auto w-50" />
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="icon">
                        <i className="far fa-envelope"></i>
                    </div>
                    <div>
                        <h3>Gmail</h3>
                        <hr className="mx-auto w-50" />
                        <p>learninglanguage@gmail.com</p>
                    </div>

                </div>
                <div className="col-lg-4">
                    <div className="icon">
                        <i className="fas fa-phone-square-alt"></i>
                    </div>
                    <div>
                        <h3>Phone</h3>
                        <hr className="mx-auto w-50" />
                        <p>+88 0123456789</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;