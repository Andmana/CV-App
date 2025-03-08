import ResumeTop from "./ResumeTop";
import "../../styles/resume.css";
import ResumeSkill from "./ResumeSkill";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./REsumeExperience";

const ResumeView = ({ personalData, sectionData }) => {
    return (
        <div className="resume-border">
            <div className="resume">
                <ResumeTop personalData={personalData} />
                <ResumeSkill skills={sectionData.Skills} />
                <ResumeEducation educations={sectionData.Educations} />
                <ResumeExperience experiences={sectionData.Experiences} />
            </div>
        </div>
    );
};

export default ResumeView;
