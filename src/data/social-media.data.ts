import { GenerateID } from "utils";

import ISocialMedia from "components/SocialMedia/ISocialMedia.interface";

const SocialMediaData: Array<ISocialMedia> = [
    {
        icon: "icon-mail",
        url: {
            src: "mailto:khaledhegazi002@gmail.com",
            altText: "gmail",
        },
    },
    {
        icon: "icon-linkedin",
        url: {
            src: "https://www.linkedin.com/in/khaled-hegazi-8b0605228/",
            altText: "linkedIn",
        },
    },
    {
        icon: "icon-behance",
        url: {
            src: "https://www.behance.net/khaledhegazi",
            altText: "behance",
        },
    },
    {
        icon: "icon-facebook",
        url: {
            src: "https://www.facebook.com/khaled.hegazi.7",
            altText: "facebook",
        },
    },
];

(() => GenerateID(SocialMediaData))();

export default SocialMediaData;
