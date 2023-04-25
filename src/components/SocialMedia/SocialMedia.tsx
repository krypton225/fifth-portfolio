import { useState } from "react";

import SocialMediaData from "data/social-media.data";

const SocialMedia = () => {
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
            // lg:w-fit lg:py-3 lg:rounded-xl
            className={`max-[450px]:w-[65%] min-[451px]:w-[45%] max-[639px]:w-[45%] sm:w-[45%] md:w-[18rem] h-12 overflow-hidden
            ${isReachToPoint ? "bottom-[4%]" : "-bottom-[15%]"} 
            rounded-full fixed left-[35%] md:left-1/2 z-[999999999] -translate-x-[45%] md:-translate-x-1/2 
            flex justify-between items-center bg-primary transition-all duration-[1s]`}>
            {SocialMediaData.map(({ id, icon, url: { src, altText } }) => (
                <div
                    key={id}
                    className={`w-7 lg:w-8 h-7 lg:h-8 relative rounded-full mx-2 lg:mx-4 
                    flex justify-center items-center text-primary bg-white`}>
                    <a href={src} title={altText} target="_blank" rel="noreferrer">
                        <i className={`icon ${icon}`}></i>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default SocialMedia;
