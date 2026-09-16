# mycv.io

Portfolio personal de Laureano Enrique. Sitio estatico con Astro, TypeScript y Tailwind.
En produccion: https://laureano-cv.vercel.app

## Como esta armado

Una sola pagina (`src/pages/index.astro`) que arma todo a partir de un unico
archivo de datos. Para actualizar el CV casi nunca hace falta tocar el markup.

```
src/data/cv.ts          datos del CV: perfil, proyectos, stack, finanzas
src/pages/index.astro   la pagina: hero, profile, projects, stack, markets, contact
src/layouts/BaseLayout.astro  head, fuentes y <body>
src/components/StatIcon.astro iconos SVG del hero (heredan el color del tema)
src/styles/themes.css   paleta arcilla como variables CSS
tailwind.config.mjs     tokens de color que apuntan a esas variables
public/logos/           logos de tecnologias (Devicon, .svg)
docs/                   material de referencia, no entra al build
```

Los colores viven en `themes.css` como triples RGB (`--fg: 35 24 15`) para que
Tailwind pueda aplicarles opacidad: `bg-brand/10`, `bg-page/85`.

### Agregar una tecnologia al stack

1. Bajar el `.svg` de [Devicon](https://devicon.dev) a `public/logos/`.
2. Sumar `{ name: 'X', logo: 'x.svg' }` al grupo que corresponda en `techGroups`.
   Sin `logo` se muestra como chip de texto.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Deploy

Vercel sigue la rama `main`: cada push a `main` redeploya. La config esta en
`vercel.json` (`npm run build` -> `dist`).
