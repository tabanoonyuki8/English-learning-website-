import React from 'react';
import img from '../../image/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 p-5">

                        <h1>We share knowledge with the world</h1>
                        <p>Improve your Language learning Skills</p>

                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;