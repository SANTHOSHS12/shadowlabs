module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Royal Blue
          hover: "#1D4ED8",
          light: "#60A5FA",
        },
        secondary: {
          DEFAULT: "#475569", // Slate
        },
        surface: "#FFFFFF",
        background: "#F8FAFC",
      },
      perspective: {
        '1000': '1000px',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
