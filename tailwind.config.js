/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "regal-gray": "#cccccc",
      },
      padding: {
        "30px": "30px",
        "5px": "5px",
      },
    },
  },
  plugins: [],
};
