const EducationList = ({ data, handleSectionForm }) => {
    return (
        <>
            <div className="section-list">
                {data.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className="section-list-item"
                            data-open="true"
                            data-id={item.id}
                            onClick={handleSectionForm}
                        >
                            {item.school}
                        </li>
                    );
                })}
            </div>

            <div className="edit-section-add">
                <button
                    className="bg-white"
                    data-open="true"
                    data-id="null"
                    onClick={handleSectionForm}
                >
                    <span className="icon icon-add"></span>{" "}
                    <span>Education</span>
                </button>
            </div>
        </>
    );
};

export default EducationList;
