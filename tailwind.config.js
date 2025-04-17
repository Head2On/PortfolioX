/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
      fontFamily:{
        sans:['Poppins', 'sans-serif'],
        display:['Bebas Neue', 'sans-serif'],
      },
    },
    colors: {
      coachella: {
        yellow: '#FFDC00',
        pink: '#FF4D8D',
        purple: '#6A3098',
        dark: '#0F0524',
      },
    },
    plugins: [],
  }
}