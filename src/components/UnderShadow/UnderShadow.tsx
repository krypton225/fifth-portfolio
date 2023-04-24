import { useState } from "react";

const UnderShadow = () => {
    const [isReachToPoint, setIsReachToPoint] = useState<boolean>(false);

    const handleScrolling = (): void => {
        if (document.documentElement.scrollTop > 150) {
            setIsReachToPoint(true);
        } else {
            setIsReachToPoint(false);
        }
    };

    window.addEventListener("scroll", handleScrolling);

    return (
        <div
            className={`w-full h-0 fixed transition-all duration-500
            ${isReachToPoint ? "bottom-0" : "-bottom-[25%]"} 
            left-0 shadow-4xl shadow-top z-[999999999]`}></div>
    );
};

export default UnderShadow;
