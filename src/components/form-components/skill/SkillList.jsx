const SkillList = ({ skills, handleFormOpen }) => {
    return (
        <>
            <div className="section-list">
                {skills.map((skill) => {
                    return (
                        <li key={skill.id} className="section-list-item">
                            {skill.name}
                        </li>
                    );
                })}
            </div>

            <div className="edit-section-add">
                <button className="bg-white" onClick={handleFormOpen}>
                    <span className="icon icon-add"></span> <span>Skill</span>
                </button>
            </div>
        </>
    );
};

export default SkillList;
