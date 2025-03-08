const FormAction = ({ id, handleSectionForm }) => {
    return (
        <div className="section-form-action">
            <div className="flex-1">
                <button
                    onClick={handleSectionForm}
                    data-open="false"
                    data-id={id}
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
                    data-id={id}
                    className="bg-primary"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default FormAction;
