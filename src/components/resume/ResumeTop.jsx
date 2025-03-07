import "../../styles/resume-top.css";

const ContactInfoItem = ({ iconClass, value }) => (
    <div>
        <span className={`icon ${iconClass}`}></span>
        <span>{value}</span>
    </div>
);

const ResumeTop = ({ personalInfo }) => (
    <div className="resume-top">
        <div className="resume-name">
            <h1>{personalInfo.name}</h1>
        </div>
        <div className="contact-info">
            {personalInfo.email && (
                <ContactInfoItem
                    iconClass="icon-email"
                    value={personalInfo.email}
                />
            )}
            {personalInfo.phone && (
                <ContactInfoItem
                    iconClass="icon-phone"
                    value={personalInfo.phone}
                />
            )}
            {personalInfo.address && (
                <ContactInfoItem
                    iconClass="icon-address"
                    value={personalInfo.address}
                />
            )}
        </div>
    </div>
);

export default ResumeTop;
