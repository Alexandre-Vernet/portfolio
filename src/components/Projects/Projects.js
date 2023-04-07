import './Projects.scss';
import { useTranslation } from "react-i18next";
import project1 from '../../images/project-1.jpg';
import project2 from '../../images/project-2.jpg';
import project3 from '../../images/project-3.jpg';
import project4 from '../../images/project-4.jpg';
import project5 from '../../images/project-5.jpg';
import project6 from '../../images/project-6.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Projects = () => {
    const { t } = useTranslation('common');
    const projects = [project1, project2, project3, project4, project5, project6];

    return (<section className="projects" id="projects">
        <div className="container">
            <h2>{ t('projects.my_latest') } <span>{ t('projects.projects') }</span></h2>
            <div className="project-container">
                { projects.map((project, index) => (
                    <div className="project-box"
                         key={ index }>
                        <a href={ t(`projects.my_projects.${ index }.url`) } target="_blank" rel="noreferrer">
                            <LazyLoadImage
                                alt={ project + index }
                                src={ project }
                                effect="blur"
                            />
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
