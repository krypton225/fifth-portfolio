import { ISetID } from "utils/interfaces/index";

interface INavbar extends ISetID {
    id?: number;
    url: string;
    textLink: string;
    isButton: boolean;
}

export default INavbar;
