/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            code: {
              margin: "0.2rem",
              padding: "0.1rem 0.25rem",
              borderRadius: "0.2rem",
              fontWeight: "400",
              backgroundColor: theme("colors.stone[200]"),
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:last-of-type::after": {
              content: "none",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
