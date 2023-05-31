/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/.{html,js,css,jsx}',
    './app/**/*.{html,js,jsx}',
    './app/components/**/*.{html,js,jsx}',
    './app/sections/**.{html,js,jsx}',
    './app/styles/**/*.{js,jsx,css}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto",
      },
      gridTemplateRows: {
        sidebar: "300px auto",
      },
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
},
plugins: [require("daisyui")],
};