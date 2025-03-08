import "../../styles/resume-education.css";

const ResumeEducation = ({ educations }) => {
    return (
        <div className="resume-section">
            {educations.length > 0 && (
                <div className="resume-section-header">
                    <h2>Educations</h2>
                </div>
            )}
            <ul>
                {educations.map((education) => {
                    return (
                        <li key={education.id}>
                            <div className="resume-education-item">
                                <div className="st">{education.school}</div>
                                <span>-</span>
                                <div className="nd">{education.degree}</div>

                                <div className="rd">
                                    <span className="icon icon-address"></span>
                                    {education.location}
                                </div>
                                <div className="th">
                                    {education.end != "" &&
                                    education.start != ""
                                        ? education.start + " - "
                                        : education.start}{" "}
                                    {education.end}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ResumeEducation;
