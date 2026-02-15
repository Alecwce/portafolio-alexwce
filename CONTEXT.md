# CONTEXT.md

## 📋 Contexto del Proyecto

Este documento proporciona información detallada sobre la arquitectura, decisiones de diseño y contexto técnico del portafolio personal.

---

## 🎯 Propósito del Proyecto

Portafolio profesional moderno y minimalista para mostrar proyectos destacados, habilidades técnicas y experiencia como desarrollador Front-end. El sitio está optimizado para rendimiento, accesibilidad y experiencia de usuario premium.

---

## 🏗️ Arquitectura Técnica

### Stack Tecnológico

**Core:**

- **React 19.2.3** - Librería principal con últimas características
- **TypeScript 5.8.2** - Tipado estático para mayor robustez
- **Vite 6.2.0** - Build tool ultrarrápido con HMR optimizado

**Styling:**

- **Tailwind CSS 4.1.18** - Framework utility-first para diseño responsivo
- **Framer Motion 12.23** - Animaciones fluidas y transiciones profesionales

**Formularios & Validación:**

- **React Hook Form 7.69** - Gestión eficiente de formularios
- **Zod 4.2.1** - Validación de esquemas con TypeScript-first

**UI Components:**

- **Lucide React** - Iconos SVG optimizados y consistentes

### Estructura del Proyecto

```
src/
├── components/          # Componentes React modulares
│   ├── About.tsx       # Sección "Sobre mí"
│   ├── ContactForm.tsx # Formulario de contacto
│   ├── EmailContact.tsx # Sección de email
│   ├── Footer.tsx      # Pie de página con hora local
│   ├── Hero.tsx        # Sección principal/hero
│   ├── Marquee.tsx     # Cinta animada de tecnologías
│   ├── Navbar.tsx      # Navegación principal
│   ├── Portfolio.tsx   # Galería de proyectos
│   ├── ProjectCard.tsx # Tarjeta individual de proyecto
│   ├── ThemeToggle.tsx # Switch dark/light mode
│   └── Tools.tsx       # Herramientas tecnológicas
├── data/
│   └── projects.ts     # Data source para proyectos
├── hooks/              # Custom React Hooks
│   ├── useTheme.ts     # Manejo de tema oscuro/claro
│   ├── useTime.ts      # Hook para hora en tiempo real
│   └── useTypewriter.ts # Efecto máquina de escribir
├── App.tsx             # Componente principal
├── index.tsx           # Entry point
└── index.css           # Estilos globales y tema Tailwind
```

---

## 🎨 Decisiones de Diseño

### Sistema de Colores

```css
--color-primary: #8b5cf6 /* Violet-500 - Acento principal */
  --color-bg-light: #f8f8f8 /* Fondo modo claro */ --color-bg-dark: #050505
  /* Fondo modo oscuro */ --color-text-light: #1a1a1a /* Texto modo claro */
  --color-text-dark: #ededed /* Texto modo oscuro */;
```

### Tipografías

- **Display:** `Syne` - Títulos grandes y headline
- **Sans:** `Inter` - Texto general y párrafos
- **Mono:** `JetBrains Mono` - Código y detalles técnicos

### Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

---

## ⚡ Características Principales

### 1. Dark Mode Nativo

- Switch suave con View Transitions API
- Persistencia en localStorage
- Animación circular desde el punto de clic

### 2. Animaciones Premium

- Parallax scrolling en Hero
- Framer Motion para micro-interacciones
- Marquee infinito con tecnologías
- Hover states elaborados

### 3. Optimización de Rendimiento

- Lazy loading de secciones (About, Portfolio, Footer)
- Code splitting automático con Vite
- Suspense boundaries para carga progresiva
- Imágenes optimizadas

### 4. Accesibilidad (A11y)

- Navegación por teclado completa
- ARIA labels en componentes interactivos
- Contraste WCAG AA compliant
- Semántica HTML correcta

### 5. Formulario de Contacto

- Validación client-side con Zod
- React Hook Form para UX fluida
- Sanitización de inputs
- Estados de error descriptivos

---

## 🔧 Custom Hooks

### `useTheme`

Gestiona el tema dark/light con:

- Detección de preferencia del sistema
- Persistencia en localStorage
- Sincronización con document.documentElement

### `useTime`

Muestra hora local en tiempo real:

- Actualización cada segundo
- Formato 12h con AM/PM
- Zona horaria local del usuario

### `useTypewriter`

Efecto máquina de escribir:

- Velocidad configurable
- Pausa al completar texto
- Cursor parpadeante

---

## 📦 Proyectos Destacados

1. **Service Desk PuntoNet**
   - Sistema de mesa de ayuda empresarial
   - React, TypeScript, Node.js

2. **Sitio Web Institucional**
   - Página para institución educativa
   - Astro, Tailwind, SEO optimizado

3. **Portal Empresa de Internet**
   - Plataforma corporativa para ISP
   - React, Next.js, UI/UX moderno

4. **App Anti-Robo IMEI**
   - App móvil de seguridad
   - React Native, Firebase, Security

---

## 🚀 Scripts Disponibles

```bash
pnpm dev      # Servidor desarrollo en localhost:3000
pnpm build    # Build producción optimizado
pnpm preview  # Preview build de producción
```

---

## 📝 Notas Técnicas Importantes

### Overflow Management

- Hero section usa `overflow-x-hidden` para prevenir scroll horizontal
- Marquee components envueltos en containers con `overflow-hidden`
- Rotación de elementos manejada cuidadosamente para evitar desbordamiento

### Animations Performance

- `will-change` usado estratégicamente
- Transforms para animaciones GPU-accelerated
- IntersectionObserver para animaciones on-scroll

### Theme Transitions

- View Transitions API para smooth theme switching
- Fallback para navegadores sin soporte
- Clip-path circular desde posición del mouse

---

## 🔐 Seguridad

- Validación de formularios con Zod schemas
- Sanitización de inputs del usuario
- No hay API keys expuestas en el cliente
- CSP-ready structure

---

## 📚 Recursos Adicionales

- **Línea temporal:** 2023 - 2025
- **Email contacto:** iialex221@gmail.com
- **Repositorio:** github.com/Alecwce/portafolio-lx

---

## 🎯 Próximas Mejoras Sugeridas

- [x] Implementar blog con MDX
- [ ] Agregar analytics con Vercel/Plausible
- [ ] Sistema de internacionalización (i18n)
- [ ] PWA capabilities
- [ ] Tests con Vitest + Testing Library
- [ ] Storybook para component library

---

## 📝 Blog con MDX

El portafolio incluye un sistema de blog completo implementado con MDX:

**Stack del Blog:**

- **MDX** - Markdown + JSX para contenido dinámico
- **React Router DOM** - Navegación entre páginas
- **Syntax Highlighting** - rehype-highlight para código
- **Markdown Enhancements** - remark-gfm, rehype-slug, rehype-autolink-headings

**Rutas:**

- `/` - Home con portafolio completo
- `/blog` - Listado de posts
- `/blog/:slug` - Post individual

**Componentes:**

- `BlogList` - Grid de posts con animaciones
- `BlogPost` - Vista individual con metadata
- `MDXComponents` - Componentes personalizados para markdown

**Ver:** [`BLOG_GUIDE.md`](file:///home/alexwce/Documentos/portafolio/alxwce-portfolio/BLOG_GUIDE.md) para guía completa de creación de posts.

---

**Última actualización:** Diciembre 2025
