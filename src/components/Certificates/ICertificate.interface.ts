import ISetID from "utils/interfaces/ISetID.interface";

interface ICertificate extends ISetID {
    name: string;
    company: {
        logo: string,
        link: string,
        altText: string,
    };
    date: string;
    url: string;
}

export default ICertificate;
