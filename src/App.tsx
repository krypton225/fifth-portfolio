import { Navbar, Landing, Certificates, GoToTop } from "components";

function App() {
    return (
        <div className="hegazi-app selection:text-white selection:bg-primary">
            <Navbar />
            <GoToTop />

            <Landing />

            <Certificates />
        </div>
    );
}

export default App;
