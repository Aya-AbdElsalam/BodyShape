/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "2px 4px 6px black",
      },
      backgroundImage: {
        "bg-linear":
          "linear-gradient(90deg, #F66844 0%, #FF921B 100%, rgba(255, 255, 255, 0) 100%);",
        "bg-hover": "linear-gradient(45deg, black, transparent)",
        "bg-footer":
          "linear-gradient(180deg, rgba(57, 57, 57, 0.25) 0%, rgba(217, 217, 217, 0) 100%, rgba(57, 57, 57, 0.25) 100%);",
      },
      colors: {
        "primary-color": "#F66844",
      },
    },
  },
  plugins: [],
};
