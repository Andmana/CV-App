import InputGroup from "./inputGroup";

const PersonalDetail = ({ personalInfo, onInputChange }) => {
    return (
        <>
            <div className="personal-detail">
                <InputGroup
                    label="Full Name"
                    propName="name"
                    propValue={personalInfo.name}
                    onChangeFunction={onInputChange}
                    placeholder="Enter full name"
                />
                <InputGroup
                    label="Full Name"
                    propName="email"
                    propValue={personalInfo.email}
                    onChangeFunction={onInputChange}
                    placeholder="Enter email"
                />
                <InputGroup
                    label="Enter phone number"
                    propName="phone"
                    propValue={personalInfo.phone}
                    onChangeFunction={onInputChange}
                    placeholder="Enter phone"
                />
                <InputGroup
                    label="Enter phone number"
                    propName="address"
                    propValue={personalInfo.address}
                    onChangeFunction={onInputChange}
                    placeholder="City, country"
                />
            </div>
        </>
    );
};

export default PersonalDetail;
