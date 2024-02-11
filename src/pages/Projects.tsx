import { Box } from '@mui/material';
import CardProject from '../components/CardProject';

function Projects() {

    const projects = [
        {
            name: 'LYK BREWING CO',
            description: 'React, JavaScript & CSS',
            image: '',
            code: 'https://github.com/pauair/lyk-brewing-co',
            visit: 'https://pauair.github.io/',
        },
        {
            name: 'HANGMAN GAME',
            description: 'React, JavaScript & CSS',
            image: '',
            code: 'https://github.com/pauair/hangman-game',
            visit: 'https://pauair.github.io/hangman-game/',
        },
        {
            name: 'ANOTHER PROJECT ',
            description: 'React, JavaScript & CSS',
            image: '',
            code: '',
            visit: '',
        }
    ]

    return (
        <Box id="projects" minWidth={'80vw'} sx={{ margin: '10vw', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {projects.map((project, index) => (
                <CardProject key={index} name={project.name} description={project.description} image_url={project.image} code_url={project.code} visit_url={project.visit}/>
            ))}
        </Box>
    );
}

export default Projects;