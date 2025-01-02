import { Grid, Paper, Typography } from '@mui/material';
import ContactBar from '../components/ContactBar';
import ContactForm from '../components/ContactForm';

function Contact() {

    return (
        <>
            <Grid id='contact' container sx={{ justifyContent: 'center', alignItems: 'center', paddingTop: '5vh', minHeight: '88vh'}}>
                <Grid item xs={10} sm={9} md={5}>
                    <Paper elevation={0} sx={{ margin: '2vw', padding: '1.5em', background: 'transparent' }}>
                        <Typography variant='body2' sx={{ paddingBottom: '1vw', fontFamily: 'monospace' }}>
                            Thank you for visiting my page. If you have any questions, suggestions, or just want to say hello, feel free to get in touch through the form or via my social media.
                        </Typography>
                        <Typography variant='body2' sx={{ paddingBottom: '1vw', fontFamily: 'monospace', fontWeight:'bold' }}>
                            Your feedback is important to me. Excited to hear your ideas and collaborate with you.
                        </Typography>
                        <Typography variant='body2' sx={{ paddingBottom: '1vw', fontFamily: 'monospace' }}>
                            See you soon!
                        </Typography>
                        <ContactBar />
                    </Paper>
                </Grid>
                <Grid item xs={10} sm={8} md={4}>
                    <ContactForm />
                </Grid>
            </Grid>

        </>
    );
}

export default Contact;