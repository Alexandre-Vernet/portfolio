import './Projects.scss';
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation('common');
    const projects = Array.from(t('projects.my_projects', { returnObjects: true }));

    return (<section className="projects" id="projects">
        <div className="section-container">
            <h2>{ t('projects.my_latest') } <span>{ t('projects.projects') }</span></h2>
            <div className="project-container">
                { projects.map((project, index) => (
                    <div className="project-box"
                         key={ index }>
                        <a className="project" href={ t(`projects.my_projects.${ index }.url`) } target="_blank" rel="noreferrer">
                            <img src={ project.image } alt=""/>
                            <div className="project-layer">
                                <h4>{ project.name }</h4>
                                <p>{ project.description }</p>
                            </div>
                        </a>
                    </div>)) }
            </div>
        </div>
    </section>);
}

export default Projects;
