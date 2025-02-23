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
        background: "var(--background)",
        foreground: "var(--foreground)",
        dot1blue: "var(--dot1blue)",
        dot2vio: "var(--dot2vio)",
        button: "var(--button)",
      },
    },
  },
  plugins: [],
} satisfies Config;
