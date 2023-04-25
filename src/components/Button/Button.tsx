import IButton from "./IButton.interface";

const Button = ({ text, url, hasBg, hasBgOnHover, isFullWidth, center }: IButton) => {
    return (
        /* eslint-disable */
        <a
            href={url}
            className={`btn ${hasBg ? `btn-has-bg` : `btn-no-bg`} 
            ${hasBgOnHover ? "hover:bg-primary hover:text-white" : ""} 
            ${isFullWidth ? "w-full inline-block" : ""}
            ${center ? "flex justify-center items-center" : ""}`}>
            {text}
        </a>
    );
};

export default Button;
