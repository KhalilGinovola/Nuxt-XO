/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "992px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          1: "var(--color-primary-1)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          1: "var(--color-secondary-1)",
        },
        
        headerBg: "var(--bg-header)",
        footerBg: "var(--bg-footer)",
      },
    },
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  corePlugins: {
    preflight: true,
  },
}
