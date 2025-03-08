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

                <div className="section-form-action">
                    <div className="flex-1">
                        <button
                            onClick={handleSectionForm}
                            data-open="false"
                            data-id={data.id}
                            data-action="delete"
                            className="bg-danger"
                        >
                            Delete
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={handleSectionForm}
                            data-open="false"
                            data-id="null"
                            className="bg-white"
                        >
                            Cancel
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={handleSectionForm}
                            data-open="false"
                            data-action="save"
                            data-id={data.id}
                            className="bg-primary"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SKillForm;
