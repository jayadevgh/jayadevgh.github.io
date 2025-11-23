/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0c10",
        surface: "#111827",
        accent: "#38bdf8",
      },
    },
  },
  plugins: [],
};
