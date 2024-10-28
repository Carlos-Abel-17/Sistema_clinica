/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0061F2',     // Azul vibrante
        secondary: '#45C4B0',   // Verde agua suave
        accent: '#F27335',      // Naranja vibrante
        light: '#F5F6F8',       // Gris muy claro
        dark: '#243A73',        // Azul oscuro para fondos y textos destacados
      },
    },
  },
  plugins: [],
}
