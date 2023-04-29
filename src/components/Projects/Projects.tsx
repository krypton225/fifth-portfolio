/* eslint-disable prettier/prettier */

import { useState, useEffect } from "react";

import AOS from "aos";

import { DarkMode } from "utils";

import Button from "components/Button/Button";

import SectionTitle from "components/SectionTitle/SectionTitle";

import ProjectsData from "data/projects.data";

const Projects = ({ isDark }: DarkMode) => {
    const [numberOfShowedProjects] = useState(6);

    useEffect(() => {
        AOS.init({
            once: true,
        });

        AOS.refresh();
    }, []);

    return (
        <section className={`w-full ${isDark ? "dark" : ""}`} id="projects">
            <SectionTitle text="projects" />
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-10">
                {
                    ProjectsData.slice(0, numberOfShowedProjects)
                        .map(({ id, name, image, url, delayAnimation }) => (
                            <div
                                key={id}
                                className="min-h-[17rem] relative rounded-lg group"
                                data-aos="fade-up"
                                data-aos-offset="100"
                                data-aos-easing="ease-in-out"
                                data-aos-duration="800"
                                data-aos-delay={`${delayAnimation}`}>
                                <img
                                    src={image}
                                    alt={url.altText}
                                    className="w-full h-full rounded-lg object-cover"
                                />

                                <div
                                    className={`min-w-full min-h-full rounded-lg py-3 px-2 absolute top-0 left-0 invisible opacity-0 
                                    flex flex-col justify-center items-center overlay-project transition-all duration-700 
                                    group-hover:visible group-hover:opacity-100`}>
                                    <p className="mb-7 capitalize text-white text-md">{name}</p>

                                    <Button text="view" hasBg hasBgOnHover url={url.src} />
                                </div>
                            </div>
                        ))
                }
            </div>

            <div className="w-full mt-14 flex justify-center items-center">
                <Button text="show more" hasBg url={``} />
            </div>
        </section>
    );
};

export default Projects;
