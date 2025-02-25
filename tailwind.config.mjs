/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-2xl': '1920px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF3811",
        secondary: "#444444"
      },
    },
  },
  plugins: [],
};
