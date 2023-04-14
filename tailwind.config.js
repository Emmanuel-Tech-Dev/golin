/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/Rectanglebg.png')",
        'vidBg': "url('/public/Vidimage.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    fontFamily:{
      'new' : ["Nunito Sans","sans-serif"],
    }
  },
  plugins: [],
}

