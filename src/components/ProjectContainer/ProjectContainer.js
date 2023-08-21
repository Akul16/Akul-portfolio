import { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ }) => {
    const [project, setProject] = useState({});


    useEffect(() => {
        fetch(
            "https://codebydhaval-php-portfolio-cms.000webhostapp.com/api/projects/user/12"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.length > 0) {
                    setProject(data[0]);
                }

            })
            .catch((error) => {
                console.error(error);

            });
    }, []);


    return (<div className='project'>
        <h3>{project.title}</h3>

        <p className='project__description'>{project.description}</p>
        {project.stack && (
            <ul className='project__stack'>
                {project.stack.map((item) => (
                    <li key={uniqid()} className='project__stack-item'>
                        {item}
                    </li>
                ))}
            </ul>
        )}

        {project.sourceCode && (
            <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
            >
                <GitHubIcon />
            </a>
        )}

        {project.link && (
            <a
                href={project.link}
                aria-label='live preview'
                className='link link--icon'
            >
                <LaunchIcon />
            </a>
        )}
    </div>)


}

export default ProjectContainer
