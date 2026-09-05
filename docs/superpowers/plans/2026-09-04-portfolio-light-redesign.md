# Rediseño claro del portfolio — Plan de implementación

> **Para trabajadores agénticos:** SUB-SKILL REQUERIDA: usar superpowers:subagent-driven-development (recomendado) o superpowers:executing-plans para implementar este plan tarea por tarea. Los pasos usan checkboxes (`- [ ]`) para seguimiento.

**Goal:** Producir cinco disposiciones claras y legibles del portfolio en `/v1`…`/v5` sobre una base compartida de datos y paletas, para que el autor elija una.

**Architecture:** Primero se construye, en secuencia, todo lo compartido: un módulo de datos, cuatro paletas como variables CSS enganchadas a Tailwind, un switcher de paleta y un layout. Después `v1` se implementa como referencia trabajada. Recién entonces las cuatro variantes restantes se construyen en paralelo, cada una dueña de un único archivo `src/pages/vN.astro`, sin tocar nada compartido.

**Tech Stack:** Astro 5.18.1, @astrojs/tailwind 5.1.5, Tailwind CSS 3.4.19, TypeScript. Sin dependencias nuevas.

**Spec:** `docs/superpowers/specs/2026-09-04-portfolio-light-redesign-design.md`

## Global Constraints

Estas reglas aplican a **todas** las tareas. Los requisitos de cada tarea las incluyen implícitamente.

- **No se modifica** `src/pages/index.astro`, `src/layouts/BaseLayout.astro` ni `src/styles/global.css`. La ruta `/` debe seguir mostrando el sitio oscuro actual sin cambios.
- **No se usa `@vercel/analytics`.** El paquete NO esta instalado; `BaseLayout.astro` lo importa sin usarlo y por eso el build sobrevive. Usarlo de verdad rompe la compilacion.
- **No se agregan dependencias.** No ejecutar `npm install`. `node_modules` está desincronizado con `package.json` (este declara `astro ^6.3.8`, está instalado `astro 5.18.1`); un install limpio rompería el proyecto. Usar lo instalado.
- **No se modifican los tokens Tailwind existentes** `ink`, `surface`, `line`, `accent`, `accentSoft`: `BaseLayout.astro` depende de ellos.
- **No se cambia el texto del CV.** Mismo contenido que hoy; cambia la forma.
- **No se agregan ni se borran archivos en `public/logos/`.** Los 29 logos ya están descargados; una variante los usa, no los gestiona.
- Cuerpo mínimo **16px** (`text-base`). 14px (`text-sm`) solo en metadatos cortos: chips, etiquetas, pies.
- Color de texto **únicamente** vía los tokens `fg` y `fg-soft`. Prohibido `text-zinc-*`, `text-gray-*`, `text-slate-*` y cualquier gris literal.
- **Prohibido `<details>` dentro de `<details>`.** Los proyectos se leen sin clics.
- Chips de stack: un solo estilo neutro. El color se reserva para el acento y para `specialTags`.
- Párrafos con ancho máximo ~70 caracteres (`max-w-[68ch]` o similar).
- Toda animación respeta `prefers-reduced-motion`.
- Todo elemento interactivo tiene foco visible.

**Sobre tests:** el proyecto no tiene suite de tests y el spec decide no agregar una. Donde este plan normalmente pediría un test unitario, pide en su lugar una verificación ejecutable concreta (build, grep, curl). Cada tarea igual empieza por comprobar que la verificación falla antes de implementar.

---

### Task 1: Módulo de datos compartido

**Files:**
- Create: `src/data/cv.ts`
- Verify: `src/pages/index.astro` (solo lectura — es la fuente de la que se copian los datos)

**Interfaces:**
- Consumes: nada.
- Produces: los tipos `Project`, `Tech`, `TechGroup`, `Fact`, `FinanceItem` y las constantes `profile`, `heroStats`, `facts`, `projects`, `techGroups`, `finance`. Todas las variantes importan de aquí.

