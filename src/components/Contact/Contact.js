import './Contact.scss';
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
    const {t} = useTranslation('common');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const endpoint = 'http://localhost:3333';

        axios.post(endpoint, formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2>{ t('contact.contact') } <span>{ t('contact.me') }</span></h2>
                <div className="contact-container">
                    <form>
                        <div className="form-group">
                            <input type="text" value={ formData.name } onChange={ handleInputChange } required
                                   placeholder={ t('contact.full_name') }/>
                            <input type="email" value={ formData.email } onChange={ handleInputChange } required
                                   placeholder={ t('contact.email') }/>
                        </div>
                        <div className="form-group">
                            <textarea cols="30" rows="10" required value={ formData.message }
                                      onChange={ handleInputChange }
                                      placeholder={ t('contact.email_description') }></textarea>
                        </div>
                        <div className="form-group">
                            <button onClick={ (e) => sendEmail(e) } type="button">{ t('contact.send') }</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
