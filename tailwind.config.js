/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "1rem",
      base: "2rem",
      lg: "2.5rem",
      xl: "1.25rem",
      xxl: "2.5rem",
      xlg: "3rem",
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    screens: {
      tab: "640px",
      // => @media (min-width: 640px)

      lap: "1024px",
      // => @media (min-width: 1024px)

      TV: "1900px",
      // => @media (min-width: 1280px)
    },
    extend: {
      colors: {
        primary: "#279DE2",
        secondary: "#EAF7FF",
        tertiary: "#A1DBFF",
      },
    },
  },
  plugins: [],
};
