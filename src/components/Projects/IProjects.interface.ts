import ISetID from "utils/interfaces/ISetID.interface";

interface IProjects extends ISetID {
    name: string;
    image: string;
    description?: string;
    url: {
        src: string,
        altText: string,
    };
    delayAnimation?: string | number;
}

export default IProjects;
