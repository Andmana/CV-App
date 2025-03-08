const SkillList = ({ skills, handleSectionForm }) => {
    return (
        <>
            <div className="section-list">
                {skills.map((skill) => {
                    return (
                        <li
                            key={skill.id}
                            className="section-list-item"
                            data-open="true"
                            data-id={skill.id}
                            onClick={handleSectionForm}
                        >
                            {skill.name}
                        </li>
                    );
                })}
            </div>

            <div className="edit-section-add">
                <button
                    className="bg-white"
                    data-open="true"
                    data-id="null"
                    onClick={handleSectionForm}
                >
                    <span className="icon icon-add"></span> <span>Skill</span>
                </button>
            </div>
        </>
    );
};

export default SkillList;
