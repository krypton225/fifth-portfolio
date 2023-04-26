import { ISetID } from "utils";

interface ISocialMedia extends ISetID {
    icon: string;
    url: {
        src: string,
        altText: string,
    };
}

export default ISocialMedia;
