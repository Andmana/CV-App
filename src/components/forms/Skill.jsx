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
                    <button className="bg-white">
                        <span className="icon icon-add"></span>{" "}
                        <span>Skill</span>
                    </button>
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
                            <button className="bg-danger">Delete</button>
                        </div>
                        <div>
                            <button className="bg-white">Cancel</button>
                        </div>
                        <div>
                            <button className="bg-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skill;
