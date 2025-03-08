import FormAction from "../FormAction";
import InputGroup from "../InputGroup";

const SKillForm = ({ data, handleSectionDataChange, handleSectionForm }) => {
    return (
        <>
            <div className="section-form">
                <InputGroup
                    label="name"
                    propName="name"
                    propValue={data.name}
                    onChangeFunction={handleSectionDataChange}
                    placeholder="Enter skill"
                    dataId={data.id}
                    dataSection="Skills"
                />

                <InputGroup
                    label="descriotion"
                    propName="description"
                    propValue={data.description}
                    onChangeFunction={handleSectionDataChange}
                    placeholder="Enter description"
                    type="textarea"
                    dataId={data.id}
                    dataSection="Skills"
                />
                <FormAction
                    id={data.id}
                    handleSectionForm={handleSectionForm}
                />
            </div>
        </>
    );
};

export default SKillForm;
