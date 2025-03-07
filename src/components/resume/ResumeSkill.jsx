import templateData from "../../template";
import "../../styles/resume-skill.css";
const templateSkills = templateData.section.skills || [];

const ResumeSkill = () => {
    return (
        <>
            <div className="resume-section">
                {templateSkills.length > 0 && (
                    <div className="resume-section-header">
                        <h2>Skills</h2>
                    </div>
                )}
                <ul>
                    {templateSkills.map((skill) => {
                        return (
                            <li key={skill.id}>
                                <div className="resume-skill-item">
                                    <p>
                                        {skill.name} <span>:</span>
                                    </p>
                                    <p>{skill.description}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default ResumeSkill;
