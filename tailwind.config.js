/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0081a7", // Dark blue
        foreground: "#ffffff", // White for contrast
      },
    },
    colors: {
      border: "#0081a7", // Dark blue border
      input: "#e5f2f4",  // Light input background
      ring: "#00afb9",   // Lighter teal
      background: "#0081a7", // Dark blue for background
      foreground: "#ffffff", // White foreground for readability
      primary: {
        DEFAULT: "#0081a7", // Dark blue for primary
        foreground: "#00afb9", // White for primary foreground
      },
      secondary: {
        DEFAULT: "#00afb9", // Teal for secondary
        foreground: "#ffffff", // White for secondary foreground
      },
      destructive: {
        DEFAULT: "#e63946", // Red for destructive action
        foreground: "#ffffff", // White for destructive foreground
      },
      muted: {
        DEFAULT: "#b2e0e6", // Light muted color (light teal)
        foreground: "#003e4c", // Dark teal for muted foreground
      },
      accent: {
        DEFAULT: "#00afb9", // Teal for accent
        foreground: "#ffffff", // White for accent foreground
      },
      popover: {
        DEFAULT: "#00afb9", // Teal for popover
        foreground: "#ffffff", // White for popover foreground
      },
      card: {
        DEFAULT: "#0081a7", // Dark blue for card
        foreground: "#ffffff", // White for card foreground
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: {
          height: "0",
        },
        to: {
          height: "var(--radix-accordion-content-height)",
        },
      },
      "accordion-up": {
        from: {
          height: "var(--radix-accordion-content-height)",
        },
        to: {
          height: "0",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
