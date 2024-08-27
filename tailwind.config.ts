import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "b-sm": "335px",
      sm: "375px",
      "b-md": "676px",
      md: "768px",
      lg: "1024px",
      "b-xl": "1200px",
      xl: "1440px",
    },
    extend: {
      spacing: {},
      colors: {
        "tokena-dark-2": "#0065EA",
        "tokena-blue": "#006EFF",
        "tokena-red": "#CB0101",
        "tokena-green": "#01B130",
        "tokena-yellow": "#F2D604",
        "tokena-dark": "#1D1D1D",
        "tokena-dark-gray": "#6B7280",
        "tokena-gray": "#D1D5DB",
        "tokena-light-gray": "#F3F4F6",
        "tokena-white": "#FFFFFF",
      },
      fontFamily: {
        MonoSans: ["MonoSans", "sans-serif"],
      },
      fontSize: {},
      borderRadius: {},
    },
  },
  plugins: [],
};
export default config;
