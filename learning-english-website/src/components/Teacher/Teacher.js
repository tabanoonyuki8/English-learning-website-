import React from 'react';

const Teacher = (props) => {
    const { name, teach, img } = props.teacher;

    return (
        <div>
            {/* single card  */}

            <div className="col">
                <div className="card h-100 border">
                    <img src={img} className="card-img-top p-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> <span className="fw-bold">Teach: </span> {teach}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;