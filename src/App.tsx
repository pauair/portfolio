import Brightness4Icon from '@mui/icons-material/Brightness4Rounded';
import Brightness7Icon from '@mui/icons-material/Brightness7Rounded';
import { Box, CssBaseline, IconButton } from '@mui/material';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { purple, pink } from '@mui/material/colors';
import React from 'react';
import Footer from './components/Footer';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './components/Skills';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box className='AppBox' sx={{ zIndex: -5 }}>
      <CssBaseline />
      <Box minWidth={"90vw"} sx={{ textAlign: 'right', paddingTop: '0.7rem', paddingRight: '0.7rem' }}>
        <IconButton id="back-to-top-anchor" sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <Home />
      <Projects />
      <Skills />
      <Aboutme />
      <Skills />
      <Contact />
      <Footer />
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#77558e' : purple[700],
          },
          secondary: {
            main: mode === 'dark' ? pink[900] : pink[900],
          },
          background: {
            default: mode === 'dark' ? 'black' : 'white',
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              '*': {
                '@keyframes scroll': {
                  '0%': {
                    transform: 'translateX(0)',
                  },
                  '100%': {
                    transform: 'translateX(-35%)',
                  },
                },
                'body': {
                  backgroundImage: mode === 'dark' ? 'linear-gradient(124deg, #3a002e 0%, #160523 17%, #09010e 49%, #160523 80%, #3a002e 100%)' : 'white',
                },
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}