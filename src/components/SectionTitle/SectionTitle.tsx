import ISectionTitle from "./ISectionTitle.interface";

const SectionTitle = ({ text }: ISectionTitle) => {
    return (
        <h2 className={`w-full relative font-[500] text-3xl lg:text-4xl capitalize text-center`}>
            {text}
        </h2>
    );
};

export default SectionTitle;
