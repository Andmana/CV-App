const PersonalDetail = ({ personalInfo, onInputChange }) => {
    return (
        <>
            <div className="personal-detail">
                <div className="input-group">
                    <label htmlFor="name">Full Name :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter full name"
                        value={personalInfo.name}
                        onChange={onInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email :</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={personalInfo.email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone number :</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                        value={personalInfo.phone}
                        onChange={onInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address :</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="city, country"
                        value={personalInfo.address}
                        onChange={onInputChange}
                    />
                </div>
            </div>
        </>
    );
};

export default PersonalDetail;
