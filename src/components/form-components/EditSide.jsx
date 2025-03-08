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
    sectionForm,
    handleSectionForm,
}) => {
    const renderActiveSection = () => {
        switch (activeSection.id) {
            case 0:
                return (
                    <PersonalDetailEdit
                        personalData={sectionData}
                        handlePersonalDataChange={handleSectionDataChange}
                    />
                );
            case 1:
                return (
                    <ExperienceEdit
                        sectionData={sectionData.Experiences}
                        handleSectionDataChange={handleSectionDataChange}
                        sectionForm={sectionForm}
                        handleSectionForm={handleSectionForm}
                    />
                );
            case 2:
                return (
                    <EducationEdit
                        sectionData={sectionData.Educations}
                        handleSectionDataChange={handleSectionDataChange}
                        sectionForm={sectionForm}
                        handleSectionForm={handleSectionForm}
                    />
                );
            case 3:
                return (
                    <SkillEdit
                        sectionData={sectionData.Skills}
                        handleSectionDataChange={handleSectionDataChange}
                        sectionForm={sectionForm}
                        handleSectionForm={handleSectionForm}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="template-loader">
                <button className="clear-resume">Clear Resume</button>
                <button className="load-template">Load Template</button>
            </div>
            <div className="edit-section-container">
                {!sectionForm.open && (
                    <div className="edit-section-option">
                        <ul>
                            {EditSection.map(
                                (section) =>
                                    section.id !== activeSection.id && (
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
                            )}
                        </ul>
                    </div>
                )}
                <div className="edit-section">{renderActiveSection()}</div>
            </div>
        </>
    );
};

export default EditSide;
