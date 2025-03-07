import { useState } from "react";
import "../../styles/edit-side.css";
import PersonalDetail from "./PersonalDetail";

const EditSide = ({ personalInfo, onPersonalInputChange }) => {
    const [activeSection, setActiveSection] = useState(0);

    const handleSectionEvent = (id) => {
        setActiveSection(id);
    };

    return (
        <>
            <div className="template-loader">
                <button className="clear-resume">Clear Resume</button>
                <button className="load-template">Load Template</button>
            </div>

            <div className="edit-section">
                <div className="edit-section-option">
                    <ul>
                        {EditSection.map((section) => {
                            if (section.id === activeSection) return null; // Skip active section
                            return (
                                <li key={section.id}>
                                    <button
                                        onClick={() =>
                                            handleSectionEvent(section.id)
                                        }
                                    >
                                        {section.name}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="active-edit-section">
                    <h2>{EditSection[activeSection]?.name}</h2>
                </div>
                {EditSection[activeSection]?.id === 0 && (
                    <PersonalDetail
                        personalInfo={personalInfo}
                        onInputChange={onPersonalInputChange}
                    />
                )}
            </div>
        </>
    );
};

const EditSection = [
    { id: 0, name: "Personal Detail" },
    { id: 1, name: "Experience" },
    { id: 2, name: "Education" },
    { id: 3, name: "Skill" },
];

export default EditSide;

// const EditSection = {
//     0: "Personal Detail",
//     1: "Experience",
//     2: "Education",
//     3: "Skill",
// };
