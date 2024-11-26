/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

const config = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'], // Add Roboto font
                funnel: ['"Funnel Display"', 'sans-serif'],
            },
            colors: {
                // Define custom color names
                primary: colors.blue['500'], // Map primary to blue-500
                secondary: colors.yellow['500'], // Map secondary to yellow-500
                neutral: colors.gray['500'], // Map neutral to all gray shades
            },
        },
    },
    plugins: [],
};

export default config;
