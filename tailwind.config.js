/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#3393c4",
        
"secondary": "#175aea",
        
"accent": "#e0c270",
        
"neutral": "#1E2D38",
        
"base-100": "#F2E2F3",
        
"info": "#36BDD9",
        
"success": "#4FE3C3",
        
"warning": "#FCAF22",
        
"error": "#F4345A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

