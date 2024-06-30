import { useEffect } from "react";
import AOS from "aos";

import { DarkMode } from "utils";

import SectionTitle from "components/SectionTitle/SectionTitle";

const About = ({ isDark }: DarkMode) => {
    const YEAR_OF_BIRTH = 1998;
    const CURRENT_YEAR = new Date().getFullYear();
    const CURRENT_AGE = CURRENT_YEAR - YEAR_OF_BIRTH;

    console.log(CURRENT_YEAR);

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });

        AOS.refresh();
    }, []);

    return (
        <section
            className={`about transition-all duration-500 
            ${isDark ? "dark" : ""}`}
            id="about">
            <SectionTitle text="about me" />

            {/* prettier-ignore */}
            <div
                className="container mt-10"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <p className="w-full md:max-w-7xl mx-auto text-lg xl:text-xl leading-8 text-start md:text-center font-semibold">
                    Hi! I&apos;m <span className="text-primary">Khaled Hegazi</span>, a {CURRENT_AGE} year old.
                    I work as <span className="text-primary">UI/UX designer</span> in Egypt.

                    <br />

                    I obtained a Bachelor&apos;s degree in Computer Science from the&nbsp;
                    <a href="https://www.mans.edu.eg/en/faculty-of-computing-and-information-en"
                        className="text-primary underline" target="_blank" rel="noreferrer" aria-label="Faculty Of Computing And Information">
                        Faculty of Computers and Information
                    </a>&nbsp;at <a href="https://www.mans.edu.eg/" className="text-primary underline"
                        target="_blank" rel="noreferrer" aria-label="Mansoura University">
                        Mansoura University
                    </a> in 2020.

                    <br />
                    <br />

                    I&apos;ve had the opportunity to work on a wide range of projects, from medical lab applications to digital payment applications.

                    <br />
                    <br />
                    I&apos;m always seeking out new ways to expand my knowledge and stay up-to-date with the latest trends and technologies in&nbsp;
                    <span className="text-primary">UI/UX Design</span> field.
                </p>
            </div>
        </section>
    );
};

export default About;
