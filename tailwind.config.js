/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/assets/bg-image1.png')"
      },
      colors: {
        primary: '#222831',
      },
      screens: {
        'md': '768px',
        'lg': '1024px',
        'xl': '1366px', // Menambahkan breakpoint khusus untuk 1366px
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
};
