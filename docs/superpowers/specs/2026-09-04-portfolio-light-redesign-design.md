# Rediseño claro del portfolio — variantes paralelas

Fecha: 2026-09-04
Estado: aprobado en brainstorming, pendiente de implementación

## Problema

El portfolio (`src/pages/index.astro`, 537 líneas) es oscuro y cuesta leerlo. Causas concretas:

1. **Contraste bajo.** El cuerpo usa `text-zinc-400`/`text-zinc-500` sobre `#0b0b0c`; el footer usa `zinc-600`.
2. **Cuerpo a 14px.** Párrafos largos (bio, descripciones de proyecto) en `text-sm`.
3. **Ruido de color.** `tagClasses` rota 6 colores por índice: ~60 chips multicolor donde el color no significa nada.
4. **Contenido escondido.** El panel Projects es un `<details>` cerrado y cada proyecto es otro `<details>` cerrado: dos clics para leer un proyecto.
5. **Bloque "About me" denso.** Un `<dl>` de 9 filas que se lee como formulario.

## Objetivo

Producir cinco disposiciones alternativas, claras y legibles, en rutas `/v1`…`/v5`, para que el autor elija una. Mismo contenido que hoy; cambia la forma.

## Alcance

Dentro: paleta, tipografía, jerarquía, estructura de secciones dentro de la página, extracción de datos a un módulo compartido, logos de tecnologías y reagrupación del stack.

Fuera: cambiar textos del CV, agregar o quitar secciones de contenido, agregar dependencias, tocar `index.astro`. La ruta `/` sigue mostrando el sitio actual durante toda la comparación.

## Arquitectura

```
src/data/cv.ts                       datos extraídos de index.astro (única fuente)
public/logos/*.svg                   29 logos de tecnologías (Devicon)
src/styles/themes.css                4 paletas como variables CSS
src/components/PaletteSwitcher.astro selector flotante + navegación entre variantes
src/layouts/VariantLayout.astro      head, fuentes, reset, monta el switcher
src/pages/v1.astro … v5.astro        las 5 disposiciones
tailwind.config.mjs                  tokens nuevos apuntando a las variables CSS
```

`index.astro`, `BaseLayout.astro` y `global.css` no se modifican.

### Frontera de propiedad (crítica para el trabajo en paralelo)

Todo lo compartido —datos, tokens, paletas, layout, switcher— se construye **antes** de que empiecen las variantes. Cada variante es dueña de **exactamente un archivo**: `src/pages/vN.astro`. Ninguna variante edita `cv.ts`, `themes.css`, `tailwind.config.mjs`, el layout ni el switcher. Sin esta regla, cinco agentes en paralelo se pisan.

Si una variante necesita CSS propio, lo pone en un bloque `<style>` dentro de su propio `.astro`.

## Sistema de tokens

Las cuatro paletas definen el mismo juego de variables, guardadas como triples RGB para poder usar opacidad de Tailwind:

`--page` `--panel` `--hairline` `--fg` `--fg-soft` `--brand` `--on-brand`

En `tailwind.config.mjs` se exponen como `rgb(var(--page) / <alpha-value>)` bajo nombres nuevos (`page`, `panel`, `hairline`, `fg`, `fg-soft`, `brand`, `on-brand`). Los tokens existentes (`ink`, `surface`, `line`, `accent`, `accentSoft`) quedan intactos porque `BaseLayout.astro` los usa.

La paleta activa se selecciona con `data-palette` en `<html>`; cambiarla no recarga la página.

### Paletas (contraste WCAG verificado, no estimado)

| paleta | page | panel | hairline | fg | fg-soft | brand | on-brand |
|---|---|---|---|---|---|---|---|
| `papel` | `#FBFAF7` | `#FFFFFF` | `#E3E0D8` | `#1A1A18` | `#5A5750` | `#1D4ED8` | `#FFFFFF` |
| `niebla` | `#F2F4F5` | `#FFFFFF` | `#DCE1E3` | `#16191A` | `#52605E` | `#0F766E` | `#FFFFFF` |
| `lino` | `#FAF9FB` | `#FFFFFF` | `#E6E2EC` | `#1B1720` | `#58516A` | `#5B21B6` | `#FFFFFF` |
| `arcilla` | `#FAF4EC` | `#FFFDF9` | `#E8DCCB` | `#23180F` | `#6B5741` | `#A63D22` | `#FFFFFF` |

