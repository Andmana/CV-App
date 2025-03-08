import InputGroup from "../InputGroup";

const PersonalDetailForm = (personalData, handlePersonalDataChange) => {
    return (
        <>
            <InputGroup
                label="Full Name"
                propName="name"
                propValue={personalData.name}
                onChangeFunction={handlePersonalDataChange}
                placeholder="Enter full name"
            />
            <InputGroup
                label="Full Name"
                propName="email"
                propValue={personalData.email}
                onChangeFunction={handlePersonalDataChange}
                placeholder="Enter email"
            />
            <InputGroup
                label="Enter phone number"
                propName="phone"
                propValue={personalData.phone}
                onChangeFunction={handlePersonalDataChange}
                placeholder="Enter phone"
            />
            <InputGroup
                label="Enter phone number"
                propName="address"
                propValue={personalData.address}
                onChangeFunction={handlePersonalDataChange}
                placeholder="City, country"
            />
        </>
    );
};

export default PersonalDetailForm;
