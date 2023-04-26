import { ISetID, IDelayAnimation } from "utils";
interface IProjects extends ISetID, IDelayAnimation {
    name: string;
    image: string;
    description?: string;
    url: {
        src: string,
        altText: string,
    };
}

export default IProjects;
