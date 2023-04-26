/* eslint-disable prettier/prettier */

import { useEffect } from "react";

import AOS from "aos";

import SectionTitle from "components/SectionTitle/SectionTitle";

import CertificatesData from "data/certificates.data";

const Certificates = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });

        AOS.refresh();
    }, []);

    return (
        <section className="w-full" id="certificates">
            <SectionTitle text="certificates" />

            <div className="container">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-10">
                    {
                        CertificatesData.map(({ id, name, company, date, url, delayAnimation }) => (
                            <div
                                key={id}
                                className={`w-full min-h-[14rem] py-6 relative 
                                border-zinc-200 border-l-primary border-solid border-[2px] border-l-[6px] 
                                rounded-md flex flex-col justify-between items-center
                                text-primary text-center shadow-gray-300 shadow-lg`}
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
                                        className={`w-[80%] rounded-md py-1 inline-block bg-primary text-white 
                                        transition-colors duration-700 hover:bg-primary-2`}
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
            </div>
        </section>
    );
};

export default Certificates;
