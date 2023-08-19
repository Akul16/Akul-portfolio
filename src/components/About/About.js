import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './About.css'
import pdf from './Akul_Patel_SE.pdf'


const About = () => {
    return (
        <div className='about center'>

            <h1>
                Hi, I am <span className='about__name'>Akul Patel.</span>
            </h1>


            <p className='about__desc'><h2>Sofware Engineer</h2></p>

            <div className='about__contact center'>
                <a href={pdf} target="_blank" rel="noreferrer">
                    <span type='button' className='btn btn--outline'>
                        Resume
                    </span>
                </a>
                <>
                    <a
                        href="https://github.com/Akul16"
                        target="_blank"
                        rel="noreferrer"
                        aria-label='github'
                        className='link link--icon'
                    >
                        <GitHubIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/akul-patel-6aa346197/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label='linkedin'
                        className='link link--icon'
                    >
                        <LinkedInIcon />
                    </a>

                </>
            </div>
        </div>
    )
}

export default About
