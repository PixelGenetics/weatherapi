/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{'bgImage': "url('/src/assets/wallpaperflare.com_wallpaper.jpg')",},
      fontFamily:{
        pixelfont: ['Pixelify Sans']
      }
    },
  },
  plugins: [],
}

