/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    theme: {
        container: {
            padding: "1.3rem",
            center: true,
        },
        extend: {
            colors: {
                "primary": "var(--primary)",
                "primary-2": "var(--primary-2)",
                "dark-1": "var(--dark-1)",
                "dark-2": "var(--dark-2)",
                "dark-3": "var(--dark-3)",
                "gray-color": "var(--gray-color)",
                "inputs": "var(--inputs)",
                "custom-white-1": "var(--custom-white-1)",
                "custom-white-2": "var(--custom-white-2)",
            },
        },
    },
    plugins: [],
};
