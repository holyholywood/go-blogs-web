import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        main: "max-width: 72rem",
      },
      colors: {
        dark: {
          DEFAULT: "#171715",
          hover: "#2a2927",
          light: "#7e7e73",
        },
        primary: {
          DEFAULT: "#0369A1",
          hover: "#0C4A6E",
          disabled: "#BAE6FD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
