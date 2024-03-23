import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: {
               "400": "#C49D7E",
               "600": "#5C5C5C",
            },
            gray: {
               "600": "#949494",
               "800": "#0E181B",
               "950": "#0B1315",
            },
         },
         fontFamily: {
            chillax: ["var(--font-chillax)", "serif"],
            syncopate: ["var(--font-syncopate)", ...fontFamily.sans],
            "bitter-rose": ["var(--font-bitter-rose)", ...fontFamily.sans],
         },
      },
      fontSize: {
         xs: ["10px", {}],
         sm: ["14px", {letterSpacing: "0.2em"}],
         md: ["16px", {}],
         base: ["17px", {}],
         lg: ["18px", {lineHeight: "1.33em"}],
         xl: ["19px", {letterSpacing: "0.2em"}],
         "2xl": ["23px", {letterSpacing: "0.2em"}],
         "3xl": ["29px", {}],
         "4xl": ["30px", {}],
         "5xl": ["40px", {}],
         "6xl": ["43px", {}],
         "7xl": ["58px", {letterSpacing: "0.1em"}],
         "8xl": ["72px", {lineHeight: "1.31em"}],
         "9xl": ["77px", {}],
         "10xl": ["91px", {}],
         "11xl": ["100px", {letterSpacing: "0.2em"}],
         "12xl": ["125px", {lineHeight: "0.75em"}],
      },
      shadows: {sm: "0px 4px 4px rgba(0, 0, 0, 0.25)"},
      backgroundImage: {
         headerW: "url('/images/sfondo nuovo.jpg')",
         headerM: "url('/images/sfondo nuovo (1).jpg')",
         "Prenotation-bg": "url('/images/forme geometriche.png')",
      },
      container: {
         center: true,
         padding: {
            DEFAULT: "1.25rem",
         },
      },
      screens: {
         sm: "600px",
         md: "768px",
         lg: "1024px",
         xl: "1280px",
         "2xl": "1512px",
      },
   },
   plugins: [],
};
export default config;
