/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          typing: {
            'from': { width: '0' },
            'to': { width: '100%' }
          },
          blinking: {
            'from': { borderColor: 'transparent' },
            'to': { borderColor: 'green' }
          }
        },
        animation: {
          'typingAndBlinking': 'typing 1s steps(20, end) forwards, blinking 1.2s infinite'
        }
      },
    },
    plugins: [require("daisyui")],
  }