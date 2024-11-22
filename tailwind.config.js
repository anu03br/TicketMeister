/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'], // Add Roboto font
                funnel: ['"Funnel Display"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

