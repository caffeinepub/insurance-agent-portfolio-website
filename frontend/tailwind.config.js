/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        success: "oklch(var(--success) / <alpha-value>)",
        warning: "oklch(var(--warning) / <alpha-value>)",

        /* Brand palette */
        forest: {
          DEFAULT: "#1A3A2A",
          light: "#2D5A40",
          dark: "#0F2218",
          50: "#f0f7f3",
          100: "#d8ede1",
          200: "#b3dbc5",
          300: "#82c2a1",
          400: "#4da375",
          500: "#2D5A40",
          600: "#1A3A2A",
          700: "#142e21",
          800: "#0F2218",
          900: "#091610",
        },
        amber: {
          DEFAULT: "#C8922A",
          light: "#DBA84A",
          dark: "#A67520",
          50: "#fdf8ee",
          100: "#f9edcf",
          200: "#f2d99a",
          300: "#e9bf5e",
          400: "#DBA84A",
          500: "#C8922A",
          600: "#A67520",
          700: "#855c1a",
          800: "#6b4916",
          900: "#573b13",
        },
        cream: {
          DEFAULT: "#F7F3EC",
          dark: "#EDE7DA",
          darker: "#E0D8C8",
        },
        charcoal: {
          DEFAULT: "#1C1C1E",
          light: "#2C2C2E",
          muted: "#48484A",
        },

        /* Legacy Houston colors kept for compatibility */
        houstonNavy: "#1e3a8a",
        houstonGold: "#f59e0b",
        houstonLight: "#f8fafc",
        houstonDark: "#0f172a",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "'Inter'", "sans-serif"],
        sans: ["'DM Sans'", "'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "forest-sm": "0 2px 8px rgba(26, 58, 42, 0.12)",
        "forest-md": "0 4px 20px rgba(26, 58, 42, 0.18)",
        "forest-lg": "0 8px 40px rgba(26, 58, 42, 0.25)",
        "forest-xl": "0 16px 60px rgba(26, 58, 42, 0.30)",
        "amber-glow": "0 4px 20px rgba(200, 146, 42, 0.35)",
        "amber-glow-lg": "0 8px 40px rgba(200, 146, 42, 0.45)",
        "card-lift": "0 2px 12px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.12), 0 20px 60px rgba(0,0,0,0.10)",
      },
      backgroundImage: {
        "forest-gradient": "linear-gradient(135deg, #0F2218 0%, #1A3A2A 50%, #2D5A40 100%)",
        "forest-gradient-v": "linear-gradient(180deg, #1A3A2A 0%, #0F2218 100%)",
        "amber-gradient": "linear-gradient(135deg, #A67520 0%, #C8922A 50%, #DBA84A 100%)",
        "cream-gradient": "linear-gradient(180deg, #F7F3EC 0%, #EDE7DA 100%)",
        "hero-pattern": "radial-gradient(ellipse at 70% 50%, rgba(45, 90, 64, 0.4) 0%, transparent 60%), linear-gradient(135deg, #0F2218 0%, #1A3A2A 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 3s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "pulse-ring": "pulseRing 2s ease-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
