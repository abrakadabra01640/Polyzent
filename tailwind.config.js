/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-slate': '#1E4D4F',
        'linen': '#F4EDE4',
        'harvest-gold': '#E1A600',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'heading': ['Poppins', 'Inter', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'hover-scale': 'hoverScale 0.3s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      boxShadow: {
        'harvest-gold': '0 25px 50px -12px rgba(225, 166, 0, 0.25)',
        'harvest-gold-lg': '0 35px 60px -12px rgba(225, 166, 0, 0.4)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        hoverScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}