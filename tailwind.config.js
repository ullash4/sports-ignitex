module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1e64af",
        
"secondary": "#2c3e50",
        
"accent": "#37CDBE",
        
"neutral": "#2c3e50",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#2ecc71",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
