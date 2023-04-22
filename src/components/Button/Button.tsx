import IButton from "./IButton.interface";

const Button = ({ text, url, hasBg }: IButton) => {
    return (
        /* eslint-disable */
        <a
            href={url}
            className={`btn ${hasBg ? `btn-has-bg` : `btn-no-bg`}`}>
            {text}
        </a>
    );
};

export default Button;
