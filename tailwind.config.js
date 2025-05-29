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
          background: '#fef9f4',
          surface: '#fff7ed',
          primary: '#92400e',
          accent: '#15803d',
          text: '#1c1917',
          border: '#e7c9a9'
        },
        dark: {
          background: '#1c1c1c',
          surface: '#292524',
          primary: '#ea580c',
          accent: '#22c55e',
          text: '#f5f5f4',
          border: '#3f3f46'
        }
      }
    }
  },
  plugins: []
};
