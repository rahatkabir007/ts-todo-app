import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "psclightskyblue": "#e2edfc",
        "psclightwhite": "rgba(255,255,255,0.17)",
        'psclightblack': '#3B3B3B',
        'pscgrey': '#F7F7F7',
        'pscblack': '#232428',
        'pscdarkblue': '#2D3748',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
