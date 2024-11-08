// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGray: '#dee3e9',
        customGray: '#b1bcc0',
        cBlue: '#3c83a7',
        cGray: '#e5eaf0',
        white: '#ffffff',
        dBlue: '#073953',
      },
    },
  },
  plugins: [],
};

export default config;
