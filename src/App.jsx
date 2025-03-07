import "./styles/app.css";
import EditSide from "./components/forms/EditSide";
import Resume from "./components/resume/Resume";
import { useState } from "react";

function App() {
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    // Function to update personal info form
    const handlePersonalInputChange = (event) => {
        const { name, value } = event.target;
        setPersonalInfo({
            ...personalInfo,
            [name]: value,
        });
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
                            personalInfo={personalInfo}
                            onPersonalInputChange={handlePersonalInputChange}
                        />
                    </aside>

                    <section className="resume-container">
                        <Resume personalInfo={personalInfo} />
                    </section>
                </main>

                <footer className="footer"></footer>
            </div>
        </>
    );
}

export default App;
