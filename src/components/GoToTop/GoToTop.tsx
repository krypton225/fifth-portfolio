import { useState } from "react";

import { Link } from "react-scroll";

import { DarkMode } from "utils";

const GoToTop = ({ isDark }: DarkMode) => {
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
        <div className="container">
            {/* prettier-ignore */}
            <Link
                to={`home`}
                smooth={true}
                offset={-100}
                duration={900}
                delay={200}
                title="Go to top of the page"
                className={`w-[2.8rem] h-[2.8rem] rounded-md flex justify-center items-center 
                          bg-primary fixed bottom-[4%] ${isReachToPoint ? "right-[5%] visible opacity-100 rotate-0" :
                            "-right-[2%] invisible opacity-0 rotate-[15deg]"} shadow-md
                            ${isDark ? "shadow-slate-700" : "shadow-slate-600"} 
                            z-[999999] cursor-pointer transition-all duration-[1s] hover:-translate-y-1`}>
                <svg
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g
                            id="arrow-Light"
                            transform="translate(-260.000000, -6684.000000)"
                            fill="#ffffff">
                            <g id="icons" transform="translate(56, 163)">
                                <path
                                    d={`M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 
                                    224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 
                                    C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 
                                    L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 
                                    204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 
                                    205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 
                                    214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 
                                    C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378`}
                                    id="arrow_up"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </Link>
        </div>
    );
};

export default GoToTop;
