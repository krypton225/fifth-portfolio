import { ISetID, IDelayAnimation } from "utils/interfaces/index";
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
