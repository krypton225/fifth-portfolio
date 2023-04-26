import { ISetID } from "utils";

interface INavbar extends ISetID {
    id?: number;
    url: string;
    textLink: string;
    isButton: boolean;
}

export default INavbar;
