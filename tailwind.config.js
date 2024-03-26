/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        scrollDown: "0px 10px 35px -11px rgba(0,0,0,0.4)",
      },
      dropShadow: {
        text: "0px 16px 21px #00000029",
      },
      colors: {
        main: "#789376",
        greenSecondary: "#0D9206",
      },
    },
  },
  plugins: [],
};