Medidos: `fg` sobre `page` de 15.89:1 a 16.81:1; `fg-soft` sobre `page` de 5.96:1 a 7.15:1; `brand` sobre `page` de 4.96:1 a 8.56:1; `on-brand` sobre `brand` de 5.47:1 a 8.98:1. Todos superan los mínimos de la sección siguiente.

## Reglas de legibilidad — obligatorias en las cinco variantes

Estas reglas son el objetivo del rediseño, no una preferencia estética. Ninguna variante las negocia.

1. Cuerpo mínimo 16px. Se permite 14px solo en metadatos cortos (etiquetas, chips, pies).
2. Texto principal ≥ 7:1 de contraste; texto secundario ≥ 4.5:1. Garantizado por los tokens: usar `fg` y `fg-soft`, nunca grises arbitrarios.
3. Los chips de stack llevan un solo estilo de contenedor (borde `hairline`, fondo `panel`, texto `fg`). El color de marca de los logos es la única excepción cromática permitida dentro del chip; el acento `brand` se reserva para links y para `specialTags` (`UTN-FRBA`, `Team project`).
4. Los proyectos se leen sin clics. Si una variante colapsa algo, colapsa solo el detalle largo y deja el resumen siempre visible. Prohibido anidar `<details>` dentro de `<details>`.
5. Párrafos a un ancho máximo de ~70 caracteres.
6. Se respeta `prefers-reduced-motion` en toda animación.
7. Foco visible en todo elemento interactivo.

## Las cinco disposiciones

| | Forma | Paleta por defecto |
|---|---|---|
| v1 | Editorial: lista vertical de proyectos, títulos serif, mucho aire | `papel` |
| v2 | Tarjetas suaves: grid abierto, sombras sutiles, bordes redondeados | `niebla` |
| v3 | Dos columnas: barra lateral fija con datos y contacto, contenido al lado | `lino` |
| v4 | Cálido personal: tipografía humanista, ritmo relajado | `arcilla` |
| v5 | Timeline: proyectos en línea de tiempo vertical | `papel` |

Todas cubren el mismo contenido: hero con nombre y rol, datos personales, bio, los 9 proyectos con stack y enlace al repo, familias de arquitectura, los tres grupos de `techGroups`, finanzas y mercados, contacto y pie.

## Stack con logos

`technologyGroups` (5 grupos) y `languages` se reemplazan por `techGroups`, con tres grupos: `Languages`, `Frameworks and libraries`, `Systems, data and tooling`. Las 46 tecnologías originales se conservan.

Cada entrada es `{ name, logo? }`. `logo` es el nombre de archivo dentro de `public/logos/`. 29 tecnologías tienen logo (Devicon, SVG, color oficial de marca); las 17 restantes no existen en Devicon y se muestran como chip de texto: `SQL`, `Jinja2`, `Spring MVC`, `Spring WebFlux`, `Spring Security`, `JPA`, `SQLModel`, `REST APIs`, `JWT`, `Sessions`, `scipy`, `statsmodels`, `dash`, `yfinance`, `pandas-ta`, `Beautiful Soup 4`, `lxml`.

Los logos son marcas registradas de sus dueños y se usan sin modificar, solo para señalar las tecnologías que el autor maneja.

## Selector de paleta

Componente flotante presente solo en las variantes. Cambia `data-palette` en `<html>` y persiste la elección en `localStorage`. Incluye una fila de enlaces `v1 … v5` para saltar entre variantes sin editar la URL. Al portar la variante ganadora a `/`, el switcher se elimina.

## Verificación

- `npm run build` termina sin errores.
- Las cinco rutas responden y renderizan el contenido completo.
- Ninguna variante contiene `<details>` anidado ni clases `text-zinc-*` de bajo contraste.
- El contraste de las paletas ya está verificado numéricamente (tabla anterior).

El proyecto no tiene suite de tests y no se agrega una para este trabajo.

## Después de elegir

Paso posterior, fuera de este spec: portar la variante elegida a `index.astro`, fijar su paleta, y borrar `src/pages/vN.astro` y el switcher.