- [ ] **Step 1: Escribir la verificación que falla**

```bash
node --experimental-strip-types -e "import('./src/data/cv.ts').then(m=>{
  const need=['profile','heroStats','facts','projects','architectureGroups','techGroups','finance'];
  const missing=need.filter(k=>!(k in m));
  if(missing.length) throw new Error('faltan: '+missing);
  if(m.projects.length!==9) throw new Error('projects debe tener 9, tiene '+m.projects.length);
  if(m.finance.length<6) throw new Error('finance incompleto');
  console.log('OK');
})"
```

- [ ] **Step 2: Correrla para ver que falla**

Esperado: falla porque `src/data/cv.ts` no existe.

- [ ] **Step 3: Crear `src/data/cv.ts`**

Copiar textualmente los datos de `src/pages/index.astro` (líneas 3-155) a esta forma. **No reescribir ni corregir el texto**, ni siquiera las erratas ("builded", "Mac OS"): es el contenido del autor.

```ts
export type Project = {
  name: string;
  status: string;
  summary: string;
  highlight: string;
  stack: string[];
  repoUrl: string;
  specialTags?: string[];
};

export type Group = { title: string; items: string[] };
export type Fact = { label: string; value: string; href?: string };
export type FinanceItem = { label: string; detail: string };

export const profile = {
  name: 'Laureano Enrique',
  role: 'Developer + Trader + Software Engineer Student',
  location: 'Ciudad Autonoma de Buenos Aires, Argentina',
  email: 'Laureanoenrique29@gmail.com',
  phone: '2325420927',
  phoneHref: 'tel:+542325420927',
  bio: `<texto exacto del párrafo de index.astro:248-249>`,
  projectsNote: `<texto exacto de index.astro:274>`,
  contactHeading: 'If you are hiring for pragmatic engineering work, let’s talk.',
  contactNote: 'The page is intentionally simple: it shows what I have built, which stacks I know and the kind of problems I like to solve.',
};

export const heroStats = [ /* los 3 de index.astro:4-8 */ ];

export const facts: Fact[] = [
  { label: 'Name', value: 'Laureano Enrique' },
  { label: 'Age', value: '24' },
  { label: 'City', value: 'Ciudad Autonoma de Buenos Aires, Argentina' },
  { label: 'Focus', value: 'Trading + Software automation + IA automation' },
  { label: 'Education', value: '6th year, Systems Engineering — UTN FRBA' },
  { label: 'Languages', value: 'Spanish (Native), English (Fluent)' },
  { label: 'High school', value: 'Colegio Nacional Mariano Moreno (Economics orientation)' },
  { label: 'Email', value: 'Laureanoenrique29@gmail.com', href: 'mailto:Laureanoenrique29@gmail.com' },
  { label: 'Phone', value: '2325420927', href: 'tel:+542325420927' },
];

export const projects: Project[] = [ /* los 9 de index.astro:10-94, campos idénticos */ ];
export const architectureGroups: Group[] = [ /* los 2 de index.astro:105-127 */ ];
// technologyGroups (5 grupos) + languages se reagrupan en techGroups (3 grupos),
// con { name, logo? } por tecnologia. Ver la seccion "Stack con logos" del spec.
export const techGroups: TechGroup[] = [ /* Languages, Frameworks and libraries, Systems data and tooling */ ];

// La sección Finance & Markets está hardcodeada como HTML en index.astro:377-399.
// Se extrae aquí como datos estructurados.
export const finance: FinanceItem[] = [
  { label: 'Instruments', detail: 'Equities (stocks), fixed income (bonds), derivatives (options, futures)' },
  { label: 'Market analysis', detail: 'Fundamental analysis, technical analysis, chart patterns' },
  { label: 'Trading & ops', detail: 'Options trading (ROFEX), implied volatility (IV), Greeks (Delta, Gamma, Vega, Theta)' },
  { label: 'Argentinian bonds', detail: 'Valuation, duration, IRR, spreads, sovereign risk analysis' },
  { label: 'Tools', detail: 'Finviz, TradingView, Python for quantitative analysis (pandas, numpy, plotly)' },
  { label: 'Experience', detail: '18+ months trading options and continuous market analysis' },
];
```

