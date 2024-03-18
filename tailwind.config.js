/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'xs': '360px', // Custom breakpoint for screens with a width of 360px
            'sm': '640px',
            'md': '1100px',
            'lg': '1280px',
        },
        extend: {},
    },
    plugins: [],
}