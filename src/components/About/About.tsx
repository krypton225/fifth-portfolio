import SectionTitle from "components/SectionTitle/SectionTitle";

const About = () => {
    return (
        <section className="about" id="about">
            <SectionTitle text="about me" />

            {/* prettier-ignore */}
            <div className="container mt-10">
                <p className="text-lg leading-8 text-start md:text-center font-semibold">
                    Hi! I&apos;m <span className="text-primary">Khaled Hegazi</span>, a 25 year old.
                    I work as <span className="text-primary">UI/UX designer</span> in Egypt.

                    <br />

                    I obtained a Bachelor&apos;s degree in Computer Science from the&nbsp;
                    <a href="https://www.mans.edu.eg/en/faculty-of-computing-and-information-en"
                        className="text-primary underline" target="_blank" rel="noreferrer">
                        Faculty of Computers and Information
                    </a>&nbsp;at <a href="https://www.mans.edu.eg/" className="text-primary underline"
                        target="_blank" rel="noreferrer">
                        Mansoura University
                    </a> in 2020.

                    <br />
                    <br />

                    I&apos;ve had the opportunity to work on a wide range of projects, from medical lab applications to digital payment applications.

                    <br />
                    <br />
                    I&apos;m always seeking out new ways to expand my knowledge and stay up-to-date with the latest trends and technologies in&nbsp;
                    <span className="text-primary">UI/UX Design</span> field.

                    <br />
                    <br />
                </p>
            </div>
        </section>
    );
};

export default About;
