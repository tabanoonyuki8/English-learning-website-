import React, { useEffect, useState } from 'react';
import Recommend from '../Recommend/Recommend';
import './Recommends.css'

const Recommends = () => {
    const [recommends, setRecommends] = useState([]);

    // fetch data from fake bd 

    useEffect(() => {
        fetch('./recommend.JSON')
            .then(res => res.json())
            .then(data => setRecommends(data))
    }, []);
    return (
        <div>
            <div className='container-fluid recommended'>
                <div className="container">
                    <h3 className="text-start"> Let's start learning language </h3>
                </div>
            </div>

            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        recommends.map(recommend => <Recommend
                            key={recommend.id}
                            recommend={recommend}
                        ></Recommend>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Recommends;