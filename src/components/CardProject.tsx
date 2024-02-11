import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';

interface CardProjectProps {
  name: string;
  description: string;
  image_url: string;
  code_url: string;
  visit_url: string;
}

function CardProject({ name, description, code_url, visit_url, image_url}: CardProjectProps) {

  return (
    <Card sx={{ minWidth: '80vw', margin: '2rem', background: 'rgba(1, 1, 1,0.3)' }}>
      <CardMedia
        component="img"
        alt={name}
        height="250"
        image={image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={code_url} target="_blank" size="large" sx={{fontFamily: 'monospace', fontWeight: '800'}}><GitHubIcon sx={{margin:'0.2em'}}/>CODE</Button>
        <Button href={visit_url} target="_blank" size="large" sx={{fontFamily: 'monospace', fontWeight: '800'}}><ComputerOutlinedIcon sx={{margin:'0.2em'}}/>VISIT</Button>
      </CardActions>
    </Card>
  );
}

export default CardProject;