import './About.scss';
import Linkedin from "../images/svg/Linkedin";
import Github from "../images/svg/Github";
import CV from "../files/CV.pdf";
import Email from "../images/svg/Email";

const About = () => {
    return (
        <section id="about">
            <section className="left">
                <div className="text">
                    <h2>Hello, it's me</h2>
                    <h1>Alexandre Vernet</h1>
                    <h2>I'm a <span className="job-name">full-stack developer</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut odio cursus, finibus lectus
                        ac
                    </p>
                </div>
                <div className="social-medias">
                    <Email/>
                    <Linkedin/>
                    <Github/>
                </div>
                <div className="curriculum-vitae">
                    <a href={ CV } target="_blank">
                        <button>Download CV</button>
                    </a>
                </div>
            </section>
            <section className="right">
                <img
                    src="https://user-images.githubusercontent.com/72151831/229601306-fae7a7d3-7d84-4451-b7a4-9241da7e7e3c.png"
                    alt="photo me"/>
            </section>
        </section>
    );
}

export default About;
