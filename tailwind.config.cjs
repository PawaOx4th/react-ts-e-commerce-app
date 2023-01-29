/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          primary: "#41CBBF",
          "primary-hover": "#31bbaf",
          secondary: "#164E63",
          gray: "#BEC9DF",
          white: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
}
