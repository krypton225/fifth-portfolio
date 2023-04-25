import IButton from "./IButton.interface";

const Button = ({ text, url, hasBg, hasBgOnHover }: IButton) => {
    return (
        /* eslint-disable */
        <a
            href={url}
            className={`btn ${hasBg ? `btn-has-bg` : `btn-no-bg`} 
            ${hasBgOnHover ? "hover:bg-primary hover:text-white" : ""}`}>
            {text}
        </a>
    );
};

export default Button;
