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
      // scrollbar: {
      //   DEFAULT: {
      //     // Configure your default scrollbar styles here
      //     bg: "transparent",
      //     hover: {
      //       bg: "rgba(0,0,0,0.5)",
      //     },
      //     active: {
      //       bg: "rgba(0,0,0,0.75)",
      //     },
      //   },
      //   // You can create more variants if needed
      //   thick: {
      //     bg: "transparent",
      //     borderRadius: "8px",
      //     width: "12px",
      //     hover: {
      //       bg: "rgba(0,0,0,0.5)",
      //     },
      //     active: {
      //       bg: "rgba(0,0,0,0.75)",
      //     },
      //   },
      // },
    },
    colors: {
      main: "#443CC5",
      disabled: "#919EAB",
      secondary: "#637381",
      error: "#CB1E1E",
      focus: "#919EAB",
      lighter: "#E3E2F6",
      dark: "#36309E",
      primary: "#212B36",
      success: "#17714A",
    },
  },
  plugins: [require("tailwind-scrollbar")],
  corePlugins: {
    // preflight: false,
  },
  important: true,
};
export default config;
