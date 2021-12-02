import React from 'react'
import { useTranslation } from 'react-i18next'
import { TextField, Button, FormControl } from '@mui/material'
import AllInputProps from '../utils/inputProps'

const ContactForm = () => {
    const { t } = useTranslation('contact')

    return (
        <div className="formContainer">
            <FormControl
                component="form"
                name="Contact"
                method="post"
                className="contactForm"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                {/* Need to have this hidden input with the form name to your JSX form */}
                <input type="hidden" name="form-name" value="Contact" />
                <TextField
                    fullWidth
                    required
                    id="contactForm-name"
                    name="Name"
                    label={t('name')}
                    variant="filled"
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...AllInputProps}
                />
                <TextField
                    fullWidth
                    required
                    id="contactForm-email"
                    type="email"
                    name="Email"
                    label={t('email')}
                    variant="filled"
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...AllInputProps}
                />
                <TextField
                    fullWidth
                    required
                    id="contactForm-message"
                    label={t('message')}
                    name="Message"
                    multiline
                    rows={4}
                    variant="filled"
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...AllInputProps}
                />
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disableElevation
                    className="sendButton"
                >
                    {t('send')}
                </Button>
            </FormControl>
        </div>
    )
}

export default ContactForm
