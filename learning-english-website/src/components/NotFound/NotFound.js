import React from 'react';
import img from '../../image/404-error.png'

const NotFound = () => {
    return (
        <div className='container-fluid my-5 '>
            <img className='img-fluid ' src={img} alt="" />
            <h4>Page not found</h4>
        </div>
    );
};

export default NotFound;