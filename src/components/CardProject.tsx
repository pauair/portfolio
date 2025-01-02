import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface CardProjectProps {
  name: string;
  description: string;
  built: string;
  image_url: string[];
  code_url: string;
  visit_url: string;
}

function CardProject({ name, description, built, code_url, visit_url, image_url}: CardProjectProps) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          backgroundColor: 'transparent',
          borderRadius: '1rem',
          bottom: '-2rem',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: '0.4rem',
          height: '0.4rem',
          backgroundColor: '#bdbdbd',
          borderRadius: '50%',
        }}
      />
    ),
  };

  return (
    <Card sx={{minWidth: '60vw', margin: '2rem', background: 'rgba(1, 1, 1,0.10)', overflow: 'visible'}}>
      <Slider {...settings}>
        {image_url.map((image_url, index) => (
          <div key={index}>
            <CardMedia component="img" alt={name} image={image_url} sx={{scale: '95%', borderRadius:'0.5rem'}} />
          </div>
        ))}
      </Slider>
      <CardContent sx={{padding: "2rem"}}>
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
        <Typography variant='body1' color="text.primary">
          {built}
        </Typography>
        <Typography variant='body2' color="text.secondary" marginTop='1rem'>
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