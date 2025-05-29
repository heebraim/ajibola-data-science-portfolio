// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         dark: {
//           background: '#0f172a',
//           surface: '#1e293b',
//           primary: '#3b82f6',
//           text: '#f8fafc',
//           accent: '#4ade80',
//           border: '#334155'
//         }
//       }
//     }
//   },
//   plugins: []
// }

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
  extend: {
  colors: {
    light: {
      background: '#f8fafc',
      surface: '#e2e8f0',
      primary: '#1e3a8a',
      accent: '#2563eb',
      text: '#1e293b',
      border: '#94a3b8'
    },
    dark: {
      background: '#0f172a',
      surface: '#1e293b',
      primary: '#3b82f6',
      accent: '#60a5fa',
      text: '#f1f5f9',
      border: '#334155'
    }
  }
}
  },
  plugins: []
};
