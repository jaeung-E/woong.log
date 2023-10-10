/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          body: "rgb(var(--color-bg-body) / <alpha-value>)",
        },
        text: {
          body: "rgb(var(--color-text-body) / <alpha-value>)",
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              paddingTop: "5rem",
              marginBottom: "1rem !important",
            },
            code: {
              margin: "0.2rem",
              padding: "0.1rem 0.25rem",
              borderRadius: "0.2rem",
              fontWeight: "400",
              backgroundColor: theme("colors.stone[200]"),
              "&::before": {
                content: "none !important",
              },
              "&::after": {
                content: "none !important",
              },
            },
            blockquote: {
              code: {
                color: "black",
              },
              borderLeftColor: theme("colors.blue[400]"),
              "p:first-of-type::before": {
                content: "none",
              },
              "p:last-of-type::after": {
                content: "none",
              },
            },
            a: {
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.blue[400]"),
              },
            },
            hr: {
              margin: "0 0 2rem 0 !important",
            },
          },
        },
        dark: {
          css: {
            code: {
              backgroundColor: theme("colors.slate[400]"),
            },
            "h2, h3": {
              color: theme("colors.slate[400]"),
            },
            a: {
              color: theme("colors.slate[400]"),
              "&:hover": {
                color: theme("colors.blue[400]"),
              },
            },
            pre: {
              code: {
                backgroundColor: "rgba(0, 0, 0, 0)",
              },
            },
            p: {
              color: theme("colors.slate[400]"),
            },
            hr: {
              borderColor: theme("colors.slate[400]"),
            },
            strong: {
              color: theme("colors.slate[400]"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
