import { useEffect, useState } from "react";

import NavbarData from "data/navbar.data";
import Toggler from "./Toggler";

const Navbar = () => {
    const [toggler, setToggler] = useState<boolean>(false);

    const [isScroll, setIsScroll] = useState<boolean>(false);

    const onToggler = (): void => setToggler(!toggler);

    const handleScrolling = () => {
        if (window.scrollY > 180) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrolling);

        return (): void => {
            window.removeEventListener("scroll", handleScrolling);
        };
    }, [isScroll]);

    return (
        <nav
            className={`min-h-[2.1rem] w-full fixed top-0 left-0 transition-all duration-500
            ${isScroll ? "py-0 shadow-md" : "py-3"}`}>
            <div className="container flex justify-between items-center">
                <h1 className="py-3 text-xl sm:text-2xl md:text-3xl tracking-wider relative">
                    <a href="#">
                        <span className="text-primary font-[Courgette]">K</span>haled
                    </a>
                </h1>
                {/* prettier-ignore */}
                <ul
                    className={`w-[90%] md:w-[70%] py-4 border-[0.001rem] rounded-md border-[#dddddd] border-solid 
                        absolute top-20 z-[9999] text-center bg-white shadow-lg transition-all duration-[1s]

                        ${toggler ? "left-[5%] md:left-[15%] visible opacity-100" : "-left-[30%] invisible opacity-0"}

                        lg:static lg:w-auto lg:border-0 lg:flex lg:justify-center lg:items-center lg:bg-transparent
                        lg:shadow-none lg:visible lg:opacity-100`}>

                    {NavbarData.map(({ id, url, textLink, isButton }) => (
                        <li key={id} className="w-full block mx-auto md:mb-1 lg:mb-0 lg:inline-block">
                            {/* prettier-ignore */}
                            <a href={url}

                                className={`inline-block lg:mx-6 py-3 relative whitespace-nowrap capitalize text-md font-semibold
                                    sm:text-base lg:text-lg lg:font-normal transition-all duration-500 hover:text-primary 
                                    
                                    before:content-[''] before:w-0 before:h-[0.2rem] before:rounded-lg 
                                    before:absolute before:bottom-2 before:left-0 before:bg-primary
                                    before:transition-all before:duration-300 hover:before:w-full
                                    
                                    ${isButton ? `mt-3 lg:mx-0 lg:ml-5 lg:mt-0 px-8 py-[0.3rem] lg:py-2 rounded-md 
                                    bg-primary text-white font-semibold before:content-none transition-all duration-500
                                    hover:text-white hover:bg-blue-800` : ``}`}>
                                {textLink}
                            </a>
                        </li>
                    ))}
                </ul>

                <Toggler togglerState={toggler} onClickTogglerState={onToggler} />
            </div>
        </nav>
    );
};

export default Navbar;
