import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }

  },
  plugins: [
    nextui({
    defaultTheme: "darker",
    themes: {
      "darker": {
        extend: "dark",
        colors: {
          // background: "#0A0A0A",
          background: "#1f1f1f",
          foreground: "#EDEDED",
          primary: "#EDEDED",
          secondary: "#141414",
        }
      },
      "lighter": {
        extend: "light",
        colors: {
          background: "#FAF9F6",
          foreground: "#1f1f1f",
          primary: "#1f1f1f",
          secondary: "#0377fc",
        }
      }
    },
  })],
};
export default config;
