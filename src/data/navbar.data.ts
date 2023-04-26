import { GenerateID } from "utils";

import INavbar from "components/Navbar/Navbar.interface";

const NavbarData: Array<INavbar> = [
    { url: "home", textLink: "home", isButton: false },
    { url: "projects", textLink: "projects", isButton: false },
    { url: "certificates", textLink: "certificates", isButton: false },
    { url: "contact-me", textLink: "contact me", isButton: false },
    { url: "contact-me", textLink: "hire me", isButton: true },
];

(() => GenerateID(NavbarData))();

export default NavbarData;
