/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cranberry: '#B05044',
        knitsweater: '#F0E4D8',
        search: '#FFF9F9',
        camelcoat: '#B77855',
        midnight: '#2F4842',
        steelblue: '#86A5A8',
        spiritmountain: '#68858F',
        yellow: '#FFCF81',
        navy: '#11009E'
      },
    },
    fontfamily: {
      Comfortaa: ["Comfortaa", "sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true
    },
    screens: {
      sm: "640px",
      md: "768px"
    }
  },
  plugins: [],
}

