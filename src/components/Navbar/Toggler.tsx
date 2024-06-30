import IToggler from "./IToggler.interface";

const Toggler = ({ togglerState, onClickTogglerState }: IToggler) => {
    return (
        <div
            className={`min-w-[2rem] min-h-[1.1rem] lg:hidden 
            flex flex-col justify-between items-center cursor-pointer transition-all duration-[1s]`}
            onClick={onClickTogglerState}>
            <span
                className={`toggle-line duration-[0.7s] 
                ${togglerState ? "-rotate-45 translate-y-2" : ""}`}></span>
            <span
                className={`toggle-line duration-[0.3s] 
            ${togglerState ? "translate-x-5 opacity-0" : ""}`}></span>
            <span
                className={`toggle-line duration-[1.1s] 
            ${togglerState ? "rotate-45 -translate-y-2" : ""}`}></span>
        </div>
    );
};

export default Toggler;
