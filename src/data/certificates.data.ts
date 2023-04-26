import GenerateId from "utils/generate-id";
import Delay from "utils/generate-delay";

import ICertificate from "../components/Certificates/ICertificate.interface";

import { CourseraLogo, IPICLogo, ITILogo } from "data/images";

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
    {
        name: "UX Design Fundamentals",
        company: {
            logo: ITILogo,
            link: "https://maharatech.gov.eg/",
            altText: "MaharaTech - ITI",
        },
        date: "19/01/2022",
        url: "https://drive.google.com/file/d/17O_-Zgm3qGjrZYWEcT5d-qA_pIfXG8z5/view",
    },
    {
        name: "UX/UX - ITI training",
        company: {
            logo: ITILogo,
            link: "https://maharatech.gov.eg/",
            altText: "MaharaTech - ITI",
        },
        date: "15/07/2019",
        url: "https://drive.google.com/file/d/1ucxPD-mtUcL6XvevaokxH8ufNlhkEFX0/view",
    },
    {
        name: "IPIC training",
        company: {
            logo: IPICLogo,
            link: "https://www.ipic-eg.com/",
            altText: "IPIC",
        },
        date: "20/08/2020",
        url: "https://drive.google.com/file/d/1G9HSG0GIg3s1NvDH8h56__bhZXVa7Ej6/view",
    },
];

(() => {
    GenerateId(CertificatesData);
    Delay.generate(CertificatesData, 100);
})();

export default CertificatesData;
