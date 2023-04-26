import ISectionTitle from "./ISectionTitle.interface";

const SectionTitle = ({ text }: ISectionTitle) => {
    return (
        <h2
            className={`w-fit mx-auto mb-8 md:mb-12 relative font-[500] text-3xl lg:text-4xl capitalize text-center
            before:content-[''] before:w-3 before:h-3 before:rounded-full 
            before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[22%]
            before:bg-primary
            
            after:content-[''] after:w-3 after:h-3 after:rounded-full 
            after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[22%]
            after:bg-primary`}>
            {text}
        </h2>
    );
};

export default SectionTitle;
