import { useState, useEffect } from 'react'
import uniqid from 'uniqid'
//import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import { fetchProjectsData } from '../../api/api';

const Projects = ({ userid }) => {
    //if (!projects.length) return null

    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        fetchProjectsData()
            .then(response => {
                setProjectsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching Projects data:', error);
            });
    }, [userid]);

    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'>Projects</h2>

            <div className='projects__grid'>
                {projectsData.map((project) => (
                    <ProjectContainer key={uniqid()} project={project} userid="12" />
                ))}
            </div>
        </section>
    )
}

export default Projects
