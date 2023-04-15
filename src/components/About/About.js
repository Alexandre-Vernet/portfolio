import './About.scss';
import Linkedin from "../../images/svg/Linkedin";
import Github from "../../images/svg/Github";
import CV from "../../files/CV.pdf";
import Email from "../../images/svg/Email";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation('common');
    return (
        <section id="about">
            <section className="left">
                <div className="text">
                    <h2>{ t('about.hello') }</h2>
                    <h1>{ t('my_name') }</h1>
                    <h2>{ t('about.i_am') } <span className="job-name">
                            <TypeAnimation
                                sequence={ Sequence() }
                                wrapper="span"
                                cursor={ true }/>

                    </span></h2>
                    <p>{ t('about.description') }</p>
                </div>
                <div className="social-medias">
                    <Email/>
                    <Linkedin/>
                    <Github/>
                </div>
                <div className="curriculum-vitae">
                    <a href={ CV } target="_blank" rel="noreferrer">
                        <button>{ t('about.download_cv') }</button>
                    </a>
                </div>
            </section>
            <section className="right">
                <img
                    src="https://user-images.githubusercontent.com/72151831/229601306-fae7a7d3-7d84-4451-b7a4-9241da7e7e3c.png"
                    alt="me"/>
            </section>
        </section>
    );
}
const Sequence = () => {
    const { t } = useTranslation('common');
    return [
        t('about.developer.0.name'),
        1000, // Waits 1s
        t('about.developer.1.name'),
        1000,
        t('about.developer.2.name'),
        1000,
        t('about.developer.3.name'),
        1000,
        t('about.developer.4.name'),
        1000,
        t('about.developer.5.name'),
        1000,
        t('about.developer.0.name'),
    ];
}
export default About;
