import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    // fetch data from fake db 

    useEffect(() => {
        fetch('./teacher.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, []);

    return (
        <div className="teachter-card container mt-5">
            <h2 className="mt-5">OUR EXPERTS</h2>
            <hr />
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 mb-5">
                {
                    teachers.map(teacher => <Teacher
                        key={teacher.id}
                        teacher={teacher}></Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;