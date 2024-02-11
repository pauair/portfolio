import AppBar from '@mui/material/AppBar';
import { Box, Link, useScrollTrigger } from '@mui/material';

function Navbar() {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: window.innerHeight,
    });

    return (
        <AppBar position="fixed" color='primary' sx={{ background: 'rgba(25, 1, 36,0.9)' , justifyContent: 'flex-end', typography: 'subtitle1', display: trigger ? 'flex' : 'none' }}>
            <Box sx={{ padding: '1rem', textAlign: 'right' }}>
                <Link href="#projects" color="inherit" underline="none" sx={{ fontFamily: 'monospace', padding: '1rem', '&:hover': {fontWeight : 'bold'} }}>PROJECTS</Link>
                <Link href="#aboutme" color="inherit" underline="none" sx={{ fontFamily: 'monospace', padding: '1rem', '&:hover': {fontWeight : 'bold'} }}>ABOUT ME</Link>
                {/* <Link href="#skills" color="inherit" underline="none" sx={{ fontFamily: 'monospace', padding: '1rem', '&:hover': {fontWeight : 'bold'} }}>SKILLS</Link> */}
                <Link href="#contact" color="inherit" underline="none" sx={{ fontFamily: 'monospace', padding: '1rem', '&:hover': {fontWeight : 'bold'} }}>CONTACT</Link>
            </Box>
        </AppBar>
    );
};

export default Navbar;