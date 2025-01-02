import { Box, Card, CardMedia, Grid, useMediaQuery, useTheme } from '@mui/material';
import CIcon from '../assets/images/c-512.webp';
import CSSIcon from '../assets/images/css-3_732190.webp';
import GXIcon from '../assets/images/gx-16494738.webp';
import HTMLIcon from '../assets/images/html-512.webp';
import JSIcon from '../assets/images/js_5968292.webp';
import TSIcon from '../assets/images/typescript_5968381.webp';
import TWIcon from '../assets/images/tailwind-css.512x307.webp';
import SSIcon from '../assets/images/file-type-sass.512x384.webp';
import MUIcon from '../assets/images/material-ui.512x406.webp';
import BSIcon from '../assets/images/bootstrap.512x512.webp';
import SQLIcon from '../assets/images/transparent-mysql.webp';
// import MDBIcon from '../assets/images/mongodb_original_logo_icon_146424.webp';
// import NJSIcon from '../assets/images/file_type_node_icon_130301.webp';


const skills = [
    HTMLIcon, TSIcon, JSIcon, CSSIcon, TWIcon, SSIcon, MUIcon, BSIcon, CIcon, GXIcon, SQLIcon
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
