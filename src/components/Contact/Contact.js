import './Contact.scss';
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from "react";
import { notifyPromise } from "../Toast/Toast";

const Contact = () => {
    const { t } = useTranslation('common');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const ENDPOINT_EMAIL = process.env.REACT_APP_URL_ENDPOINT_EMAIL;

        const promise = axios.post(ENDPOINT_EMAIL, formData);

        notifyPromise(promise, {
            loading: t('contact.sending_form'),
            success: t('contact.form_sent'),
            error: t('contact.form_not_sent'),
        });
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2>{ t('contact.contact') } <span>{ t('contact.me') }</span></h2>
                <div className="contact-container">
                    <form onSubmit={ (e) => sendEmail(e) }>
                        <div className="form-group">
                            <input type="text" name="name" value={ formData.name } onChange={ handleInputChange }
                                   required
                                   placeholder={ t('contact.full_name') }/>
                            <input type="email" name="email" value={ formData.email } onChange={ handleInputChange }
                                   required
                                   placeholder={ t('contact.email') }/>
                        </div>
                        <div className="form-group">
                            <textarea cols="30" rows="10" required name="message" value={ formData.message }
                                      onChange={ handleInputChange }
                                      placeholder={ t('contact.email_description') }></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit">{ t('contact.send') }</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
