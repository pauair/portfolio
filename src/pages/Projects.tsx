import { Box } from '@mui/material';
import CardProject from '../components/CardProject';
import LYKMob from '../assets/images/lyk-brewing-co_cap2.png';
import LYKWeb from '../assets/images/lyk-brewing-co_cap1.png';
import LYKWeb2 from '../assets/images/lyk-brewing-co_cap1.2.png'
import HGMob from '../assets/images/hangman_cap2.png';
import HGWeb from '../assets/images/hangman_cap1.png';
import HGWeb2 from '../assets/images/hangman_cap1.2.png';
import FTApp from '../assets/images/film-tracker_cap1.png';
import FTApp2 from '../assets/images/film-tracker_cap2.png';
import PFMob from '../assets/images/portfolio_cap2.png';
import PFWeb from '../assets/images/portfolio_cap1.png';
import PFWeb2 from '../assets/images/portfolio_cap1.2.png';

function Projects() {

    const projects = [
        {
            name: 'LYK BREWING CO',
            description: 'Explore my virtual brewery store project, showcasing simple search, filtering, shopping cart, page navigation, and form validation functionalities.',
            built: 'Built with React, JavaScript, and Tailwind CSS.',
            image: [LYKMob, LYKWeb, LYKWeb2],
            code: 'https://github.com/pauair/lyk-brewing-co',
            visit: 'https://pauair.github.io/lyk-brewing-co/',
        },
        {
            name: 'FILM TRACKER',
            description: 'Discover my movie tracker app project. I designed and developed features like advanced movie search, detailed movie info display, and a personalized watchlist for seamless movie organization. This project enhanced my expertise in React Native, API integration, and responsive UI design.',
            built: 'Built with React Native, Expo, JavaScript, and Tailwind CSS.',
            image: [FTApp, FTApp2],
            code: 'https://github.com/pauair/movies-app',
            visit: '',
        },
        {
            name: 'HANGMAN GAME',
            description: 'Check out my hangman game project! I developed challenging gameplay logic, including random word selection, failed attempts management, and visual game progress representation. This project allowed me to enhance my skills in DOM manipulation, event handling, and state management in React.',
            built: 'Built with React, JavaScript, and Tailwind CSS.',
            image: [HGMob, HGWeb, HGWeb2],
            code: 'https://github.com/pauair/hangman-game',
            visit: 'https://pauair.github.io/hangman-game/',
        },
        {
            name: 'PORTFOLIO ',
            description: 'Explore my personal portfolio website—your current destination! This concise, one-page showcase of my work is crafted with a focus on user experience design and seamless navigation. It allows visitors to view my projects, learn more about me, and easily get in touch.',
            built: 'Built with React, TypeScript, Material UI & CSS.',
            image: [PFMob, PFWeb, PFWeb2],
            code: 'https://github.com/pauair/portfolio',
            visit: 'https://pauair.github.io/portfolio/',
        }
    ]

    return (
        <Box id="projects" minWidth={'80vw'} sx={{ margin: '8vw', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {projects.map((project, index) => (
                <CardProject key={index} name={project.name} description={project.description} built={project.built} image_url={project.image} code_url={project.code} visit_url={project.visit}/>
            ))}
        </Box>
    );
}

export default Projects;