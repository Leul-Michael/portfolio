import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "layout-300": "repeat(auto-fill, minmax(300px, 1fr))",
        "layout-400": "repeat(auto-fill, minmax(400px, 1fr))",
        "layout-500": "repeat(auto-fill, minmax(500px, 1fr))",
      },
      colors: {
        border: "hsl(var(--border))",
        background: {
          DEFAULT: "hsl(var(--background))",
          // muted: "hsl(var(--primary-muted))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          muted: "hsl(var(--primary-muted))",
          dark: "hsl(var(--primary-dark))",
        },
        accent: {
          DEFAULT: "hsl(var(--clr-accent))",
        },
      },
    },
  },
  plugins: [],
}
export default config
