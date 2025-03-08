import "../../styles/resume-top.css";

const ContactInfoItem = ({ iconClass, value }) => (
    <div>
        <span className={`icon ${iconClass}`}></span>
        <span>{value}</span>
    </div>
);

const ResumeTop = ({ personalData }) => (
    <div className="resume-top">
        <div className="resume-name">
            <h1>{personalData.name}</h1>
        </div>
        <div className="contact-info">
            {personalData.email && (
                <ContactInfoItem
                    iconClass="icon-email"
                    value={personalData.email}
                />
            )}
            {personalData.phone && (
                <ContactInfoItem
                    iconClass="icon-phone"
                    value={personalData.phone}
                />
            )}
            {personalData.address && (
                <ContactInfoItem
                    iconClass="icon-address"
                    value={personalData.address}
                />
            )}
        </div>
    </div>
);

export default ResumeTop;
