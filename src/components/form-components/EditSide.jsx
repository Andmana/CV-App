import "../../styles/edit-side.css";
import EducationEdit from "./education/EducationEdit";
import ExperienceEdit from "./experience/ExperienceEdit";
import PersonalDetailEdit from "./personal-detail/PersonalDetailEdit";
import SkillEdit from "./skill/SkillEdit";

const EditSection = [
    { id: 0, name: "Personal Details" },
    { id: 1, name: "Experiences" },
    { id: 2, name: "Educations" },
    { id: 3, name: "Skills" },
];

const EditSide = ({
    activeSection,
    handleActiveSection,
    sectionData,
    handleSectionDataChange,
    isFormOpen,
    handleFormOpen,
}) => {
    return (
        <>
            <div className="template-loader">
                <button className="clear-resume">Clear Resume</button>
                <button className="load-template">Load Template</button>
            </div>
            <div className="edit-section-container">
                <div className="edit-section-option">
                    <ul>
                        {EditSection.map((section) => {
                            return (
                                section.id != activeSection.id && (
                                    <li key={section.id}>
                                        <button
                                            onClick={handleActiveSection}
                                            data-id={section.id}
                                            data-name={section.name}
                                        >
                                            {section.name}
                                        </button>
                                    </li>
                                )
                            );
                        })}
                    </ul>
                </div>
                <div className="edit-section">
                    {activeSection.id === 0 && (
                        <PersonalDetailEdit
                            personalData={sectionData}
                            handlePersonalDataChange={handleSectionDataChange}
                        />
                    )}
                    {activeSection.id === 1 && (
                        <ExperienceEdit
                            sectionData={sectionData.Experiences}
                            handleSectionDataChange={handleSectionDataChange}
                            isFormOpen={isFormOpen}
                            handleFormOpen={handleFormOpen}
                        />
                    )}
                    {activeSection.id === 2 && (
                        <EducationEdit
                            sectionData={sectionData.Educations}
                            handleSectionDataChange={handleSectionDataChange}
                            isFormOpen={isFormOpen}
                            handleFormOpen={handleFormOpen}
                        />
                    )}
                    {activeSection.id === 3 && (
                        <SkillEdit
                            sectionData={sectionData.Skills}
                            handleSectionDataChange={handleSectionDataChange}
                            isFormOpen={isFormOpen}
                            handleFormOpen={handleFormOpen}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default EditSide;
