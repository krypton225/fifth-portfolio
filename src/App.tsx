import { Navbar, Landing, Certificates } from "components";

function App() {
    return (
        <div className="hegazi-app selection:text-white selection:bg-primary">
            <Navbar />

            <Landing />

            <Certificates />
        </div>
    );
}

export default App;
