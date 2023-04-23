import './Skills.scss';
import { useTranslation } from "react-i18next";
import Code from "../../images/svg/Code";
import Gear from "../../images/svg/Gear";
import Database from "../../images/svg/Database";

const Skills = () => {
    const { t } = useTranslation('common');
    const frontEnd = Array.from(t('skills.skills_list.front_end', { returnObjects: true }));
    const backEnd = Array.from(t('skills.skills_list.back_end', { returnObjects: true }));
    const database = Array.from(t('skills.skills_list.database', { returnObjects: true }));
    const array = [frontEnd, backEnd, database];

    const skills = [
        {
            name: 'Front End',
            icon: <Code/>,
            skill: array[0].map(db => {
                return db
            }).join(', ')
        },
        {
            name: 'Back End',
            icon: <Gear/>,
            skill: array[1].map(db => {
                return db
            }).join(', ')
        },
        {
            name: 'Database',
            icon: <Database/>,
            skill: array[2].map(db => {
                return db
            }).join(', ')
        }
    ]

    return (
        <section className="skills" id="skills">
            <div className="section-container">
                <h2>{ t('skills.my') } <span>{ t('skills.skills') }</span></h2>
                <div className="skills-container">
                    { skills.map((skill, index) => {
                        return (
                            <div className="skills-box" key={ index }>
                                {
                                    skills[index].icon
                                }
                                <h3>{ skills[index].name }</h3>
                                <p>
                                    {
                                        skills[index].skill
                                    }
                                </p>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </section>
    );
}
export default Skills;
