/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#232323',
        gray: {
          medium: '#858585',
          dark: '#353535'
        },
        white: '#fff',
        purple: {
          medium: '#8437b1'
        },
        green: '#6bbe4e',
        overflow: '#00000090'
      }
    },
  },
  plugins: [],
}
