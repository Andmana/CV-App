import InputGroup from "../InputGroup";

const SKillForm = ({ data, handleSectionDataChange, handleSectionForm }) => {
    function emptyFunc(e) {
        e.target.value = e.target.value + "AA";
    }
    return (
        <>
            <div className="section-form">
                <InputGroup
                    label="name"
                    propName="name"
                    propValue={data.name}
                    onChangeFunction={handleSectionDataChange}
                    placeholder="Enter skill"
                />

                <InputGroup
                    label="descriotion"
                    propName="description"
                    propValue={data.description}
                    onChangeFunction={handleSectionDataChange}
                    placeholder="Enter description"
                    type="textarea"
                />

                <div className="section-form-action">
                    <div className="flex-1">
                        <button className="bg-danger">Delete</button>
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
                        <button className="bg-primary">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SKillForm;
