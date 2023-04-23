import GenerateId from "utils/generate-id";

import ICertificate from "./ICertificate.interface";

import { CourseraLogo } from "data/images";

const CertificatesData: Array<ICertificate> = [
    {
        name: "Google UX Design Specialization",
        company: {
            logo: CourseraLogo,
            link: "https://www.coursera.org/",
            altText: "Coursera",
        },
        date: "10/12/2022",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/9Q34BYADEV53",
    },
    {
        name: "Build Wireframes and Low-Fidelity Prototypes",
        company: {
            logo: CourseraLogo,
            link: "https://www.coursera.org/",
            altText: "Coursera",
        },
        date: "03/12/2022",
        url: "https://www.coursera.org/account/accomplishments/certificate/R7GARWU2FQQ9",
    },
    {
        name: "Design a User Experience for Social Good & Prepare for Jobs",
        company: {
            logo: CourseraLogo,
            link: "https://www.coursera.org/",
            altText: "Coursera",
        },
        date: "10/12/2022",
        url: "https://www.coursera.org/account/accomplishments/certificate/FCFHQF8MAAYU",
    },
    {
        name: "Conduct UX Research and Test Early Concepts",
        company: {
            logo: CourseraLogo,
            link: "https://www.coursera.org/",
            altText: "Coursera",
        },
        date: "05/12/2022",
        url: "https://www.coursera.org/account/accomplishments/certificate/FVR7ASX6BRSQ",
    },
    {
        name: "Create High-Fidelity Designs and Prototypes in Figma",
        company: {
            logo: CourseraLogo,
            link: "https://www.coursera.org/",
            altText: "Coursera",
        },
        date: "06/12/2022",
        url: "https://www.coursera.org/account/accomplishments/certificate/M4K3HXBFQWXQ",
    },
    {
        name: "Foundations of User Experience (UX) Design",
        company: {
            logo: CourseraLogo,
            link: "https://www.coursera.org/",
            altText: "Coursera",
        },
        date: "01/11/2022",
        url: "https://www.coursera.org/account/accomplishments/certificate/MGDTW86E9C5Z",
    },
    {
        name: "Responsive Web Design in Adobe XD",
        company: {
            logo: CourseraLogo,
            link: "https://www.coursera.org/",
            altText: "Coursera",
        },
        date: "08/12/2022",
        url: "https://www.coursera.org/account/accomplishments/certificate/XKEWGPEPNGEC",
    },
    {
        name: "Start the UX Design Process: Empathize, Define, and Ideate",
        company: {
            logo: CourseraLogo,
            link: "https://www.coursera.org/",
            altText: "Coursera",
        },
        date: "01/11/2022",
        url: "https://www.coursera.org/account/accomplishments/certificate/VGM62JXLUUDV",
    },
];

(() => GenerateId(CertificatesData))();

export default CertificatesData;
