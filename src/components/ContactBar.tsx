import { Alert, Box, Link, Tooltip } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import 'animate.css'
import { useState } from "react";

function ContactBar() {

    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleCopyEmail = () => {
        const email = 'paula.airaudo@outlook.com';
        navigator.clipboard.writeText(email).then(() => {
            setShowSuccessAlert(true);
            setTimeout(() => setShowSuccessAlert(false), 2000);
        }).catch((err) => {
            console.error('Error copying email to clipboard', err);
            setShowErrorAlert(true);
            setTimeout(() => setShowErrorAlert(false), 2000);
        });
      };

    return (
        <>
            <Box sx={{ padding: '1rem', textAlign: 'center' }}>
                <Tooltip title='LinkedIn' followCursor><Link sx={{ height: '2.3rem', width: 'auto' }} aria-label='Link to LinkedIn' href='https://www.linkedin.com/in/paula-airaudo/' target="_blank"><LinkedInIcon sx={{ height: '2.3rem', width: 'auto', margin: '0.5rem' }} /></Link></Tooltip>
                <Tooltip title='GitHub' followCursor><Link sx={{ height: '2.3rem', width: 'auto' }} aria-label='Link to GitHub' href='https://github.com/pauair' target="_blank"><GitHubIcon sx={{ height: '2.3rem', width: 'auto', margin: '0.5rem' }} /></Link></Tooltip>
                <Tooltip title='Email' followCursor><Link sx={{ height: '2.3rem', width: 'auto' }} aria-label='Link to Mail' target="_blank" onClick={handleCopyEmail} ><MailIcon sx={{ height: '2.3rem', width: 'auto', margin: '0.5rem' }} /></Link></Tooltip>
                <Tooltip title='Curriculum Vitae' followCursor><Link sx={{ height: '2.3rem', width: 'auto' }} aria-label='Download CV' href='https://drive.google.com/file/d/101jGN9R99KBEnGGcvghVnCR11WNDg9XE/view?usp=sharing' target="_blank"><FilePresentIcon sx={{ height: '2.3rem', width: 'auto', margin: '0.5rem' }} /></Link></Tooltip>
            </Box>
            {showSuccessAlert && <Alert variant='outlined' severity="success" sx={{ fontSize: '0.8rem', position: 'fixed', top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                Email copied to clipboard!
            </Alert>}
            {showErrorAlert && <Alert variant="filled" severity="error" sx={{ fontSize: '0.8rem', position: 'fixed', top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                Error copying email to clipboard.
            </Alert>}
        </>
    )
}

export default ContactBar;