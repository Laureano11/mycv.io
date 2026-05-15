# mycv.io

Portfolio personal de Lauri, construido con Astro, TypeScript y Tailwind.

## Estructura

- Home completa con hero, about, projects, stack y contact.
- Layout base con metadata y tipografías.
- Estilos globales con look minimalista premium.

## Cómo correrlo localmente

1. Instalá dependencias:

```bash
npm install
```

2. Levantá el servidor de desarrollo:

```bash
npm run dev
```

3. Abrí la URL que aparece en consola, normalmente:

```bash
http://localhost:4321
```

## Build local

Para probar la versión de producción:

```bash
npm run build
npm run preview
```

## Deploy en GitHub + Vercel

1. Creá un repositorio nuevo en GitHub y subí este proyecto.
2. Conectá ese repositorio en Vercel desde el dashboard.
3. Usá estos valores si Vercel te pide configuración manual:

```text
Framework Preset: Astro
Build Command: npm run build
Output Directory: dist
```

4. Cada vez que hagas push a la rama principal, Vercel va a redeployar automáticamente.

Si querés usar Git desde cero, el flujo mínimo es:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin <TU_REPO_EN_GITHUB>
git push -u origin main
```

## Nota sobre el CV

El botón de descarga apunta a `/cv.pdf`. Si todavía no tenés el archivo final, agregalo en `public/cv.pdf`.
