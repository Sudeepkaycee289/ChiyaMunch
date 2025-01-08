// filepath: /tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {colors: {
      primary: {
        light: '#D29269'
      },
      secondary: {
        light: '#FEE2E2',
        DEFAULT: '#EF4444',
        dark: '#B91C1C',
      },
      customGray: '#6B7280',
    },
  },
},
  plugins: [],
}
