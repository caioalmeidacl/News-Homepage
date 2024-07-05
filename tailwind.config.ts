import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px"
    },
    extend: {
      fontFamily: {
        inter: ["inter"]
      },
      colors: {
        veryDarkBlue: 'hsl(240, 100%, 5%)',
        darkGrayishBlue: 'hsl(236, 13%, 42%)',
        grayishBlue: 'hsl(233, 8%, 79%)',
        offWhite: 'hsl(46,100%,99%)',
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)'
      },
      letterSpacing: {
        '2': '0.2em'
      },
    },
  },
  plugins: [],
};
export default config;
