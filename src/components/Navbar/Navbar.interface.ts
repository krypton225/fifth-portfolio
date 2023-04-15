import ISetID from "utils/interfaces/ISetID.interface";

interface INavbar extends ISetID {
    id?: number;
    url: string;
    textLink: string;
    isButton: boolean;
}

export default INavbar;
