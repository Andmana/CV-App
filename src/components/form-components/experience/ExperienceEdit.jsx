import ExperienceList from "./ExperieceList";
import ExperienceForm from "./ExperienceForm";

const ExperienceEdit = ({
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
            <h1 className="edit-section-header">Experiences</h1>

            {!sectionForm.open && (
                <ExperienceList
                    data={sectionData}
                    handleSectionForm={handleSectionForm}
                />
            )}

            {sectionForm.open && (
                <ExperienceForm
                    data={data}
                    handleSectionDataChange={handleSectionDataChange}
                    handleSectionForm={handleSectionForm}
                />
            )}
        </>
    );
};

export default ExperienceEdit;
