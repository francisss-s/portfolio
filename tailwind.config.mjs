/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        aurora: {
          DEFAULT: '#3B478C',
          midnight: '#575373',
          royal: '#3B478C',
          sky: '#6698D9',
          dawn: '#F2DDB6',
          ember: '#A67A46'
        }
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif']
      },
      boxShadow: {
        glow: '0 25px 55px -30px rgba(59, 71, 140, 0.55)',
        pill: '0 18px 38px -20px rgba(59, 71, 140, 0.45)'
      }
    }
  },
  plugins: []
};

export default config;
