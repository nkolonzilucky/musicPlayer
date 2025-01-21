import type { Config } from "tailwindcss";

export default {
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
        "white": "#fff",
        "darkslategray": {
          "100": "#3d3d3d",
          "200": "#323232",
          "300": "#2e2d2d"
        },
        "darkgray": "#a4a4a4",
        "gray": {
          "100": "#fdfdfd",
          "200": "rgba(255, 255, 255, 0.5)"
        }
      },
      "spacing": {},
      "fontFamily": {
        "inter": "Inter"
      },
      "borderRadius": {
        "20xl-3": "39.3px",
        "981xl": "1000px",
        "corner-large": "16px",
        "corner-full": "1000px"
      }
    },
    "fontSize": {
      "lg-3": "1.144rem",
      "xl": "1.25rem",
      "inherit": "inherit"
    }
  },
  "corePlugins": {
    "preflight": false
  },
  plugins: [],
} satisfies Config;
