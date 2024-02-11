import { Alert, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/FirebaseConfig';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

function ContactForm() {
    const initialFormErrors: FormErrors = { name: '', email: '', subject: '', message: '' };

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showWarningAlert, setShowWarningAlert] = useState(false);


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setFormErrors({
            ...formErrors,
            [e.target.name]: e.target.value ? '' : `Please enter your ${e.target.name}.`
        });
    };

    const validateForm = () => {
        const errors: FormErrors = {};
        (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
            errors[key] = formData[key] ? '' : `Please enter your ${key}.`;
        });
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const contactsCollections = collection(db, "contacts")
        const contact = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        }
        if (validateForm()) {
            addDoc(contactsCollections, contact).then(() => {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setShowSuccessAlert(true);
                setTimeout(() => setShowSuccessAlert(false), 5000);
            }).catch((error) => {
                console.error("Error adding document: ", error);
                setShowErrorAlert(true);
                setTimeout(() => setShowErrorAlert(false), 5000);
            });
        } else {
            setShowWarningAlert(true);
            setTimeout(() => setShowWarningAlert(false), 5000);
            console.log('You must fill out all the fields!')
        }
    }

    return (
        <>
            <Paper elevation={4} sx={{ margin: '2vw', padding: '2em', background: 'rgba(25, 1, 36,0.3)' }}>
                <form onSubmit={handleSubmit}>
                    <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
                        {Object.keys(formData).map((field) => (
                            <Grid item xs={11} key={field}>
                                <TextField
                                    fullWidth
                                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                                    name={field}
                                    variant='standard'
                                    value={(formData as any)[field]}
                                    onChange={handleChange}
                                    error={!!formErrors[field]}
                                    placeholder={formErrors[field] || `Please enter your ${field}.`}
                                    InputLabelProps={{
                                        style: { fontSize: '0.8rem' }
                                    }}
                                    InputProps={{
                                        style: { fontSize: '0.8rem' }
                                    }}
                                />
                            </Grid>
                        ))}
                        <Grid item xs={11}>
                            <Button type='submit' variant='contained' color="primary" sx={{ marginTop: 2 }}>
                                <Typography variant='caption'>Send</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            {showSuccessAlert && <Alert variant="filled" severity="success" sx={{ fontSize: '0.8rem', position: 'fixed', top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                Thanks for your contact.
            </Alert>}
            {showErrorAlert && <Alert variant="filled" severity="error" sx={{ fontSize: '0.8rem', position: 'fixed', top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                Error sending. Please try again.
            </Alert>}
            {showWarningAlert && <Alert variant="filled" severity="warning" sx={{ fontSize: '0.8rem', position: 'fixed', top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                Please fill out all the fields before submitting
            </Alert>}
        </>
    );
}

export default ContactForm;
