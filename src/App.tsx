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
    SocialMedia,
} from "components";

function App() {
    return (
        <div className="hegazi-app selection:text-white selection:bg-primary">
            <Navbar />
            <GoToTop />
            <UnderShadow />
            <SocialMedia />

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
