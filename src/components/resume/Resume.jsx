import "../../styles/resume.css";
import ResumeSkill from "./ResumeSkill";
import ResumeTop from "./ResumeTop";

const Resume = ({ personalInfo }) => {
    return (
        <>
            <div className="resume-border">
                <div className="resume">
                    <ResumeTop personalInfo={personalInfo} />
                    <ResumeSkill />
                </div>
            </div>
        </>
    );
};

export default Resume;
