import { Box } from '@mui/material';
import SkillBanner from './SkillBanner';

function Skills() {

    return (
        <Box id='skills' sx={{ display: 'flex', alignContent:'center',justifyContent: 'center', padding: '5vh' }}>
            <SkillBanner />
        </Box>
    );
};

export default Skills;