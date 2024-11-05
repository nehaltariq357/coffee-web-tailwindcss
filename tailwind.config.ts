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
        Brown:"rgb(160, 88, 60)",
        lightBrown:"rgb(192, 130, 103)",
        offwhite:"rgb(255, 250, 218)",
      },
    },
  },
  plugins: [],
};
export default config;
