// tailwind.config.js
module.exports = {
  darkMode: 'class', // ✅ Required for manual toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         keyframes: {
        'fade-down': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-down': 'fade-down 0.3s ease-out',
      },
       backgroundImage: {
        'hero-pattern': "url('/images/college.png')", // Adjust path as needed
      },
    },
  },
  plugins: [],
};
