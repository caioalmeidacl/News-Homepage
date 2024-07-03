import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ss_mobile: "321px",
      MaxS_mobile: { max: "320px" },
      s_mobile: "445px",
      lg: "1024px",
      MaxLg: { max: "1024px" },
      md: "769px",
      MaxMd: { max: "768px" },
      Mobile: { max: "575px" },
      // => @media (max-width: 575px) { ... }

      TabletPortrait: { max: "992px" },
      // => @media (min-width: 575px, max-width: 992px) { ... }

      TabletLandscape: { min: "992px" },
      // => @media (min-width: 992px) { ... }

      Laptop: { min: "923px", max: "1440px" },
      LaptopS: "1200px",
      MaxBlogGrid: { max: "1250px" },
      BlogGrid: { min: "992px", max: "1250px" },
      LaptopNoMin: { max: "1440px" },
      LaptopMin: { min: "1440px" },
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
