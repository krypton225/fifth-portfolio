import { ISetID } from "utils/interfaces/index";

interface ISocialMedia extends ISetID {
    icon: string;
    url: {
        src: string,
        altText: string,
    };
}

export default ISocialMedia;