- [ ] **Step 4: Correr la verificación del Step 1**

Esperado: imprime `OK`.

- [ ] **Step 5: Confirmar que `/` no cambió**

```bash
npm run build && grep -c "Laureano Enrique" dist/index.html
```

Esperado: build sin errores, el índice sigue generándose.

- [ ] **Step 6: Commit**

```bash
git add src/data/cv.ts
git commit -m "feat: extraer datos del CV a src/data/cv.ts"
```

---

### Task 2: Paletas y tokens Tailwind

**Files:**
- Create: `src/styles/themes.css`
- Modify: `tailwind.config.mjs` (agregar a `theme.extend.colors`, sin tocar lo existente)

**Interfaces:**
- Consumes: nada.
- Produces: las clases Tailwind `bg-page`, `bg-panel`, `text-fg`, `text-fg-soft`, `text-brand`, `bg-brand`, `text-on-brand`, `border-hairline` (y todas las variantes de utilidad de esos colores), funcionando con opacidad (`bg-brand/10`). Los ids de paleta `papel`, `niebla`, `lino`, `arcilla`.

- [ ] **Step 1: Escribir la verificación que falla**

```bash
grep -q "\-\-page" src/styles/themes.css && grep -q "rgb(var(--page)" tailwind.config.mjs && echo OK
```

- [ ] **Step 2: Correrla para ver que falla**

Esperado: sin salida (falla), `themes.css` no existe.

- [ ] **Step 3: Crear `src/styles/themes.css`**

Valores exactos del spec. Se guardan como triples RGB sin comas para que funcione `<alpha-value>` de Tailwind.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root,
[data-palette='papel'] {
  --page: 251 250 247;
  --panel: 255 255 255;
  --hairline: 227 224 216;
  --fg: 26 26 24;
  --fg-soft: 90 87 80;
  --brand: 29 78 216;
  --on-brand: 255 255 255;
}

[data-palette='niebla'] {
  --page: 242 244 245;
  --panel: 255 255 255;
  --hairline: 220 225 227;
  --fg: 22 25 26;
  --fg-soft: 82 96 94;
  --brand: 15 118 110;
  --on-brand: 255 255 255;
}

[data-palette='lino'] {
  --page: 250 249 251;
  --panel: 255 255 255;
  --hairline: 230 226 236;
  --fg: 27 23 32;
  --fg-soft: 88 81 106;
  --brand: 91 33 182;
  --on-brand: 255 255 255;
}

[data-palette='arcilla'] {
  --page: 250 244 236;
  --panel: 255 253 249;
  --hairline: 232 220 203;
  --fg: 35 24 15;
  --fg-soft: 107 87 65;
  --brand: 166 61 34;
  --on-brand: 255 255 255;
}

html {
  color-scheme: light;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: rgb(var(--page));
  color: rgb(var(--fg));
}

