import { useState } from "react";
import EditSide from "./components/form-components/EditSide";
import templateData from "./template";
import "./styles/app.css";
import ResumeView from "./components/resume-components/ResumeView";

function App() {
    const initialSectionData = templateData;
    const [personalData, setPersonalData] = useState({
        ...initialSectionData["Personal Details"],
    });
    const [sectionData, setSectionData] = useState({
        ...initialSectionData.section,
    });
    const [sectionBackup, setSectionBackup] = useState({});
    const [activeSection, setActiveSection] = useState({
        id: 0,
        name: "Personal Details",
    });
    const [sectionForm, setSectionForm] = useState({ open: false, id: null });

    const handleActiveSection = (event) => {
        const { id, name } = event.target.dataset;
        setActiveSection({ id: parseInt(id), name });
    };

    const handlePersonalDataChange = (event) => {
        const { name, value } = event.target;
        setPersonalData({
            ...personalData,
            [name]: value,
        });
    };

    const handleSectionDataChange = (event) => {
        const { name, value } = event.target;
        const { section, id } = event.target.dataset;

        const updatedSectionData = { ...sectionData };

        if (updatedSectionData[section]) {
            const updatedDataArr = updatedSectionData[section].map((item) => {
                if (item.id == id) {
                    return { ...item, [name]: value };
                }
                return item;
            });

            updatedSectionData[section] = updatedDataArr;
            setSectionData(updatedSectionData);
        }
    };

    const handleSectionForm = (event) => {
        let { open, id } = event.target.dataset;
        open = open === "true" ? true : false;
        id = id === "null" ? null : id;

        if (open) {
            // Create a deep clone of sectionData for backup to avoid reference issues
            setSectionBackup(JSON.parse(JSON.stringify(sectionData))); // Deep clone sectionData

            if (id === null) {
                const newEntry = createEmptyFormValue(activeSection.name);
                id = newEntry.id;

                const updatedSectionData = { ...sectionData };
                updatedSectionData[activeSection.name].push(newEntry);
                setSectionData(updatedSectionData);
            }
        } else {
            if (id === null) {
                // Restore sectionData from sectionBackup
                setSectionData({ ...sectionBackup });
            }
        }

        setSectionForm({ open, id });
    };

    const createEmptyFormValue = (section) => {
        if (section === "Skills")
            return {
                id: crypto.randomUUID(),
                name: "",
                description: "",
            };
        if (section === "Educations")
            return {
                id: crypto.randomUUID(),
                degree: "",
                school: "",
                start: "",
                end: "",
                location: "",
            };
        if (section === "Experinces")
            return {
                id: crypto.randomUUID(),
                company: "",
                position: "",
                start: "",
                end: "",
                location: "",
                description: "",
            };
    };

    return (
        <>
            <div className="app">
                <nav className="top-nav">
                    <h1>CV BUILDER</h1>
                </nav>

                <main className="content-container">
                    <aside className="edit-side">
                        <EditSide
                            activeSection={activeSection}
                            handleActiveSection={handleActiveSection}
                            sectionData={
                                activeSection.id === 0
                                    ? personalData
                                    : sectionData
                            }
                            handleSectionDataChange={
                                activeSection.id === 0
                                    ? handlePersonalDataChange
                                    : handleSectionDataChange
                            }
                            sectionForm={sectionForm}
                            handleSectionForm={handleSectionForm}
                        />
                    </aside>

                    <section className="resume-container">
                        <ResumeView
                            personalData={personalData}
                            sectionData={sectionData}
                        />
                    </section>
                </main>

                <footer className="footer"></footer>
            </div>
        </>
    );
}

export default App;
