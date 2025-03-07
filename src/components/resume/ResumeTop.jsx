const ContactInfoItem = ({ iconClass, value }) => (
    <div className="contact-mail">
        <span className={`icon ${iconClass}`}></span>
        <span>{value}</span>
    </div>
);

const ResumeTop = ({
    name = "Andreas Permana Putra",
    email = "mail@mail.com",
    phone = "+622123151",
    address = "Jakarta, Indonesia",
}) => (
    <div className="resume-top">
        <div className="resume-name">
            <h1>{name}</h1>
        </div>
        <div className="contact-info">
            {email && <ContactInfoItem iconClass="icon-email" value={email} />}
            {phone && <ContactInfoItem iconClass="icon-phone" value={phone} />}
            {address && (
                <ContactInfoItem iconClass="icon-address" value={address} />
            )}
        </div>
    </div>
);

export default ResumeTop;
