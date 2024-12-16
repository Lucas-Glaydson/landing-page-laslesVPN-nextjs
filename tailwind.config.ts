import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme" 

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#F53838',
        grey: '#F4F4F4'
      },
      fontFamily: {
        rubik: ["var(--font-rubik)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
