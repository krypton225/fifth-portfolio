/* eslint-disable prettier/prettier */

import { useState, useEffect } from "react";

import AOS from "aos";

import { DarkMode } from "utils";

import SectionTitle from "components/SectionTitle/SectionTitle";
import Button from "components/Button/Button";

import CertificatesData from "data/certificates.data";

const Certificates = ({ isDark }: DarkMode) => {
    const [numberOfShowedCertificates] = useState(3);

    useEffect(() => {
        AOS.init({
            once: true,
        });

        AOS.refresh();
    }, []);

    return (
        <section className={`w-full ${isDark ? "dark" : ""} transition-all duration-500`} id="certificates">
            <SectionTitle text="certificates" />

            <div className="container">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-10">
                    {
                        CertificatesData.slice(0, numberOfShowedCertificates)
                            .map(({ id, name, company, date, url, delayAnimation }) => (
                                <div
                                    key={id}
                                    className={`w-full min-h-[14rem] py-6 relative 
                                    border-l-primary border-solid border-[2px] border-l-[6px] 
                                    rounded-md flex flex-col justify-between items-center text-center shadow-lg 
                                    certificate-styles`}
                                    data-aos="fade-up"
                                    data-aos-offset="100"
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="1000"
                                    data-aos-delay={`${delayAnimation}`}>
                                    <p className="px-4 text-base font-semibold capitalize leading-5">
                                        {name}
                                    </p>

                                    <div className="w-24 mt-4 mb-2 relative">
                                        <a href={company.link} target="_blank" rel="noreferrer" aria-label={company.altText}>
                                            <img
                                                src={company.logo}
                                                alt={company.altText}
                                                className="w-full object-cover"
                                                draggable="false"
                                                title={company.altText}
                                            />
                                        </a>
                                    </div>

                                    <p className="mb-3">{`${date}`}</p>

                                    <p className="w-full">
                                        <a
                                            className={`w-[80%] btn btn-has-bg inline-block bg-primary text-white 
                                        transition-colors duration-700`}
                                            href={`${url}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            title={`Show ${name} certificate`}>
                                            Show certificate
                                        </a>
                                    </p>
                                </div>
                            ))
                    }
                </div>

                <div className="w-full mt-14 flex justify-center items-center">
                    <Button text="show more" hasBg url={``} />
                </div>
            </div>
        </section>
    );
};

export default Certificates;
