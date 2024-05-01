import uniqid from 'uniqid'
import { education } from '../../portfolio'
import EducationContainer from '../EducationContainer/EducationContainer'
import './Education.css'


const Education = () => {
    if (!education.length) return null

    return (
        <section id='educations' className='section projects'>
            <h2 className='section__title'>educations</h2>

            <div className='education__grid'>
                {education.map((education) => (
                    <EducationContainer key={uniqid()} education={education} />
                ))}
            </div>
        </section>
    )
}
export default Education