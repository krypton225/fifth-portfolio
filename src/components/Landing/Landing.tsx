import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-scroll";

import { DarkMode } from "utils";

import { PersonalPicture } from "data/images";

const Landing = ({ isDark }: DarkMode) => {
    useEffect(() => {
        AOS.init({
            once: true,
        });

        AOS.refresh();
    }, []);

    return (
        <header
            id="home"
            className={`w-screen landing transition-all duration-500 
            ${isDark ? "dark" : ""}`}>
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
                            {/* <Button text="hire me" url="#" hasBg /> */}
                            {/* <Button text="projects" url="projects" hasBg={false} /> */}
                            <Link
                                to="contact-me"
                                smooth={true}
                                offset={-70}
                                duration={900}
                                delay={200}
                                className="btn btn-has-bg"
                                data-aos="fade-right"
                                data-aos-offset="50"
                                data-aos-easing="ease-in-out"
                                data-aos-duration="700"
                                data-aos-delay="500">
                                hire me
                            </Link>

                            <Link
                                to="projects"
                                className="btn btn-has-bg"
                                smooth={true}
                                offset={-70}
                                duration={900}
                                delay={200}
                                data-aos="fade-right"
                                data-aos-offset="50"
                                data-aos-easing="ease-in-out"
                                data-aos-duration="700"
                                data-aos-delay="200">
                                projects
                            </Link>
                        </div>
                    </div>

                    <div
                        className={`w-[14rem] sm:w-[16rem] relative lg:w-[22rem] h-[14rem] sm:h-[16rem] lg:h-[22rem]`}
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <div
                            className={`w-full h-full absolute inline-block bg-primary rounded-[50%] z-[-1]`}></div>
                        <img
                            src={PersonalPicture}
                            alt="Personal Picture Landing Page"
                            className="w-full h-full object-cover"
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Landing;
