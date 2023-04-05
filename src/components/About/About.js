import './About.scss';
import Linkedin from "../../Images/svg/Linkedin";
import Github from "../../Images/svg/Github";
import CV from "../../Files/CV.pdf";
import Email from "../../Images/svg/Email";
import { TypeAnimation } from "react-type-animation";

const About = () => {
    return (
        <section id="about">
            <section className="left">
                <div className="text">
                    <h2>Bonjour, je m'appelle</h2>
                    <h1>Alexandre Vernet</h1>
                    <h2>Je suis un <span className="job-name">
                            <TypeAnimation
                                sequence={ [
                                    'développeur full-stack',
                                    1000, // Waits 1s
                                    'développeur frontend',
                                    1000,
                                    'développeur backend',
                                    1000,
                                    'développeur mobile',
                                    1000,
                                    'développeur logiciel',
                                    1000,
                                    'développeur',
                                    1000,
                                    'développeur full-stack',
                                ] }
                                wrapper="span"
                                cursor={ true }/>

                    </span></h2>
                    <p>
                        J'ai 23 ans, j'habite à Toulouse et je travaille en tant qu'ingénieur logiciel chez Capgemini.
                    </p>
                </div>
                <div className="social-medias">
                    <Email/>
                    <Linkedin/>
                    <Github/>
                </div>
                <div className="curriculum-vitae">
                    <a href={ CV } target="_blank" rel="noreferrer">
                        <button>Télécharger mon CV</button>
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

export default About;
