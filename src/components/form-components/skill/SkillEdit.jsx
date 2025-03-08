import SKillForm from "./SkillForm";
import SkillList from "./SkillList";

const SkillEdit = ({
    sectionData,
    handleSectionDataChange,
    sectionForm,
    handleSectionForm,
}) => {
    let data;
    if (sectionForm.open) {
        data = sectionData.find((item) => item.id == sectionForm.id);
    }

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
                    data={data}
                    handleSectionDataChange={handleSectionDataChange}
                    handleSectionForm={handleSectionForm}
                />
            )}
        </>
    );
};

export default SkillEdit;
