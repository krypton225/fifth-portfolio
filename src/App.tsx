import {
    Navbar,
    Landing,
    Certificates,
    GoToTop,
    About,
    Projects,
    UnderShadow,
    Contact,
    Copyright,
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

            <Copyright />
        </div>
    );
}

export default App;
