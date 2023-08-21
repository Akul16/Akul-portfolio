import { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(
            "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/skills/user/12"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.length > 0) {
                    setSkills(data);
                }
                setIsLoading(false);

            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    return (
        <section className='section skills' id='skills'>
            <h2 className='section__title'>Skills</h2>
            <ul className='skills__list'>
                {skills.map(
                    (
                        skill
                    ) => (
                        <li>
                            <div key={skill.id} className="skills__list-item btn btn--plain">
                                {skill.name}
                            </div>
                        </li>
                    )
                )}
            </ul>
        </section>
    )
}

export default Skills
