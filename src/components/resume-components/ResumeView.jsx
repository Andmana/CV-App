import ResumeTop from "./ResumeTop";
import "../../styles/resume.css";
import ResumeSkill from "./ResumeSkill";
import ResumeEducation from "./ResumeEducation";

const ResumeView = ({ personalData, sectionData }) => {
    return (
        <div className="resume-border">
            <div className="resume">
                <ResumeTop personalData={personalData} />
                <ResumeSkill skills={sectionData.Skills} />
                <ResumeEducation educations={sectionData.Educations} />
            </div>
        </div>
    );
};

export default ResumeView;
