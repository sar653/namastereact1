/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      width: {
      '150': '150px',
      "200":"200px",
    },
    height: {
     
      "300":"300px",
    },
    colors: {
      'grey': '#D3D3D3',
    },
      margin: {
        '15': '15px',
      }
},
  },
  plugins: [],
}

