import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      main: "#443CC5",
      disabled: "#919EAB",
      secondary: "#637381",
      error: "#CB1E1E",
      focus: "#919EAB",
    },
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
  important: true,
};
export default config;
