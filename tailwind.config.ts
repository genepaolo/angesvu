import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      periwinkle: "#BBBBFF",
      black: "#000",
      white: "#f8f8f8",
      gray: "#7F888E",
      blue: "#CDEDF7",
      honeydew: "#DDFFEE",
      tiffany: "#98E4D5",
      cambridge: "#73ACA0"
    }
  },
  plugins: [],
};
export default config;
