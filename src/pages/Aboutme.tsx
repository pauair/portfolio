import { Avatar, Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import NavBar from '../components/NavBar';
import ScrollTop from '../components/ScrollTop';
import AboutmeAvatar from '../assets/images/aboutme.webp';

interface AppProps {
    window?: () => Window;
}

function Aboutme(props: AppProps) {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box id="aboutme" sx={{ display: 'flex', flexWrap: 'wrap', justifyItems: 'center', minHeight: '90vh' }}>
            <NavBar />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent:'center', gap: '1rem', maxWidth: '90vw', margin: 'auto' }}>
                <Box sx={{ display: 'flex', padding: '2vw', background: 'transparent', alignItems:'center'}}>
                    <Avatar src={AboutmeAvatar} sx={{ width: '12em', height: '12em' }}></Avatar>
                </Box>
                <Paper elevation={1} sx={{ padding: '2vw', background: 'transparent', flexBasis: isSmallScreen ? '80%' : '60%' }}>
                    <Typography variant='body2' sx={{ paddingBottom: '2vw', fontFamily: 'monospace' }}>
                        Hi there! I'm Paula, a <strong>Computer Engineering student</strong> with a passion for coding. My fascination with technology began at a young age, but it wasn't until 2018, during a <strong>GeneXus course</strong>, that I truly discovered my passion for creating through code.
                    </Typography>
                    <Typography variant='body2' sx={{ paddingBottom: '2vw', fontFamily: 'monospace' }}>
                    Currently, I work as a <strong>Quality Assurance Analyst</strong>, where I've had the opportunity to delve into technologies like <strong>SQL and BigQuery</strong>. However, my ultimate goal is to transition into a role where I can creatively apply my skills and knowledge to contribute to innovative projects.
                    </Typography>
                    <Typography variant='body2' sx={{ paddingBottom: '2vw', fontFamily: 'monospace' }}>
                        Throughout my journey, I've complemented my education with <strong>courses and self-learning</strong>, always seeking to improve and stay up-to-date with the latest technologies. <strong>Can't wait to see where this journey takes me next!</strong>
                    </Typography>
                </Paper>
                <ScrollTop {...props} />
            </Box>
        </Box>
    );
}

export default Aboutme;
