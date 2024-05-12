/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      clothing: "url('/images/2.jpg')",
      offer: "url('/images/4.jpg')",
    },
    extend: {
      gridTemplateColumns: {
        pdDetails: "45% 45%",
      },
      gridTemplateRows: {
        thumb: "70% 30%",
      },
    },
  },
  plugins: [],
};
