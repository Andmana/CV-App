import "../../styles/input-group.css";

const InputGroup = ({
    label,
    propName,
    propValue,
    onChangeFunction,
    placeHolder,
    type = "",
    dataId = null,
    dataSection = null,
}) => {
    return (
        <div className="input-group">
            <label htmlFor={propName}>{label} :</label>
            {type === "textarea" ? (
                <textarea
                    id={propName}
                    name={propName}
                    placeholder={placeHolder}
                    value={propValue}
                    onChange={onChangeFunction}
                    data-id={dataId}
                    data-section={dataSection}
                    rows={3}
                />
            ) : (
                <input
                    type="text"
                    id={propName}
                    name={propName}
                    placeholder={placeHolder}
                    value={propValue}
                    onChange={onChangeFunction}
                    data-id={dataId}
                    data-section={dataSection}
                />
            )}
        </div>
    );
};

export default InputGroup;
