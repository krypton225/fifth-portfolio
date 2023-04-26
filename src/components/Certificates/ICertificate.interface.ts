import { ISetID, IDelayAnimation } from "utils/interfaces/index";

interface ICertificate extends ISetID, IDelayAnimation {
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
