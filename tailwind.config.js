/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '12px',  // Add your custom value here
        'extra-lg': '1rem',  // You can add more custom sizes
      },
    },
  },
  plugins: [],
}

