import GenerateId from "utils/generate-id";

import INavbar from "components/Navbar/Navbar.interface";

const NavbarData: Array<INavbar> = [
    { url: "home", textLink: "home", isButton: false },
    { url: "projects", textLink: "projects", isButton: false },
    { url: "blog", textLink: "blog", isButton: false },
    { url: "certificates", textLink: "certificates", isButton: false },
    { url: "contact-me", textLink: "contact me", isButton: false },
    { url: "hire-me", textLink: "hire me", isButton: true },
];

(() => GenerateId(NavbarData))();

export default NavbarData;