:focus-visible {
  outline: 2px solid rgb(var(--brand));
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 4: Agregar los tokens a `tailwind.config.mjs`**

Dentro de `theme.extend.colors`, **después** de `accentSoft`, sin borrar ni renombrar nada:

```js
        page: 'rgb(var(--page) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        hairline: 'rgb(var(--hairline) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        'fg-soft': 'rgb(var(--fg-soft) / <alpha-value>)',
        brand: 'rgb(var(--brand) / <alpha-value>)',
        'on-brand': 'rgb(var(--on-brand) / <alpha-value>)',
```

- [ ] **Step 5: Correr la verificación del Step 1**

Esperado: imprime `OK`.

- [ ] **Step 6: Confirmar que los tokens viejos siguen**

```bash
grep -E "ink:|surface:|accentSoft:" tailwind.config.mjs && npm run build
```

Esperado: los tres siguen presentes, build sin errores.

- [ ] **Step 7: Commit**

```bash
git add src/styles/themes.css tailwind.config.mjs
git commit -m "feat: paletas claras como variables CSS y tokens Tailwind"
```

---

### Task 3: Switcher de paleta y layout de variantes

**Files:**
- Create: `src/components/PaletteSwitcher.astro`
- Create: `src/layouts/VariantLayout.astro`

**Interfaces:**
- Consumes: `src/styles/themes.css` (Task 2).
- Produces: `VariantLayout` con props `{ title: string; description: string; palette: 'papel'|'niebla'|'lino'|'arcilla'; fonts: string; current: number }`. `fonts` es una URL completa de Google Fonts que el layout inserta en el `<head>`. Todas las variantes usan este layout.

- [ ] **Step 1: Escribir la verificación que falla**

```bash
test -f src/components/PaletteSwitcher.astro && test -f src/layouts/VariantLayout.astro && echo OK
```

- [ ] **Step 2: Correrla para ver que falla**

Esperado: sin salida.

- [ ] **Step 3: Crear `src/components/PaletteSwitcher.astro`**

```astro
---
type Props = { current: number };
const { current } = Astro.props;
const palettes = [
  { id: 'papel', label: 'Papel' },
  { id: 'niebla', label: 'Niebla' },
  { id: 'lino', label: 'Lino' },
  { id: 'arcilla', label: 'Arcilla' },
];
const variants = [1, 2, 3, 4, 5];
---

<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 rounded-xl border border-hairline bg-panel/95 p-3 text-sm shadow-lg backdrop-blur">
  <div class="flex items-center gap-1">
    <span class="mr-1 text-xs text-fg-soft">Vista</span>
    {variants.map((n) => (
      <a
        href={`/v${n}`}
        aria-current={n === current ? 'page' : undefined}
        class:list={[
          'rounded px-2 py-1 transition',
          n === current ? 'bg-brand text-on-brand' : 'text-fg-soft hover:bg-hairline/50 hover:text-fg',
        ]}
      >v{n}</a>
    ))}
  </div>
  <div class="flex items-center gap-1">
    <span class="mr-1 text-xs text-fg-soft">Tema</span>
    {palettes.map((p) => (
      <button
        type="button"
        data-set-palette={p.id}
        class="rounded px-2 py-1 text-fg-soft transition hover:bg-hairline/50 hover:text-fg aria-[current=true]:bg-brand aria-[current=true]:text-on-brand"
      >{p.label}</button>
    ))}
  </div>
</div>

<script>
  const KEY = 'mycv-palette';
  const mark = (id: string) => {
    document.documentElement.dataset.palette = id;
    document.querySelectorAll<HTMLButtonElement>('[data-set-palette]').forEach((b) => {
      b.setAttribute('aria-current', String(b.dataset.setPalette === id));
    });
  };
  mark(document.documentElement.dataset.palette || 'papel');
  document.querySelectorAll<HTMLButtonElement>('[data-set-palette]').forEach((b) => {
    b.addEventListener('click', () => {
      const id = b.dataset.setPalette!;
      try { localStorage.setItem(KEY, id); } catch {}
      mark(id);
    });
  });
</script>
```

- [ ] **Step 4: Crear `src/layouts/VariantLayout.astro`**

El script inline del `<head>` corre antes de pintar para que no haya destello de paleta incorrecta. No importa `global.css`: ese archivo pinta el fondo oscuro.

```astro
---
import '../styles/themes.css';
import PaletteSwitcher from '../components/PaletteSwitcher.astro';

type Props = {
  title: string;
  description: string;
  palette: 'papel' | 'niebla' | 'lino' | 'arcilla';
  fonts: string;
  current: number;
};

const { title, description, palette, fonts, current } = Astro.props;
---

<!doctype html>
<html lang="en" data-palette={palette}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href={fonts} rel="stylesheet" />
    <title>{title}</title>
    <script is:inline define:vars={{ palette }}>
      try {
        const saved = localStorage.getItem('mycv-palette');
        document.documentElement.dataset.palette = saved || palette;
      } catch (e) {
        document.documentElement.dataset.palette = palette;
      }
    </script>
  </head>
  <body class="bg-page pb-28 text-fg antialiased sm:pb-24">
    <slot />
    <PaletteSwitcher current={current} />
  </body>
</html>
```

- [ ] **Step 5: Correr la verificación del Step 1**

Esperado: imprime `OK`.

- [ ] **Step 6: Commit**

```bash
git add src/components/PaletteSwitcher.astro src/layouts/VariantLayout.astro
git commit -m "feat: layout y switcher de paleta para las variantes"
```

---

### Task 4: v1 — Editorial (implementación de referencia)

Esta tarea valida toda la base y **sirve de ejemplo trabajado para las Tasks 5-8**, que se ejecutan en paralelo. No despachar esas tareas hasta que esta esté verde.

**Files:**
- Create: `src/pages/v1.astro`

**Interfaces:**
- Consumes: `src/data/cv.ts` (Task 1), `VariantLayout` (Task 3).
- Produces: el patrón de referencia — cómo importar los datos, cómo usar los tokens, cómo cubrir el contenido completo.

**Forma:** editorial. Lista vertical de proyectos separados por reglas horizontales, títulos en serif, mucho espacio en blanco, una sola columna centrada. Se lee como un CV impreso bueno.
**Paleta por defecto:** `papel`.
**Tipografía:** `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600&display=swap` — Fraunces para títulos, Inter para cuerpo.

- [ ] **Step 1: Escribir la verificación que falla**

```bash
npm run build && node -e "
const fs=require('fs');
const h=fs.readFileSync('dist/v1/index.html','utf8');
const must=['Laureano Enrique','Red Voluntarias','pyFINVIZ','TP-SO T.U.K.I.','Calculator MEP','Architecture families','Frontend and web','Argentinian bonds','Laureanoenrique29@gmail.com'];
const miss=must.filter(s=>!h.includes(s));
if(miss.length) throw new Error('falta contenido: '+miss.join(', '));
if(/<details[^>]*>(?:(?!<\/details>)[\s\S])*<details/.test(h)) throw new Error('hay <details> anidado');
if(/text-zinc-|text-gray-|text-slate-/.test(h)) throw new Error('hay grises hardcodeados');
console.log('v1 OK');
"
```

- [ ] **Step 2: Correrla para ver que falla**

Esperado: falla al leer `dist/v1/index.html` (no existe).

- [ ] **Step 3: Implementar `src/pages/v1.astro`**

Estructura obligatoria (mismo contenido en las cinco variantes):

1. Encabezado con nombre y navegación interna.
2. Hero: `profile.name`, `profile.role`, los tres `heroStats`.
3. Perfil: los nueve `facts` (los que tienen `href` son enlaces) y `profile.bio`.
4. Proyectos: `profile.projectsNote` y los nueve `projects`, cada uno con `status`, `name`, `summary`, `highlight`, los chips de `stack`, los `specialTags` si existen, y el enlace a `repoUrl` (`target="_blank" rel="noreferrer"`).
6. Tecnologías: los tres grupos de `techGroups`. Cada ítem es `{ name, logo? }`: si tiene `logo`, se muestra `<img src={`/logos/${tech.logo}`} alt="" width="20" height="20" loading="lazy" class="h-5 w-5 shrink-0 object-contain" />` antes del nombre; si no, solo el nombre.
7. Finanzas: los seis `finance` como `label` + `detail`.
8. Contacto: `profile.contactHeading`, `profile.contactNote`, email y teléfono.
9. Pie.

Chips de stack de un proyecto — **un solo estilo, sin arcoíris** (reemplaza al `tagClasses` de seis colores del index actual):

```astro
<span class="rounded-full border border-hairline bg-panel px-3 py-1 text-sm text-fg-soft">{item}</span>
```

Chips de la sección de tecnologías — mismo contenedor, con logo opcional. El padding izquierdo cambia según haya logo o no:

```astro
<li
  class:list={[
    'flex items-center gap-2 rounded-full border border-hairline bg-panel py-1 text-sm text-fg',
    tech.logo ? 'pl-1.5 pr-3.5' : 'px-3.5',
  ]}
>
  {tech.logo && (
    <img src={`/logos/${tech.logo}`} alt="" width="20" height="20" loading="lazy" class="h-5 w-5 shrink-0 object-contain" />
  )}
  {tech.name}
</li>
```

`specialTags` — aquí sí va el acento, porque distinguen algo real:

```astro
<span class="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-sm font-medium text-brand">{tag}</span>
```

- [ ] **Step 4: Correr la verificación del Step 1**

Esperado: imprime `v1 OK`.

- [ ] **Step 5: Revisar a ojo en el navegador**

```bash
npm run dev
```

Abrir `localhost:4321/v1`. Confirmar: fondo claro, los nueve proyectos visibles sin clic, el switcher funciona y las cuatro paletas se ven bien.

- [ ] **Step 6: Commit**

```bash
git add src/pages/v1.astro
git commit -m "feat: variante v1 editorial"
```

---

### Tasks 5-8: variantes en paralelo

Estas cuatro tareas son independientes: cada una crea **un solo archivo** y ninguna toca archivos compartidos. Se despachan simultáneamente, un agente por variante.

**Contrato idéntico para las cuatro.** Cada agente recibe:
- Este plan y el spec.
- `src/pages/v1.astro` como referencia trabajada.
- Las Global Constraints de arriba.
- La verificación de su propia ruta (el script del Task 4, cambiando `v1` por `vN`).
- La estructura de contenido obligatoria de nueve puntos del Task 4 Step 3.
- Los estilos exactos de chip y `specialTags` del Task 4 Step 3.

**Reglas de aislamiento (no negociables para el agente):**
- Crear **exclusivamente** `src/pages/vN.astro`. Cualquier otro archivo está prohibido, incluidos `cv.ts`, `themes.css`, `tailwind.config.mjs`, el layout y el switcher.
- Si algo de la base parece faltar o estar mal, **reportarlo, no arreglarlo**.
- CSS propio, si hace falta, va en un bloque `<style>` dentro del propio `.astro`.
- No hacer commit. El supervisor revisa y commitea.

**Pasos de cada agente:**

- [ ] **Step 1: Leer `src/pages/v1.astro`, `src/data/cv.ts` y `src/styles/themes.css`**
- [ ] **Step 2: Correr la verificación de su ruta y ver que falla**
- [ ] **Step 3: Implementar `src/pages/vN.astro`**
- [ ] **Step 4: Correr `npm run build` y la verificación hasta que pase**
- [ ] **Step 5: Reportar qué construyó y cualquier problema encontrado en la base**

#### Task 5: v2 — Tarjetas suaves
- **Archivo:** `src/pages/v2.astro` · **Paleta:** `niebla` · **`current`:** 2
- **Forma:** grid de tarjetas abierto (2 columnas en tablet, 3 en desktop), tarjetas `bg-panel` con borde `hairline` y sombra sutil, esquinas redondeadas generosas. Sin ningún `<details>`: todo el contenido de cada proyecto visible. Moderno y amigable.
- **Tipografía:** `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

#### Task 6: v3 — Dos columnas
- **Archivo:** `src/pages/v3.astro` · **Paleta:** `lino` · **`current`:** 3
- **Forma:** barra lateral izquierda `sticky` (ancho fijo ~320px) con nombre, rol, los nueve `facts`, contacto y navegación; contenido scrolleable a la derecha. En móvil la barra se apila arriba, sin `sticky`. Es la variante más escaneable y la más imprimible.
- **Tipografía:** `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap`

#### Task 7: v4 — Cálido personal
- **Archivo:** `src/pages/v4.astro` · **Paleta:** `arcilla` · **`current`:** 4
- **Forma:** una columna ancha y relajada, títulos serif grandes, interlineado amplio, bio con protagonismo (no escondida en una tarjeta lateral). Menos corporativo, más personal. Los proyectos como bloques separados por espacio en vez de por bordes.
- **Tipografía:** `https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,600&family=Inter:wght@400;500&display=swap`

#### Task 8: v5 — Timeline
- **Archivo:** `src/pages/v5.astro` · **Paleta:** `papel` · **`current`:** 5
- **Forma:** proyectos en línea de tiempo vertical: una regla continua a la izquierda con un marcador por proyecto y el contenido a la derecha. `status` funciona como etiqueta del hito. En móvil la línea se corre al borde izquierdo. El resto de las secciones en una columna normal.
- **Tipografía:** `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap` — mono para las etiquetas de hito.

---

### Task 9: Revisión de integración

**Files:**
- Modify: solo correcciones puntuales sobre `src/pages/v2.astro`…`v5.astro` si la revisión encuentra fallas.

**Interfaces:**
- Consumes: las cinco variantes.
- Produces: las cinco rutas verificadas y commiteadas.

- [ ] **Step 1: Verificar las cinco rutas de una**

```bash
npm run build && node -e "
const fs=require('fs');
let bad=0;
for (const v of ['v1','v2','v3','v4','v5']) {
  const h=fs.readFileSync('dist/'+v+'/index.html','utf8');
  const must=['Laureano Enrique','Red Voluntarias','pyFINVIZ','TP-SO T.U.K.I.','Calculator MEP','Architecture families','Frontend and web','Argentinian bonds','Laureanoenrique29@gmail.com'];
  const miss=must.filter(s=>!h.includes(s));
  const nested=/<details[^>]*>(?:(?!<\/details>)[\s\S])*<details/.test(h);
  const grises=/text-zinc-|text-gray-|text-slate-/.test(h);
  if(miss.length||nested||grises){bad++;console.log(v,'FALLA',{miss,nested,grises});}
  else console.log(v,'OK');
}
if(bad) throw new Error(bad+' variantes con fallas');
"
```

- [ ] **Step 2: Confirmar que la base quedó intacta**

```bash
git status --porcelain
```

Esperado: solo aparecen archivos `src/pages/v*.astro`. Si aparece `cv.ts`, `themes.css`, `tailwind.config.mjs`, el layout o el switcher, algún agente violó su frontera: revisar el diff antes de aceptarlo.

- [ ] **Step 3: Confirmar que `/` sigue oscuro e igual**

```bash
git diff --stat HEAD -- src/pages/index.astro src/layouts/BaseLayout.astro src/styles/global.css
```

Esperado: sin salida.

- [ ] **Step 4: Revisar las cinco en el navegador**

`npm run dev`, recorrer `/v1`…`/v5` y probar las cuatro paletas en cada una. Buscar: texto que se pierda, tarjetas rotas, desbordes horizontales en móvil.

- [ ] **Step 5: Commit**

```bash
git add src/pages/v2.astro src/pages/v3.astro src/pages/v4.astro src/pages/v5.astro
git commit -m "feat: variantes v2 a v5 del rediseño claro"
```

---

## Después de elegir

Fuera del alcance de este plan: portar la variante elegida a `index.astro`, fijar su paleta, y borrar las rutas `vN` y el switcher.
