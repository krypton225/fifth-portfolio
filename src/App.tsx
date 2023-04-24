import { Navbar, Landing, Certificates, GoToTop, About } from "components";

function App() {
    return (
        <div className="hegazi-app selection:text-white selection:bg-primary">
            <Navbar />
            <GoToTop />

            <Landing />

            <About />

            <Certificates />
        </div>
    );
}

export default App;
