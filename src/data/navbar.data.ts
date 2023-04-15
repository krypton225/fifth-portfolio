import GenerateId from "utils/generate-id";

import INavbar from "components/Navbar/Navbar.interface";

const NavbarData: Array<INavbar> = [
    { url: "#", textLink: "home", isButton: false },
    { url: "#", textLink: "projects", isButton: false },
    { url: "#", textLink: "blog", isButton: false },
    { url: "#", textLink: "certificates", isButton: false },
    { url: "#", textLink: "contact me", isButton: false },
    { url: "#", textLink: "hire me", isButton: true },
];

(() => GenerateId(NavbarData))();

export default NavbarData;
