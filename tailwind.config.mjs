export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Apuntan a las variables de themes.css (paleta arcilla).
        page: 'rgb(var(--page) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        hairline: 'rgb(var(--hairline) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        'fg-soft': 'rgb(var(--fg-soft) / <alpha-value>)',
        brand: 'rgb(var(--brand) / <alpha-value>)',
        'on-brand': 'rgb(var(--on-brand) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
