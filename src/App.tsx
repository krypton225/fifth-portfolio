import {
    Navbar,
    Landing,
    Certificates,
    GoToTop,
    About,
    Projects,
    UnderShadow,
    Contact,
} from "components";

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

            <Contact />
        </div>
    );
}

export default App;
