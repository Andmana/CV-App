import FormAction from "../FormAction";
import InputGroup from "../InputGroup";

const ExperienceForm = ({
    data,
    handleSectionDataChange,
    handleSectionForm,
}) => {
    return (
        <>
            <div className="section-form">
                <InputGroup
                    label="Company Name"
                    propName="company"
                    propValue={data.company}
                    onChangeFunction={handleSectionDataChange}
                    placeholder="Enter company name"
                    dataId={data.id}
                    dataSection="Experiences"
                />

                <InputGroup
                    label="Position Title"
                    propName="position"
                    propValue={data.position}
                    onChangeFunction={handleSectionDataChange}
                    placeholder="Enter position title"
                    dataId={data.id}
                    dataSection="Experiences"
                />

                <div className="input-group-small">
                    <InputGroup
                        label="Start Date"
                        propName="start"
                        propValue={data.start}
                        onChangeFunction={handleSectionDataChange}
                        placeholder="Enter start date"
                        dataId={data.id}
                        dataSection="Experiences"
                    />

                    <InputGroup
                        label="End Date"
                        propName="end"
                        propValue={data.end}
                        onChangeFunction={handleSectionDataChange}
                        placeholder="Enter end date"
                        dataId={data.id}
                        dataSection="Experiences"
                    />
                </div>
                <InputGroup
                    label="Location"
                    propName="location"
                    propValue={data.location}
                    onChangeFunction={handleSectionDataChange}
                    placeholder="Enter location"
                    dataId={data.id}
                    dataSection="Experiences"
                />

                <InputGroup
                    label="Description"
                    propName="description"
                    propValue={data.description}
                    onChangeFunction={handleSectionDataChange}
                    placeholder="Enter description"
                    type="textarea"
                    dataId={data.id}
                    dataSection="Experiences"
                />

                <FormAction
                    id={data.id}
                    handleSectionForm={handleSectionForm}
                />
            </div>
        </>
    );
};

export default ExperienceForm;
