import { useState, useEffect } from 'react'
import './Education.css'


const Education = () => {
    const [education, setEducation] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(
            "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/educations/user/12"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.length > 0) {
                    setEducation(data);
                }
                setIsLoading(false);

            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);
    return (
        <section id='education' className='section projects'>
            <h2 className='section__title'>Education</h2>

            <div className='education__grid'>
                {education.map(
                    (
                        edu
                    ) => (
                        <div key={edu.id} className="project">
                            <h3>{edu.institution}</h3>

                            <p className='project__description'>{edu.degree} in {edu.major}</p>
                            <p className='project__description'>{edu.major}</p>
                            <p>{edu.start_date} - {edu.end_date} </p>
                        </div>
                    )
                )}

            </div>
        </section>
    )
}
export default Education