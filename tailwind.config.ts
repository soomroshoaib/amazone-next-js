import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOrange:"#FE6E44",
        darkOrange:"rgb(255 , 77 , 17)",
        lightText:"#888888",
        accent:"#000000",
        accentWhite:"#FFFFFF",
        lightRed:"#FE3636",
        lightGreen:'#41CE09',
        bgLight:"#F5F5F5"
      },
    },
  },
  plugins: [],
} satisfies Config;
