import Button from "components/Button/Button";

import { PersonalPicture } from "data/images";

const Landing = () => {
    return (
        <section className="w-screen landing" id="landing">
            <div className="container w-full grid place-items-start md:place-items-center">
                <div className="w-full flex justify-center lg:justify-between items-center flex-wrap gap-5 sm:gap-10">
                    <div className="text-center sm:text-start chn-text-mq">
                        <p className="text-lg font-light">Hi I&apos;m,</p>
                        <p className="my-2 capitalize text-4xl md:text-6xl font-semibold">
                            khaled hegazi
                        </p>
                        <p className="capitalize text-lg md:text-3xl text-gray-color">
                            UI/UX designer
                        </p>
                        <div className="w-full md:w-[75%] relative mt-4 flex justify-center md:justify-between items-center flex-wrap gap-5">
                            <Button text="hire me" url="#" hasBg />
                            <Button text="projects" url="#" hasBg={false} />
                        </div>
                    </div>
                    <div
                        className={`w-[14rem] sm:w-[16rem] lg:w-[22rem] h-[14rem] sm:h-[16rem] lg:h-[22rem]`}>
                        <img
                            src={PersonalPicture}
                            alt="Personal Picture Landing Page"
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
