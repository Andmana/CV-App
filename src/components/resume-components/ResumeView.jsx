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
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeView;
