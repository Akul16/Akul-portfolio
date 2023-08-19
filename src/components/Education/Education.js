import React from 'react'
import uniqid from 'uniqid'
import EducationContainer from '../EducationContainer/EducationContainer'
import './Education.css'
import { education } from '../../portfolio'

const Education = () => {
    return (
        <section id='education' className='section projects'>
            <h2 className='section__title'>Education</h2>

            <div className='education__grid'>
                {education.map((education) => (
                    <EducationContainer key={uniqid()} education={education} />
                ))}
            </div>
        </section>
    )
}
export default Education