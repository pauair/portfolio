import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import { Avatar, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import 'animate.css';
import { useEffect, useState } from 'react';
import ContactBar from '../components/ContactBar';
import AvatarImg from '../assets/images/avatar.png';

interface TypingEffectProps {
  text: string;
}

function TypingEffect({ text }: TypingEffectProps) {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.substring(0, currentIndex) + (currentIndex % 2 === 0 ? '_' : ' '));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTypedText(text);
      }
    }, 160);

    return () => clearInterval(typingInterval);
  }, [text, currentIndex]);

  return <Typography variant={isSmallScreen ? 'h4' : 'h2'} sx={{ padding: '2vw', fontFamily: 'monospace', fontWeight: 500}}>{typedText}</Typography>;
}

function Home() {

  const nameText = "{ PAULA AIRAUDO }";

  return (
    <Box minHeight={"90vh"} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop:'10vh' }}>
      <Avatar className='animate__animated animate__fadeInDownBig' src={AvatarImg} sx={{ width: '8rem', height: '8rem' }}></Avatar>
      {<TypingEffect text={nameText} />}
      <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Monospace' }}>
        Software Developer <TerminalRoundedIcon sx={{ marginLeft: '0.5rem' }} />
      </Typography>
      <ContactBar />
    </Box>
  );
}

export default Home;