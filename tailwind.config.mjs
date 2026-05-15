export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0f1c',
        surface: '#11182a',
        line: 'rgba(255,255,255,0.08)',
        accent: '#7dd3fc',
        accentSoft: '#0f172a',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(125, 211, 252, 0.16), 0 24px 80px rgba(2, 6, 23, 0.45)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};