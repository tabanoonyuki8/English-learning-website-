import React from 'react';
import './About.css'
import img from '../../image/aboutpic.jpg'
import Teachers from '../Teachers/Teachers';

const About = () => {
    return (
        <div>
            {/* top img  */}
            <img className="img-fluid" src={img} alt="" />

            {/* description  */}
            <div className="p-5 m-0 about">
                <h1 className="mb-4">Changing learning for the better</h1>
                <p className="text-center px-5">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.We help organizations of all types Language learning and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
            </div>

            {/* expart or teacher block  */}
            <Teachers></Teachers>
        </div>
    );
};

export default About;