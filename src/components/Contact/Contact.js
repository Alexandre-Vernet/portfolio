import './Contact.scss';
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation('common');

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2>{ t('contact.contact') } <span>{ t('contact.me') }</span></h2>
                <div className="contact-container">
                    <form action="">
                        <div className="form-group">
                            <input type="text" required placeholder={ t('contact.full_name') }/>
                            <input type="email" required placeholder={ t('contact.email') }/>
                        </div>
                        <div className="form-group">
                            <textarea cols="30" rows="10" required placeholder={ t('contact.email_description') }></textarea>
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
