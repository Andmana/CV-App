import ResumeTop from "./ResumeTop";
import "../../styles/resume.css";
import ResumeSkill from "./ResumeSkill";

const ResumeView = ({ personalData, sectionData }) => {
    return (
        <div className="resume-border">
            <div className="resume">
                <ResumeTop personalData={personalData} />
                <ResumeSkill skills={sectionData.Skills} />
            </div>
        </div>
    );
};

export default ResumeView;
