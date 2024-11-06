/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#121314",
          "secondary": "#7B848B",
          "accent": "#485057",
          "neutral": "#FFFFFF",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
