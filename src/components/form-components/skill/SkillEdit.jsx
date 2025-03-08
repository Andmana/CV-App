import SKillForm from "./SkillForm";
import SkillList from "./SkillList";

const SkillEdit = ({
    sectionData,
    handleSectionDataChange,
    sectionForm,
    handleSectionForm,
}) => {
    return (
        <>
            <h1 className="edit-section-header">Skills</h1>
            {!sectionForm.open && (
                <SkillList
                    skills={sectionData}
                    handleSectionForm={handleSectionForm}
                />
            )}
            {sectionForm.open && (
                <SKillForm
                    sectionData={sectionData}
                    handleSectionDataChange={handleSectionDataChange}
                    handleSectionForm={handleSectionForm}
                />
            )}
        </>
    );
};

export default SkillEdit;
