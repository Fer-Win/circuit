import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue-haas': ['Neue Haas Grotesk Display Pro', 'sans'],
      },
      fontSize: {
          "section-title":[
            '56px',
            {
              lineHeight: '60px',
              letterSpacing :'-1px'
    
            }
          ],
        "section-subtitle":[
          '19px',{
              lineHeight: '28px',
              letterSpacing :'0.5px'
          }
        ],
        "bento-title" : '24px',
        'bento-content' : '14px',
        'bento-logo' : '60px'
      },
      backgroundColor:{
        "primary" : "#010314"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "section-subtitle-clr":'#DFE1F4'
      }
    },
  },
  plugins: [],
};
export default config;
