import { Navbar, Landing, Certificates, GoToTop, About, Projects, UnderShadow } from "components";

function App() {
    return (
        <div className="hegazi-app selection:text-white selection:bg-primary">
            <Navbar />
            <GoToTop />
            <UnderShadow />

            <Landing />

            <About />

            <Projects />

            <Certificates />
        </div>
    );
}

export default App;
