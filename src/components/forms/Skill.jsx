import templateData from "../../template";
import InputGroup from "./inputGroup";

const skillsTemp = templateData.skills;
const Skill = () => {
    function emptyFunc() {}
    return (
        <>
            <div className="edit-section skill">
                <div className="section-list">
                    {skillsTemp.map((skill) => {
                        return (
                            <li key={skill.id} className="section-list-item">
                                {skill.name}
                            </li>
                        );
                    })}
                </div>
                <div className="edit-section-add">
                    <button>Add</button>
                </div>

                <div className="section-form">
                    <InputGroup
                        label="name"
                        propName="name"
                        propValue=""
                        onChangeFunction={emptyFunc}
                        placeholder="Enter skill"
                    />

                    <InputGroup
                        label="descriotion"
                        propName="description"
                        propValue=""
                        onChangeFunction={emptyFunc}
                        placeholder="Enter description"
                        type="textarea"
                    />

                    <div className="section-form-action">
                        <div className="flex-1">
                            <button className="delete">Delete</button>
                        </div>
                        <div>
                            <button className="cancel">Cancel</button>
                        </div>
                        <div>
                            <button className="save">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skill;
