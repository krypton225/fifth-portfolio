import { useState } from "react";

const Copyright = () => {
    const [getCurrentYear, setGetCurrentYear] = useState<number | string>("");

    window.addEventListener("load", () => {
        setGetCurrentYear(new Date().getFullYear());
    });

    return (
        <div
            className={`w-full mt-4 lg:mt-14 py-4 flex justify-center items-center bg-primary text-white 
        text-center text-sm capitalize`}>
            <p>all rights reversed &copy; {getCurrentYear}</p>
        </div>
    );
};

export default Copyright;
