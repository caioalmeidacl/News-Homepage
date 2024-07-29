import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: {'max': '767px'},
      desktop: "768px"
    },
    extend: {
      fontFamily: {
        inter: ["inter"]
      },
      colors: {
        "very-dark-blue": 'hsl(240, 100%, 5%)',
        "dark-grayish-blue": 'hsl(236, 13%, 42%)',
        "grayish-blue": 'hsl(233, 8%, 79%)',
        "off-white": 'hsl(46,100%,99%)',
        "soft-orange": 'hsl(35, 77%, 62%)',
        "soft-red": 'hsl(5, 85%, 63%)'
      },
      letterSpacing: {
        '2': '0.2em'
      },
      fontSize: {
        paragraph: "15px",
        '17': "17px", 
      },
      maxWidth: {
        '100': '100px'
      },
    },
  },
  plugins: [],
};
export default config;
