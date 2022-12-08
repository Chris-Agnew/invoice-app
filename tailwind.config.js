/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "medium-slate-blue": "#7C5DFA",
        "tropical-indigo": "#9277FF",
        "dark-byzantine-blue": "#1E2139",
        "lighter-dark-byzantine-blue": "#252945",
        "lavender-mist": "#DFE3FA",
        "cool-gray": "#888EB0",
        "wild-blue-yonder": "#7E88C3",
        eigengrau: "#0C0E16",
        "grapefruit-red": "#EC5757",
        "salmon-pink": "#FF9797",
        "light-background": "#F8F8FB",
        "light-eigengrau": "#141625",
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
