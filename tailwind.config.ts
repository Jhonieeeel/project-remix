import type { Config } from "tailwindcss";

import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [require("preline/plugin"), flowbite.plugin()],
} satisfies Config;
