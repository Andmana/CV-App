const PersonalDetail = () => {
    return (
        <>
            <div className="personal-detail">
                <div className="input-group">
                    <label htmlFor="full-name">Full Name :</label>
                    <input
                        type="text"
                        id="full-name"
                        placeholder="Enter full name"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email :</label>
                    <input type="text" id="email" placeholder="Enter email" />
                </div>
                <div className="input-group">
                    <label htmlFor="phone-number">Phone number :</label>
                    <input
                        type="text"
                        id="phone-number"
                        placeholder="Enter phone number"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address :</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="city, country"
                    />
                </div>
            </div>
        </>
    );
};

export default PersonalDetail;
