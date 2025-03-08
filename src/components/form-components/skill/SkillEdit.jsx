import SKillForm from "./SkillForm";
import SkillList from "./SkillList";

const SkillEdit = ({
    sectionData,
    handleSectionDataChange,
    isFormOpen,
    handleFormOpen,
}) => {
    return (
        <>
            <h1 className="edit-section-header">Skills</h1>
            {isFormOpen && (
                <SkillList
                    skills={sectionData}
                    handleFormOpen={handleFormOpen}
                />
            )}
            {!isFormOpen && (
                <SKillForm
                    sectionData={sectionData}
                    handleSectionDataChange={handleSectionDataChange}
                    handleFormOpen={handleFormOpen}
                />
            )}
        </>
    );
};

export default SkillEdit;
