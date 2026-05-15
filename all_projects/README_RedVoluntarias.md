[Repositorio](https://github.com/Laureano11/red-voluntarias)
* Launch: https://red-voluntarias.pages.dev/
# Red Voluntarias — Guía de Inicio Rápido

Web institucional de **Red Voluntarias**, una ONG dedicada al rescate, rehabilitación y adopción responsable de animales en situación de calle. Este documento te guía paso a paso para clonar y ejecutar el proyecto localmente.

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| **Astro** | 5.x | Framework para generar sitios estáticos ultrarrápidos |
| **Tailwind CSS** | 4.x | Estilos utilitarios modernos (bajo peso final) |
| **TypeScript** | — | Tipado estático para mayor seguridad |
| **Node.js** | 18+ | Runtime de JavaScript |
| **npm** | 9+ | Gestor de dependencias |
| **Sveltia CMS** | — | Panel visual para editar contenido sin código |

**Características clave:** Sitio 100% estático, hospedable en cualquier servidor (Cloudflare, Netlify, etc.), sin base de datos ni backend.

---

## 📋 Requisitos Previos

Antes de empezar, verifica que tengas instalado:

- **Node.js** 18.17.1 o superior  
  Descargá desde [nodejs.org](https://nodejs.org/) o usa un gestor de versiones como [nvm](https://github.com/nvm-sh/nvm).

- **npm** 9.x o superior (incluido con Node.js)

- **Git** 2.x o superior  
  Descargá desde [git-scm.com](https://git-scm.com/) o instalá con tu gestor de paquetes.

### Verificar que todo está instalado

Abre una terminal (PowerShell, Terminal, bash, etc.) y ejecuta:

```bash
node --version      # debe mostrar v18.17.1 o superior
npm --version       # debe mostrar 9.x o superior
git --version       # debe mostrar 2.x o superior
```

Si alguno no aparece, instalálo antes de continuar.

---

## 🚀 Pasos para Ejecutar Localmente

### Paso 1: Clonar el Repositorio

Abre una terminal en la carpeta donde quieras guardar el proyecto y ejecuta:

```bash
git clone https://github.com/Laureano11/red-voluntarias.git
cd red-voluntarias
```


### Paso 2: Instalar Dependencias

Sigue en la misma terminal (dentro de la carpeta `red-voluntarias`) y ejecuta:

```bash
npm ci
```
Este paso descargará todas las librerías necesarias. Tardará entre 1 y 3 minutos dependiendo de tu conexión.

### Paso 3: Ejecutar el Servidor de Desarrollo


```bash
npm run dev
```
Abre tu navegador y entra a **[http://localhost:4321](http://localhost:4321)**. ¡El sitio ya está corriendo! 🎉

### Paso 4 (Opcional): Acceder al Panel de Administración (CMS)

El sitio incluye **Sveltia CMS**, un panel visual para editar contenido sin tocar código. Durante el desarrollo local, está disponible en:

```
http://localhost:4321/admin/
```
Aquí podes:
- Agregar/editar perros en adopción
- Crear campañas de donación
- Publicar eventos realizados
- Gestionar urgencias

Con el CMS:
- Todos los cambios se guardas en archivos JSON
- No necesitas reiniciar el servidor
- Los cambios aparecen automáticamente en el sitio

---

## 🏗️ Compilar para Producción

Cuando quieras generar la versión final (para publicar en internet), ejecuta:

```bash
npm run build
```

Esto:
1. Compila el sitio a HTML, CSS y JavaScript estático
2. Optimiza todas las imágenes y assets
3. Genera el resultado en una carpeta `dist/`

El contenido de `dist/` es lo que se sube a un servidor web (Cloudflare, Netlify, GitHub Pages, etc.). ¡Eso es todo lo que necesitas!

**Para previsualizar cómo se verá en producción**, ejecuta:

```bash
npm run preview
```

Esto sirve el contenido compilado en `http://localhost:4321` para que veas exactamente cómo lucirá online.

---

## 📁 Estructura del Proyecto

Aquí está la carpeta principal explicada:

```
red-voluntarias/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.astro     # Navegación
│   │   ├── Footer.astro     # Pie de página
│   │   ├── DogCard.astro    # Tarjeta de perro
│   │   └── ...
│   │
│   ├── content/             # Contenido editable (vía CMS)
│   │   ├── dogs/            # JSON por cada perro
│   │   ├── campaigns/       # Campañas de donación
│   │   ├── eventos/         # Eventos realizados
│   │   ├── en-familia/      # Adoptados
│   │   ├── urgencias/       # Casos urgentes
│   │   └── ventas/          # Productos
│   │
│   ├── pages/               # Páginas del sitio (rutas)
│   │   ├── index.astro      # Página principal
│   │   ├── adopciones/adoptar.astro    # Catálogo de perros
│   │   ├── campanas.astro   # Campaña de donaciones
│   │   ├── proyectos.astro  # Proyectos de la ONG
│   │   ├── contacto.astro   # Formulario de contacto
│   │   └── ...
│   │
│   ├── layouts/             # Plantillas base
│   │   └── Layout.astro     # Layout principal del sitio
│   │
│   ├── styles/              # Estilos CSS
│   │   └── global.css       # Tailwind + estilos globales
│   │
│   └── config/              # Configuraciones y constantes
│       └── *.ts             # URLs, datos, etc.
│
├── public/                  # Archivos públicos
│   ├── admin/               # Panel de administración (Sveltia CMS)
│   └── images/              # Imágenes estáticas
│
├── dist/                    # Generado por build (NO tocar)
│
├── package.json             # Dependencias del proyecto
├── tsconfig.json            # Configuración de TypeScript
├── astro.config.mjs         # Configuración de Astro
└── README.md                # (este archivo)
```

### Carpeta `src/content/`: Cómo se organizan los datos

Cada página principal (Adopciones, Campañas, Ventas, etc.) obtiene su contenido de archivos JSON organizados por tipo:

- **dogs/** → Perros individuales disponibles para adoptar
- **campaigns/** → Campañas de donación activas
- **eventos/** → Eventos ya realizados (galerías)
- **en-familia/** → Perros ya adoptados
- **urgencias/** → Casos que necesitan atención urgente
- **ventas/** → Productos para vender

Cuando entras al CMS (`/admin`), es este contenido el que editas. Los cambios se guardan como JSON y aparecen automáticamente en el sitio.

---

## 📝 Comandos Disponibles

Resume de todos los comandos que podes usar:

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Inicia servidor local en `http://localhost:4321` (con hot reload) |
| `npm run build` | Compila el sitio a `dist/` (versión optimizada para producción) |
| `npm run preview` | Sirve el contenido compilado en `http://localhost:4321` para testing |
| `npm run astro` | Acceso directo a comandos de Astro avanzados |

