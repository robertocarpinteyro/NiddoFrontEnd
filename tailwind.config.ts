import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {nextui} = require("@nextui-org/react");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        niddoEsmeralda: "#00ccd3",
        trueGray: colors.neutral,
      },
      maxWidth: {
        'custom': '5000px', // Añade un nuevo valor de max-width
      },
    },
    fontFamily: {
      sans: ["Museo","Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [nextui()],
};

export default config;
