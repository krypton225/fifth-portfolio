/* eslint-disable prettier/prettier */

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
            className={`max-[450px]:w-[65%] min-[451px]:w-[45%] max-[639px]:w-[45%] sm:w-[45%] md:w-[18rem] h-12 
            ${isReachToPoint ? "bottom-[4%]" : "-bottom-[15%]"} 
            rounded-full fixed left-[35%] md:left-1/2 z-[999999999] -translate-x-[45%] md:-translate-x-1/2 
            flex justify-between items-center bg-primary transition-all duration-[1s]`}>
            {
                SocialMediaData.map(({ id, icon, url: { src, altText } }) => (
                    <div key={id} className={`w-7 lg:w-8 h-7 lg:h-8 relative rounded-full mx-2 lg:mx-4 
                    flex justify-center items-center text-primary bg-white`}>
                        <a
                            href={src}
                            data-current-title={altText}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={altText}
                            className={`w-full h-full relative flex justify-center items-center
                        
                        md:before:content-[attr(data-current-title)] md:before:w-fit md:before:py-2 md:before:px-3 
                        md:before:rounded-md md:before:absolute md:before:top-[-170%] md:before:-left-[50%] 
                        md:before:capitalize md:before:text-sm md:before:bg-primary md:before:text-white
                        md:before:invisible md:before:opacity-0 before:transition-all before:duration-300
                        
                        hover:before:visible hover:before:opacity-100 hover:before:top-[-190%]`}>
                            <i className={`icon ${icon}`}></i>
                        </a>
                    </div>
                ))
            }
        </div>
    );
};

export default SocialMedia;
