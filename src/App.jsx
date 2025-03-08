import { useState } from "react";
import EditSide from "./components/form-components/EditSide";
import templateData from "./template";
import { emptyData } from "./template";
import "./styles/app.css";
import ResumeView from "./components/resume-components/ResumeView";

function App() {
    // Initialize state
    const initialSectionData = templateData;
    const [personalData, setPersonalData] = useState({
        ...initialSectionData["Personal Details"],
    });
    const [sectionData, setSectionData] = useState({
        ...initialSectionData.section,
    });
    const [sectionBackup, setSectionBackup] = useState({ ...sectionData });
    const [activeSection, setActiveSection] = useState({
        id: 0,
        name: "Personal Details",
    });
    const [sectionForm, setSectionForm] = useState({ open: false, id: null });

    const handleActiveSection = (event) => {
        const { id, name } = event.target.dataset;
        setActiveSection({ id: parseInt(id), name });
        setSectionForm({ open: false, id: null });
        setSectionData({ ...sectionBackup }); // Restore backup
    };

    const handleResetData = (event) => {
        const isLoadTemplate = event.target.dataset.load === "true";
        console.log("goes here", isLoadTemplate);
        if (isLoadTemplate) {
            setPersonalData({ ...initialSectionData["Personal Details"] });
            setSectionData({ ...initialSectionData.section });
        } else {
            setPersonalData({ ...emptyData["Personal Details"] });
            setSectionData({ ...emptyData.section });
        }
        setSectionForm({ open: false, id: null });
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

        setSectionData((prevData) => ({
            ...prevData,
            [section]: prevData[section].map((item) =>
                item.id == id ? { ...item, [name]: value } : item
            ),
        }));
    };

    const handleSectionForm = (event) => {
        let { open, id, action } = event.target.dataset;
        open = open === "true";
        id = id === "null" ? null : id;

        if (open) {
            setSectionBackup(JSON.parse(JSON.stringify(sectionData))); // Deep clone sectionData

            // New Entry
            if (!id) {
                const newEntry = createEmptyFormValue(activeSection.name);
                id = newEntry.id;
                setSectionData((prev) => ({
                    ...prev,
                    [activeSection.name]: [
                        ...prev[activeSection.name],
                        newEntry,
                    ],
                }));
            }
        } else {
            if (!id) {
                setSectionData({ ...sectionBackup }); // Restore backup
                // Remove entry
            } else if (action === "delete") {
                setSectionData((prev) => ({
                    ...prev,
                    [activeSection.name]: prev[activeSection.name].filter(
                        (item) => item.id !== id
                    ),
                }));
            }
        }

        setSectionForm({ open, id });
    };

    // Create an empty form value based on the section type
    const createEmptyFormValue = (section) => {
        switch (section) {
            case "Skills":
                return {
                    id: crypto.randomUUID(),
                    name: "",
                    description: "",
                };
            case "Educations":
                return {
                    id: crypto.randomUUID(),
                    degree: "",
                    school: "",
                    start: "",
                    end: "",
                    location: "",
                };
            case "Experiences":
                return {
                    id: crypto.randomUUID(),
                    company: "",
                    position: "",
                    start: "",
                    end: "",
                    location: "",
                    description: "",
                };
            default:
                throw new Error(`Unknown section: ${section}`);
        }
    };

    return (
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
                            activeSection.id === 0 ? personalData : sectionData
                        }
                        handleSectionDataChange={
                            activeSection.id === 0
                                ? handlePersonalDataChange
                                : handleSectionDataChange
                        }
                        sectionForm={sectionForm}
                        handleSectionForm={handleSectionForm}
                        handleResetData={handleResetData}
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
    );
}

export default App;
