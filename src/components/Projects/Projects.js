import './Projects.scss';
import { useTranslation } from "react-i18next";
import portfolio1 from '../../images/portfolio-1.jpg';
import portfolio2 from '../../images/portfolio-2.jpg';
import portfolio3 from '../../images/portfolio-3.jpg';
import portfolio4 from '../../images/portfolio-4.jpg';
import portfolio5 from '../../images/portfolio-5.jpg';
import portfolio6 from '../../images/portfolio-6.jpg';

const Projects = () => {
    const { t } = useTranslation('common');
    const projects = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];

    return (<section id="projects">
        <div className="container">
            <h2>{ t('projects.my_latest') } <span>{ t('projects.projects') }</span></h2>
            <div className="project-container">
                { projects.map((project, index) => (
                    <div className="project-box">
                        <a href="https://file-sync.onrender.com/" target="_blank" rel="noreferrer">
                            <img
                                src={ project } alt={ project }/>
                            <div className="project-layer">
                                <h4>{ t(`projects.my_projects.${ index }.name`) }</h4>
                                <p>{ t(`projects.my_projects.${ index }.description`) }</p>
                            </div>
                        </a>
                    </div>)) }
            </div>
        </div>
    </section>);
}

export default Projects;
