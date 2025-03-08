import PersonalDetailForm from "./PersonalDetailForm";

const PersonalDetailEdit = ({ personalData, handlePersonalDataChange }) => {
    return (
        <>
            <h1 className="edit-section-header">Personal Details</h1>

            <PersonalDetailForm
                personalData={personalData}
                handlePersonalDataChange={handlePersonalDataChange}
            />
        </>
    );
};

export default PersonalDetailEdit;
