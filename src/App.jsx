import { useState } from "react";
import EditSide from "./components/form-components/EditSide";
import templateData from "./template";
import "./styles/app.css";

function App() {
    const initialSectionData = templateData;
    const [personalData, setPersonalData] = useState({
        ...initialSectionData["Personal Details"],
    });
    const [sectionData, setSectionData] = useState({
        ...initialSectionData.section,
    });
    const [activeSection, setActiveSection] = useState({
        id: 0,
        name: "Personal Details",
    });
    const [isFormOpen, setFormOpen] = useState(false);

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

    // * Need to update
    const handleSectionDataChange = (event) => {
        console.log("event.target.value", event.target.value);
        // setSectionData(event);
    };

    const handleFormOpen = () => {
        setFormOpen(!isFormOpen);
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
                            isFormOpen={isFormOpen}
                            handleFormOpen={handleFormOpen}
                        />
                    </aside>

                    <section className="resume-container"></section>
                </main>

                <footer className="footer"></footer>
            </div>
        </>
    );
}

export default App;
