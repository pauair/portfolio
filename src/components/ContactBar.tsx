import { Box, Link } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import 'animate.css'

function ContactBar() {

    return (
        <Box sx={{ padding: '1rem', textAlign: 'center' }}>
            <Link sx={{ height: '2.3rem', width: 'auto' }} aria-label='Link to LinkedIn' href='https://www.linkedin.com/in/paula-airaudo/' target="_blank"><LinkedInIcon sx={{ height: '2.3rem', width: 'auto', margin: '0.5rem' }} /></Link>
            <Link sx={{ height: '2.3rem', width: 'auto' }} aria-label='Link to GitHub' href='https://github.com/pauair' target="_blank"><GitHubIcon sx={{ height: '2.3rem', width: 'auto', margin: '0.5rem' }} /></Link>
            <Link sx={{ height: '2.3rem', width: 'auto' }} aria-label='Link to Mail' href='mailto:paula.airaudo@outlook.com?body=Hi%20Paula!' target="_blank"><MailIcon sx={{ height: '2.3rem', width: 'auto', margin: '0.5rem' }} /></Link>
            <Link sx={{ height: '2.3rem', width: 'auto' }} aria-label='Download CV' href='https://drive.google.com/file/d/101jGN9R99KBEnGGcvghVnCR11WNDg9XE/view?usp=sharing' target="_blank"><FilePresentIcon sx={{ height: '2.3rem', width: 'auto', margin: '0.5rem' }} /></Link>
        </Box>
    )
}

export default ContactBar;