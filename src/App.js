import { useContext } from 'react'
import './App.css';
import { ThemeContext } from './contexts/theme'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Education from './components/Education/Education';

function App() {
    const [{ themeName }] = useContext(ThemeContext)
    return (
        <div id="top" className={`${themeName} app`}>
            <Header />
            <main>
                <About />
                <Education />
                <Projects />
                <Skills />
                <Contact />
            </main>

            <ScrollToTop />
            <Footer />
        </div>
    );
}

export default App;
