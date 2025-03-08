const ResumeView = ({ personalData, sectionData }) => {
    return (
        <>
            <div className="resume-border">
                <div className="resume">
                    <div>{personalData.name}</div>
                    <div>{personalData.email}</div>
                    <div>{personalData.phone}</div>
                    <div>{personalData.address}</div>

                    <div>
                        <ul>
                            {sectionData.Skills.map((skill) => (
                                <li key={skill.id}>
                                    <strong>{skill.name}</strong>
                                    {skill.description}
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {sectionData.Educations.map((education) => (
                                <li
                                    key={education.id}
                                    style={{ marginTop: "2rem" }}
                                >
                                    <div>
                                        <strong>degree : </strong>
                                        {education.degree}
                                    </div>
                                    <div>
                                        <strong>school : </strong>
                                        {education.school}
                                    </div>
                                    <div>
                                        <strong>start : </strong>
                                        {education.start}
                                    </div>
                                    <div>
                                        <strong>end : </strong>
                                        {education.end}
                                    </div>
                                    <div>
                                        <strong>location : </strong>
                                        {education.location}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeView;
