import { GenerateID } from "utils";

import IProjects from "components/Projects/IProjects.interface";

import {
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6,
    Project7,
    Project8,
    Project9,
    Project10,
    Project11,
    Project12,
    Project13,
    Project14,
    Project15,
} from "data/images";
import Delay from "utils/generate-delay";

const ProjectsData: Array<IProjects> = [
    {
        name: `e-learning application`,
        image: Project7,
        description: `Learning using the internet by following the lectures and courses.`,
        url: {
            src: `https://www.behance.net/gallery/161081025/E-Learning-Application-Case-Study`,
            altText: `e-learning application`,
        },
    },
    {
        name: `laboratory application`,
        image: Project5,
        description: `Providing a service to the lab doctor who needs it.`,
        url: {
            src: `https://www.behance.net/gallery/161344163/Laboratory-Application-Case-Study`,
            altText: `laboratory application`,
        },
    },
    {
        name: `pharmacy application`,
        image: Project11,
        description: `Providing a service that the user needs by saving time and effort for the user.`,
        url: {
            src: `https://www.behance.net/gallery/136199935/Pharmacy-app-%28Case-Study%29`,
            altText: `pharmacy application`,
        },
    },
    {
        name: `palm labs`,
        image: Project1,
        description: `Create a process of checkout using the design system.`,
        url: {
            src: `https://www.behance.net/gallery/165255001/Checkout-Website`,
            altText: `palm labs`,
        },
    },
    {
        name: `fatmote`,
        image: Project2,
        description: `Restaurant app design including splash, registration and home pages, use of color and high quality images of delicious food that sets the tone and creates visual appeal.`,
        url: {
            src: "https://www.behance.net/gallery/132975207/Food-App",
            altText: `fatmote`,
        },
    },
    {
        name: `foody application`,
        image: Project8,
        description: `Helping japanese people to order healthy food in a short time without having to go to the restaurant.`,
        url: {
            src: `https://www.behance.net/gallery/159222137/Foody-app`,
            altText: `foody application`,
        },
    },
    {
        name: `UI design challenge 1`,
        image: Project4,
        description: `A challenge focuses on creating a minimalist and user-friendly UI for a digital application or website.`,
        url: {
            src: `https://www.behance.net/gallery/161561283/UI-Challenge-Part-01`,
            altText: `UI Challenge Part 1`,
        },
    },
    {
        name: `UI design challenge 2`,
        image: Project3,
        description: `A challenge focuses on creating a minimalist and user-friendly UI for a digital application or website.`,
        url: {
            src: `https://www.behance.net/gallery/162453919/UI-Challenge-Part-2`,
            altText: `UI Challenge Part 2`,
        },
    },
    {
        name: `hotel website`,
        image: Project6,
        description: `Develop a digital product for the wellness of the travel industry, that makes a user's relationships with booking, ordering and traveling better`,
        url: {
            src: `https://www.behance.net/gallery/159361625/Hotel-Website`,
            altText: `hotel website`,
        },
    },
    {
        name: `e-commerce application`,
        image: Project9,
        description: `A simple design for e-commerce application to buy jewelries.`,
        url: {
            src: `https://www.behance.net/gallery/138246605/E-commerce-app`,
            altText: `e-commerce application`,
        },
    },
    {
        name: `food website`,
        image: Project10,
        description: `Ab awesome landing page for the food website.`,
        url: {
            src: `https://www.behance.net/gallery/137046869/Food-%28Website%29`,
            altText: `food website`,
        },
    },
    {
        name: `stems application`,
        image: Project12,
        description: `A digital platform that allows users to browse stems and flowers through a user-friendly interface.`,
        url: {
            src: `https://www.behance.net/gallery/134855731/Stems-app`,
            altText: `stems application`,
        },
    },
    {
        name: `seasonal fruits`,
        image: Project13,
        description: `Designing pages that explain the process of fruit details, the method of purchasing them.`,
        url: {
            src: `https://www.behance.net/gallery/134674153/Seasonal-Fruits`,
            altText: `seasonal fruits`,
        },
    },
    {
        name: `food expert`,
        image: Project14,
        description: `A mobile based platform that specifically focuses on providing information and services related to Japanese cuisine.`,
        url: {
            src: `https://www.behance.net/gallery/134050817/Food-app`,
            altText: `food expert`,
        },
    },
    {
        name: `furniture application`,
        image: Project15,
        description: `A mobile based platform that is specifically designed to provide information and services related to furniture, interior design, and home decor`,
        url: {
            src: `https://www.behance.net/gallery/133027405/Furniture-App`,
            altText: `furniture application`,
        },
    },
];

(() => {
    GenerateID(ProjectsData);
    Delay.generate(ProjectsData, 150);
})();

export default ProjectsData;
