import EducationForm from "./EducationForm";
import EducationList from "./EducationList";

const EducationEdit = ({
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
            <h1 className="edit-section-header">Educations</h1>

            {!sectionForm.open && (
                <EducationList
                    data={sectionData}
                    handleSectionForm={handleSectionForm}
                />
            )}

            {sectionForm.open && (
                <EducationForm
                    data={data}
                    handleSectionDataChange={handleSectionDataChange}
                    handleSectionForm={handleSectionForm}
                />
            )}
        </>
    );
};

export default EducationEdit;
