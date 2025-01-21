import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  "theme": {
"extend": {
"colors": {
"black": "#000",
"dimgray": "rgba(96, 96, 96, 0.31)",
"darkgray": "rgba(162, 162, 162, 0.59)",
"silver": "#bababa"
},
"spacing": {},
"fontFamily": {
"inter": "Inter"
},
"borderRadius": {
"corner-extra-large": "28px",
"corner-large": "16px"
}
},
"fontSize": {
"123xl-3": "8.894rem",
"inherit": "inherit"
}
},
"corePlugins": {
"preflight": false
}
} satisfies Config;
