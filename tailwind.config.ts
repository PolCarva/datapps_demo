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
        "dark-blue": "#191963",
        pink: "#EF94F4",
        purple: "#B446DB",
        cyan: "#5DEBEC",
        blue: "#259CED"
      },
    },
  },
  plugins: [],
};
export default config;
