import React from 'react';
import './EducationContainer.css';


const EducationContainer = ({ education }) => (
    <div className='education'>
        <div className='education__header'>
            <h3 className='education__name'>{education.name}</h3>
        </div>
        <p className='education__course'>{education.location}</p>

        <h3 className='education__majors'>{education.majors}</h3>
        <p className='education__course'>{education.course}</p>
        <p className='education__course'>{education.year}</p>


    </div>
);

export default EducationContainer;
