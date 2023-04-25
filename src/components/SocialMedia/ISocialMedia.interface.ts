import ISetID from "utils/interfaces/ISetID.interface";

interface ISocialMedia extends ISetID {
    icon: string;
    url: {
        src: string,
        altText: string,
    };
}

export default ISocialMedia;
