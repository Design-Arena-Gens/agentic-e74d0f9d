import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f5ff",
          100: "#dbe7ff",
          200: "#b6d2ff",
          300: "#82b2ff",
          400: "#4a8bff",
          500: "#1f5fe6",
          600: "#1049b4",
          700: "#0d3c91",
          800: "#0e3173",
          900: "#0c295f"
        },
        accent: "#ef6b25"
      }
    }
  },
  plugins: []
};

export default config;
