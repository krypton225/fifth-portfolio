import { useEffect, useState } from "react";

import { Link } from "react-scroll";

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

    const closeTogglerAfterLinkClicked = (): void => {
        setToggler(!toggler);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrolling);

        return (): void => {
            window.removeEventListener("scroll", handleScrolling);
        };
    }, [isScroll]);

    return (
        <nav
            className={`min-h-[2.1rem] w-full fixed top-0 left-0 z-[999999999] transition-all duration-500 backdrop-blur-xl
            ${isScroll ? "py-[0.15rem] shadow-md" : "py-3"}`}>
            <div className="container flex justify-between items-center">
                <h1 className="py-3 text-xl sm:text-2xl md:text-3xl tracking-wider relative">
                    <a href="#">
                        <span className="text-primary font-[Courgette]">K</span>haled
                    </a>
                </h1>
                {/* prettier-ignore */}
                <ul
                    className={`w-[90%] md:w-[70%] py-4 border-[0.001rem] rounded-md border-[#dddddd] border-solid 
                        absolute top-20 z-[9999999] text-center bg-white shadow-lg transition-all duration-[1s]

                        ${toggler ? "left-[5%] md:left-[15%] visible opacity-100" : "-left-[30%] invisible opacity-0"}

                        lg:static lg:w-auto lg:border-0 lg:flex lg:justify-center lg:items-center lg:bg-transparent
                        lg:shadow-none lg:visible lg:opacity-100`}>

                    {NavbarData.map(({ id, url, textLink, isButton }) => (
                        <li key={id} className="w-full block mx-auto md:mb-1 lg:mb-0 lg:inline-block">
                            {/* href={`#${url}`} */}
                            {/* prettier-ignore */}
                            <Link to={`${url}`} smooth={true} offset={-100} duration={900} delay={200}
                                onClick={closeTogglerAfterLinkClicked} activeClass="nav-link-active"
                                className={`inline-block lg:mx-6 py-2 relative whitespace-nowrap capitalize text-md font-semibold
                                    sm:text-base lg:text-lg lg:font-normal overflow-hidden cursor-pointer
                                    transition-all duration-500 hover:text-primary 

                                    after:content-[''] after:w-0 after:h-[0.2rem] after:rounded-lg 
                                    after:absolute after:bottom-1 after:left-0 after:bg-primary
                                    after:transition-all after:duration-300 hover:after:w-full

                                    ${isButton ? `px-9 capitalize tracking-wide btn-has-bg after:content-none` : ``}`}>
                                {textLink}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Toggler togglerState={toggler} onClickTogglerState={onToggler} />
            </div>
        </nav>
    );
};

export default Navbar;
