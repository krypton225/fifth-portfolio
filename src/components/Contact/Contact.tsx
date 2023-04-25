import Button from "components/Button/Button";
import SectionTitle from "components/SectionTitle/SectionTitle";

const Contact = () => {
    return (
        <section id="contact-me">
            <SectionTitle text="contact me" />

            <form className="container grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
                <div className="w-full">
                    <textarea
                        name="msg"
                        id="msg"
                        className={`w-full min-h-[12rem] p-5 outline-none border-none rounded-md
                        caret-dark-2 text-dark-2 bg-inputs text-md md:text-lg placeholder:capitalize resize-none`}
                        placeholder="message"></textarea>
                </div>

                <div className="w-full min-h-[12rem] flex flex-col justify-between items-center">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name"
                        className={`input-contact text-md`}
                    />

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                        className={`input-contact text-md`}
                    />

                    <div className="w-full text-center">
                        <Button hasBg text="submit" url={``} isFullWidth />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Contact;
