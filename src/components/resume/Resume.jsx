import "../../styles/resume.css";
import ResumeTop from "./ResumeTop";

const Resume = ({ personalInfo }) => {
    return (
        <>
            <div className="resume-border">
                <div className="resume">
                    <ResumeTop personalInfo={personalInfo} />
                </div>
            </div>
        </>
    );
};

export default Resume;
