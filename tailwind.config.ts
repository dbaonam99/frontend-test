import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-200": "#2B2828",
        "background-300": "#443E3E",
        gray: "#B3B3B3",
        "gray-200": "#515151",
        danger: "#CA323D",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
