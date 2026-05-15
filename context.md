# CONTEXT - Portfolio + SaaS Project

## SOBRE MÍ

**Nombre:** Lauri  
**Edad:** 24 años  
**Localización:** Buenos Aires, Argentina  
**Carrera:** Ingeniero en Sistemas (UTN Buenos Aires) - Último año  

### Perfil
- Trader/Inversor en opciones y bonos argentinos
- Aprendiz autodidacta de finanzas cuantitativas
- Desarrollador full-stack (React, Next.js, Python, FastAPI)
- Interesado en fintech y SaaS

### Motivación Principal
Construir negocios SaaS en el cruce de tecnología y finanzas. Objetivo: 10M USD en 10 años.

---

## PROYECTOS EN PROGRESO

### 1. HASSELT - SaaS de Gestión de Canchas de Padel
**Estado:** MVP funcional, buscando primeros clientes  
**Objetivo:** Vender a 3+ canchas en enero 2026

**Tech Stack:**
- Frontend: Next.js + TypeScript + Tailwind
- Backend: Python + FastAPI
- Pagos: Stripe
- Base de datos: Supabase/PostgreSQL
- Auth: Clerk

**Features:**
- Dashboard de gestión de reservas
- Sistema de disponibilidad
- Integración con Stripe para pagos
- Login con Google/Facebook

**Próximos pasos:**
- Contactar propietarios de canchas
- Iterar basado en feedback real
- Agregar features de reportes

---

### 2. BOT DE ANÁLISIS DE BONOS ARGENTINOS
**Estado:** Idea en validación  
**Objetivo:** Monitorear bonos y alertar sobre oportunidades

**Tech Stack:**
- Backend: Python
- LLM: Claude API
- Base de datos: SQLite (local) o PostgreSQL
- Datos: Web scraping de brokers argentinos

**Features:**
- Monitorea precios de bonos en tiempo real
- Analiza tendencias con IA
- Envía alertas por email/Telegram
- Dashboard básico de seguimiento

**Próximos pasos:**
- Validar si hay gente que pagaría por esto
- Integrar APIs de brokers (Balanz, IOL)
- Crear versión free para ganar usuarios

---

### 3. TRADING DASHBOARD (Opciones)
**Estado:** En exploración  
**Objetivo:** Dashboard para análisis de opciones

**Features planeadas:**
- Visualización de IV (volatilidad implícita)
- Greeks (Delta, Gamma, Vega, Theta)
- Backtest de estrategias
- Copy-trading manual (ver portafolios de otros traders)

**Tecnología:**
- Frontend: React + TradingView Lightweight Charts
- Backend: Python con QuantLib
- Data: ROFEX API, Yahoo Finance

---

### 4. PORTFOLIO WEBSITE (Este proyecto)
**Estado:** A iniciar  
**Objetivo:** Mostrar proyectos, skills y conseguir oportunidades laborales

**Tech Stack:**
- Astro + TypeScript
- Tailwind CSS
- Vercel para hosting

**Contenido:**
- Hero section con presentación
- Sección de proyectos con GitHub links
- Stack tecnológico
- CV descargable
- Links a redes sociales

---

## STACK TECNOLÓGICO ACTUAL

### Frontend
- React / Next.js
- TypeScript
- Tailwind CSS
- Astro

### Backend
- Python
- FastAPI
- Node.js (JavaScript/TypeScript)

### Bases de datos
- PostgreSQL (Supabase)
- SQLite (local)
- Firebase (opcional)

### Finanzas
- Stripe (pagos)
- ROFEX API (opciones Argentina)
- Yahoo Finance (datos históricos)
- QuantLib (análisis cuantitativo)

### Herramientas IA
- Claude API (análisis, automación)
- GPT (alternativa)

### DevOps / Hosting
- Vercel (Next.js, Astro)
- GitHub para versionado
- Clerk para autenticación

---

## MERCADO Y OPORTUNIDADES

### Argentina
- Falta de herramientas fintech locales
- Traders operan en Excel o sin herramientas
- Comunidad de opciones en crecimiento (Discord, Telegram)

### Estrategia de validación
- Construir MVP rápido (48 horas máximo)
- Hablar con 20+ usuarios potenciales
- Si 5+ dicen "pagaría por esto", continuar
- Si no, pivotar a la siguiente idea

### Pricing esperado
- Bonos bot: USD 19-49/mes (freemium)
- Hasselt: USD 150-300/mes por cancha
- Trading dashboard: USD 29-99/mes

---

## FILOSOFÍA DE DESARROLLO

### Rapidez > Perfección
- MVP en horas, no semanas
- Shipping early and often
- Iterar basado en feedback real

### Stack simple
- Tecnologías probadas (no experimental)
- Menos librerías, más control
- Easy to maintain y scale

### Enfoque en usuarios
- Hablar con usuarios ANTES de desarrollar
- Una métrica principal por proyecto
- Pivot rápido si no hay demanda

---

## MÉTRICAS DE ÉXITO

### A corto plazo (próximos 3 meses)
- Portfolio website live y atrayendo candidatos
- 5+ clientes potenciales para Hasselt
- 50+ usuarios en lista de espera para Bonos bot

### A mediano plazo (6-12 meses)
- 1 SaaS con 10+ usuarios pagando
- USD 1000+/mes en MRR (Monthly Recurring Revenue)
- 50k+ followers en Twitter/X de contenido financiero

### A largo plazo (1-5 años)
- 1-2 SaaS escalados a 5-10k usuarios
- USD 10k-50k/mes en revenue
- Oportunidad de trabajo internacional (Londres/NYC)

---

## CONTEXT PARA DESARROLLO

### Cuando programes conmigo:
1. **Sé específico:** "Quiero crear X componente que haga Y"
2. **Menciona el stack:** "Usando Next.js + TypeScript"
3. **Sé pragmático:** Prefiero 80% listo hoy que 100% perfecto nunca
4. **Enfócate en MVP:** No agregues features "nice to have"
5. **Código limpio:** TypeScript + comentarios en puntos complejos

### Cosas que valoro:
- Código que pueda mantener solo
- Documentación inline (especialmente en lógica compleja)
- Soluciones simples antes que complicadas
- Testing en funcionalidad crítica (pagos, auth)

### Cosas que NO valoro:
- Perfeccionismo paraliza
- Over-engineering
- Dependencies innecesarias
- Código sin comentarios en Python/APIs

---

## EJEMPLOS DE PROMPTS QUE USARÉ

❌ "Hazme un dashboard"
✅ "Necesito un dashboard en React que muestre precios de bonos en tiempo real. Data viene de API JSON. Debe actualizar cada 30 segundos. Quiero charts simples, nada fancy."

❌ "Crea un bot"
✅ "Bot en Python que: 1) Lee CSV de bonos, 2) Calcula duration, 3) Envía email si duration > 5. Usa FastAPI para servir endpoints."

❌ "Agrega auth"
✅ "Necesito auth en Next.js usando Clerk. Users logueados ven su portafolio. Guests ven solo demo. Uso TypeScript."

---

## LINKS ÚTILES

- GitHub: https://github.com/tuuser (reemplazar con real)
- Twitter: https://twitter.com/tuuser (reemplazar con real)
- Email: tu@email.com

---

## NOTAS ÚLTIMAS

- Estoy aprendiendo constantemente
- Valoro feedback honesto sobre qué está mal
- Prefiero construir cosas imperfectas pero reales
- El mercado dirá si algo funciona, no yo pensando

**Última actualización:** Mayo 2026