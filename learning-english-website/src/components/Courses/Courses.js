import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {

    const [courses, setCourses] = useState([]);

    // fetch data from fake db 

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            <div className="container-fluid courses">
                <div className="container py-3">
                    <h4 className='text-start'>Courses to get started</h4>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 py-5">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;