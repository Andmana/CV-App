import FormAction from "../FormAction";
import InputGroup from "../InputGroup";

const EducationForm = ({
    data,
    handleSectionDataChange,
    handleSectionForm,
}) => {
    return (
        <>
            <div className="section-form">
                <InputGroup
                    label="School"
                    propName="school"
                    propValue={data.school}
                    onChangeFunction={handleSectionDataChange}
                    placeholder="Enter school / university"
                    dataId={data.id}
                    dataSection="Educations"
                />

                <InputGroup
                    label="Degree"
                    propName="degree"
                    propValue={data.degree}
                    onChangeFunction={handleSectionDataChange}
                    placeholder="Enter degree / field of study"
                    dataId={data.id}
                    dataSection="Educations"
                />
                <div className="input-group-small">
                    <InputGroup
                        label="Start Date"
                        propName="start"
                        propValue={data.start}
                        onChangeFunction={handleSectionDataChange}
                        placeholder="Enter start date"
                        dataId={data.id}
                        dataSection="Educations"
                    />

                    <InputGroup
                        label="End Date"
                        propName="end"
                        propValue={data.end}
                        onChangeFunction={handleSectionDataChange}
                        placeholder="Enter end date"
                        dataId={data.id}
                        dataSection="Educations"
                    />
                </div>
                <InputGroup
                    label="Location"
                    propName="location"
                    propValue={data.location}
                    onChangeFunction={handleSectionDataChange}
                    placeholder="Enter location"
                    dataId={data.id}
                    dataSection="Educations"
                />
                <FormAction
                    id={data.id}
                    handleSectionForm={handleSectionForm}
                />
            </div>
        </>
    );
};

export default EducationForm;
