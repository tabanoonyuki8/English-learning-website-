import React from 'react';

const Course = (props) => {
    const { name, price, img, description, duration, instructor } = props.course;
    return (
        <div>
            {/* single card  */}
            <div className="col">
                <div className="card home-card shadow-lg">
                    <img src={img} className="card-img-top p-2 home-cardImg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-start">{name}</h5>
                        <p className="card-text text-start">{description}</p>
                        <p className="card-text text-start"><span className="fw-bold">Instructor:</span> {instructor}</p>
                        <p className="card-text text-start"> <span className="fw-bold">Duration:</span>  {duration}</p>
                        <p className="card-text text-start fw-bold"> Price: {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;