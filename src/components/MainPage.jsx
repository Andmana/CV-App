import "../styles/main.css";

const MainPage = () => {
    return (
        <>
            <div className="app">
                <nav className="top-nav">
                    <h1>CV BUILDER</h1>
                </nav>
                <main className="container">
                    <aside className="edit-side"></aside>
                    <section className="resume-container"></section>
                </main>
                <footer className="footer"></footer>
            </div>
        </>
    );
};

export default MainPage;
