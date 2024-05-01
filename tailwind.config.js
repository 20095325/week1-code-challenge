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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "abstract-art": "url('/images/abstract-art.jpeg')",
          "pastel-robot": "url('/images/pastel-robot.jpeg')",
          "cat-hoodie": "url('/images/cat-hoodie.jpeg')"
      },
    },
  },
  plugins: [],
};
