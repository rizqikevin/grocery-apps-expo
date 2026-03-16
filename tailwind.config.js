/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "hsla(var(--background) / <alpha-value>)",
        foreground: "hsla(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsla(var(--primary) / <alpha-value>)",
          foreground: "hsla(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary) / <alpha-value>)",
          foreground: "hsla(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsla(var(--muted) / <alpha-value>)",
          foreground: "hsla(var(--muted-foreground) / <alpha-value>)",
        },
        card: "hsla(var(--card) / <alpha-value>)",
        "card-foreground": "hsla(var(--card-foreground) / <alpha-value>)",
      },
      accent: {
        DEFAULT: "hsla(var(--accent) / <alpha-value>)",
      },
      destructive: {
        foreground: "hsla(var(--destructive-foreground) / <alpha-value>)",
      },
      border: "hsla(var(--border) / <alpha-value>)",
      input: "hsla(var(--input) / <alpha-value>)",
      ring: "hsla(var(--ring) / <alpha-value>)",
      success: {
        DEFAULT: "hsla(var(--success) / <alpha-value>)",
      },
      "priority-low": {
        DEFAULT: "hsla(var(--priority-low) / <alpha-value>)",
        foreground: "hsla(var(--priority-low-foreground) / <alpha-value>)",
      },
      "priority-medium": {
        DEFAULT: "hsla(var(--priority-medium) / <alpha-value>)",
        foreground: "hsla(var(--priority-medium-foreground) / <alpha-value>)",
      },
      "priority-high": {
        DEFAULT: "hsla(var(--priority-high) / <alpha-value>)",
        foreground: "hsla(var(--priority-high-foreground) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
