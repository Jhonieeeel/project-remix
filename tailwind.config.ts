import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        jacarta: {
          "50": "#eef1ff",
          "100": "#e0e5ff",
          "200": "#c7cffe",
          "300": "#a5affc",
          "400": "#8185f8",
          "500": "#6963f1",
          "600": "#5946e5",
          "700": "#4c38ca",
          "800": "#3e30a3",
          "900": "#2f2870",
          "950": "#211b4b",
        },
        "cornflower-blue": {
          "50": "#f1f5fd",
          "100": "#dfe8fa",
          "200": "#c5d7f8",
          "300": "#9ebdf2",
          "400": "#6f99ea",
          "500": "#4e77e3",
          "600": "#395ad7",
          "700": "#3047c5",
          "800": "#2d3ca0",
          "900": "#29367f",
          "950": "#1d234e",
        },
      },
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
  plugins: [require("preline/plugin"), forms],
} satisfies Config;
