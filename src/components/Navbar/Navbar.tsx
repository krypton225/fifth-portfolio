import NavbarData from "data/navbar.data";

const Navbar = () => {
    return (
        <nav className="min-h-[2.1rem] py-6">
            <div className="container">
                <div className="flex justify-between items-center">
                    <h1 className="py-3 text-3xl tracking-wider relative">
                        <a href="#">
                            <span className="text-primary font-[Courgette]">K</span>haled
                        </a>
                    </h1>

                    <ul className="flex justify-center items-center">
                        {NavbarData.map(({ id, url, textLink, isButton }) => (
                            <li key={id} className="mx-5">
                                {/* prettier-ignore */}
                                <a href={url}

                                    className={`inline-block relative py-3 capitalize text-lg font-medium transition-all 
                                    duration-500 hover:text-primary 
                                    
                                    before:content-[''] before:w-0 before:h-[0.2rem] before:rounded-lg 
                                    before:absolute before:bottom-2 before:left-0 before:bg-primary
                                    before:transition-all before:duration-300 hover:before:w-full
                                    
                                    ${isButton ? `px-8 py-2 rounded-md bg-primary text-white 
                                    font-semibold before:content-none hover:text-white` : ``}`}>
                                    {textLink}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
