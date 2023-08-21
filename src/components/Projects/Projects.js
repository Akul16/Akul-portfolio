import { useState, useEffect } from 'react'
import './Projects.css'
import LaunchIcon from '@mui/icons-material/Launch'

const Projects = ({ }) => {
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(
            "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/projects/user/12"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.length > 0) {
                    setProject(data);
                }
                setIsLoading(false);

            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'>Projects</h2>

            <div className='projects__grid'>
                {project.map(
                    (
                        proj
                    ) => (
                        <div key={proj.id} className="project">
                            <h3>{proj.title}</h3>

                            <p className='project__description'>{proj.description}</p>


                            <a className="link link--icon" href={proj.link} target="_blank" rel="noopener noreferrer" aria-label='live preview'>
                                <LaunchIcon />
                            </a>
                        </div>
                    )
                )}

            </div>
        </section>

    );

}

export default Projects
