import ResumeTop from "./ResumeTop";
import "../../styles/resume.css";
import ResumeSkill from "./ResumeSkill";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./REsumeExperience";
import { useState } from "react";

const ResumeView = ({ personalData, sectionData }) => {
    const [useExtend, setExtend] = useState(false);

    const handleExtend = () => {
        setExtend(!useExtend);
    };

    return (
        <div className={`resume-wrapper ${useExtend ? "extend" : ""}`}>
            <div className="extend-button">
                <button onClick={handleExtend}>
                    <span
                        className={`icon icon-${
                            useExtend ? "shrink" : "extend"
                        }`}
                    ></span>
                </button>
            </div>
            <div className="resume-border">
                <div className="resume">
                    <ResumeTop personalData={personalData} />
                    <ResumeSkill skills={sectionData.Skills} />
                    <ResumeEducation educations={sectionData.Educations} />
                    <ResumeExperience experiences={sectionData.Experiences} />
                </div>
            </div>
        </div>
    );
};

export default ResumeView;
