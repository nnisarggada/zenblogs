/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        xs: "0.694rem",
        sm: "0.833rem",
        base: "1rem",
        lg: "1.2rem",
        xl: "1.44rem",
        "2xl": "1.728rem",
        "3xl": "2.074rem",
        "4xl": "2.488rem",
        "5xl": "2.986rem",
        "6xl": "3.583rem",
        "7xl": "4.3rem",
        "8xl": "5.16rem",
        "9xl": "6.192rem",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: "2.986rem",
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          fontSize: "2.488rem",
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          fontSize: "2.074rem",
          fontWeight: theme("fontWeight.bold"),
        },
        h4: {
          fontSize: "1.728rem",
          fontWeight: theme("fontWeight.bold"),
        },
        h5: {
          fontSize: "1.44rem",
          fontWeight: theme("fontWeight.bold"),
        },
        h6: {
          fontSize: "1.2rem",
          fontWeight: theme("fontWeight.bold"),
        },
        p: {
          fontSize: "1.2rem",
        },
      });
    },
  ],
};
