import templateData from "../../template";
import "../../styles/resume-skill.css";

const ResumeSkill = ({ skills }) => {
    return (
        <>
            <div className="resume-section">
                {skills.length > 0 && (
                    <div className="resume-section-header">
                        <h2>Skills</h2>
                    </div>
                )}
                <ul>
                    {skills.map((skill) => {
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
