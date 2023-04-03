import './Projects.scss';

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <h2>Mes projets</h2>
                <div className="project-list">
                    <a href="" target="_blank">
                        <div className="project">
                            <img
                                src="https://user-images.githubusercontent.com/72151831/229601306-fae7a7d3-7d84-4451-b7a4-9241da7e7e3c.png"
                                alt="File-Sync"/>
                            <h3>File-Sync</h3>
                            <p>Synchronisation de fichiers d'un appareil à un autre</p>
                        </div>
                    </a>
                    <a href="" target="_blank">
                        <div className="project">
                            <img
                                src="https://user-images.githubusercontent.com/72151831/229601306-fae7a7d3-7d84-4451-b7a4-9241da7e7e3c.png"
                                alt="File-Sync"/>
                            <h3>File-Sync</h3>
                            <p>Synchronisation de fichiers d'un appareil à un autre</p>
                        </div>
                    </a>
                    <a href="" target="_blank">
                        <div className="project">
                            <img
                                src="https://user-images.githubusercontent.com/72151831/229601306-fae7a7d3-7d84-4451-b7a4-9241da7e7e3c.png"
                                alt="File-Sync"/>
                            <h3>File-Sync</h3>
                            <p>Synchronisation de fichiers d'un appareil à un autre</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
