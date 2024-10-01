import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary :"#14161e"

      },
      boxShadow :{
        "top-curved":'3px 4px 0 2px #14161e',
        "bottom-curved":'2px -4px 0 2px #14161e'
      }
    },
  },
  plugins: [],
};
export default config;
