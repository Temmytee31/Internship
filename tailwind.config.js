/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      xs: "320px",
      s: "375px",
      sm: "425px",
      xsm: "600px",
      md: "768px",
      xmd: "800px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {},
  },
  plugins: [],
}

