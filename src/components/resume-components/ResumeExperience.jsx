import "../../styles/resume-experience.css";

const ResumeExperience = ({ experiences }) => {
    return (
        <div className="resume-section">
            {experiences.length > 0 && (
                <div className="resume-section-header">
                    <h2>Experiences</h2>
                </div>
            )}
            <ul>
                {experiences.map((experience) => {
                    let description = experience.description.toString();
                    description = description.replace(/\n/g, "<br />");

                    return (
                        <li key={experience.id}>
                            <div className="resume-experience-item">
                                <div className="item-top">
                                    <div className="st">
                                        {experience.position}
                                    </div>
                                    <span>-</span>
                                    <div className="nd">
                                        {experience.company}
                                    </div>

                                    <div className="rd">
                                        <span className="icon icon-address"></span>
                                        {experience.location}
                                    </div>
                                    <div className="th">
                                        {experience.start && experience.end
                                            ? experience.start +
                                              " - " +
                                              experience.end
                                            : experience.start}
                                    </div>
                                </div>
                                <div
                                    className="item-description"
                                    dangerouslySetInnerHTML={{
                                        __html: description,
                                    }}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ResumeExperience;
