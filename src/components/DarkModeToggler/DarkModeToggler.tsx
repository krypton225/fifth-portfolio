import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

import IDarkModeToggler from "./IDarkModeToggler.interface";

const DarkModeToggler = ({ isDarkMode, handleToggleDarkMode }: IDarkModeToggler) => {
    return (
        <div
            className={`p-2 rounded-tr-lg rounded-br-lg fixed top-[70%] left-0 z-[9999999] 
                bg-primary text-white cursor-pointer transition-all duration-500`}
            onClick={handleToggleDarkMode}>
            {isDarkMode ? <MdOutlineLightMode size={22} /> : <MdOutlineDarkMode size={22} />}
        </div>
    );
};

export default DarkModeToggler;
