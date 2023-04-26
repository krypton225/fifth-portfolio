import React from "react";
import ReactDOM from "react-dom/client";

import "aos/dist/aos.css";
import "./index.scss";

import App from "./App";

// eslint-disable-next-line prettier/prettier
const root = ReactDOM.createRoot(document.getElementById("main") as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
