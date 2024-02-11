import { Box, Card, CardMedia, Grid, useMediaQuery, useTheme } from '@mui/material';
import CIcon from '../assets/images/c-512.png';
import CSSIcon from '../assets/images/css-3_732190.png';
import GXIcon from '../assets/images/gx-16494738.png';
import HTMLIcon from '../assets/images/html-512.png';
import JSIcon from '../assets/images/js_5968292.png';
import TSIcon from '../assets/images/typescript_5968381.png';
import TWIcon from '../assets/images/tailwind-css.512x307.png';
import SSIcon from '../assets/images/file-type-sass.512x384.png';
import MUIcon from '../assets/images/material-ui.512x406.png';
import BSIcon from '../assets/images/bootstrap.512x512.png';
import SQLIcon from '../assets/images/png-transparent-mysql.png';
import MDBIcon from '../assets/images/mongodb_original_logo_icon_146424.png';
import NJSIcon from '../assets/images/file_type_node_icon_130301.png';


const skills = [
    HTMLIcon, JSIcon, TSIcon, NJSIcon, CIcon, GXIcon, CSSIcon, TWIcon, SSIcon, MUIcon, BSIcon, SQLIcon, MDBIcon,
];

function SkillBanner() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container xs={12} sm={12} md={10} sx={{ overflow: 'hidden'}}>
            <Grid item xs={12} md={12}>
                <Box sx={{ display: 'flex', width: '155vw', animation: 'scroll 30s linear infinite', zIndex: '3' }}>
                    {skills.map((skill, index) => (
                        <Card key={index} sx={{ minWidth: isSmallScreen ? '2.5em' : '4em', minHeight: isSmallScreen ? '2.5em' : '4em', margin: 1, background: 'rgba(1, 1, 1,0.9)' }}>
                            <CardMedia component="img" image={skill} alt={`Skill ${index + 1}`} sx={{ '&:hover': { filter: 'none' } }} />
                        </Card>
                    ))}
                    {skills.map((skill, index) => (
                        <Card key={index} sx={{ minWidth: isSmallScreen ? '2.5em' : '4em', minHeight: isSmallScreen ? '2.5em' : '4em', margin: 1, background: 'rgba(1, 1, 1,0.9)' }}>
                            <CardMedia component="img" image={skill} alt={`Skill${index + 1}`} sx={{ '&:hover': { filter: 'none' } }} />
                        </Card>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default SkillBanner;
