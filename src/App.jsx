import "./styles/app.css";
import EditSide from "./components/forms/EditSide";
import Resume from "./components/resume/Resume";
function App() {
    return (
        <>
            <div className="app">
                <nav className="top-nav">
                    <h1>CV BUILDER</h1>
                </nav>
                <main className="content-container">
                    <aside className="edit-side">
                        <EditSide />
                    </aside>
                    <section className="resume-container">
                        <Resume />
                    </section>
                </main>
                <footer className="footer"></footer>
            </div>
        </>
    );
}

export default App;
