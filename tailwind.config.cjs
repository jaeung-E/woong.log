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
            "--tw-prose-body": "rgb(var(--color-prose-body))",
            "--tw-prose-headings": "rgb(var(--color-text-body))",
            "--tw-prose-links": "rgb(var(--color-text-body))",
            "--tw-prose-bold": "rgb(var(--color-text-body))",
            "--tw-prose-quotes": "rgb(var(--color-text-body))",
            h1: {
              paddingTop: "5rem",
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
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
