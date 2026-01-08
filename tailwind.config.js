**/tailwind.config.js not found, creating default config...**

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#3b82f6",
        },
      },
    },
  },
  plugins: [],
}