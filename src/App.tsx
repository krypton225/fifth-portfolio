import { useState } from "react";

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
    DarkModeToggler,
} from "components";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleToggleDarkMode = (): void => setIsDarkMode((prev) => !prev);

    return (
        <div
            className={`hegazi-app selection:text-white selection:bg-primary transition-all duration-500
            ${isDarkMode ? "dark" : ""}`}>
            <DarkModeToggler isDarkMode={isDarkMode} handleToggleDarkMode={handleToggleDarkMode} />

            <Navbar isDark={isDarkMode} />

            <GoToTop isDark={isDarkMode} />

            <UnderShadow />

            <SocialMedia />

            <Landing isDark={isDarkMode} />

            <About isDark={isDarkMode} />

            <Projects isDark={isDarkMode} />

            <Certificates isDark={isDarkMode} />

            <Contact isDark={isDarkMode} />

            <Copyright />
        </div>
    );
}

export default App;
