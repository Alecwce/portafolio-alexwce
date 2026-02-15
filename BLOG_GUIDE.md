# Guía del Blog - Cómo Crear Nuevos Posts

Esta guía explica cómo crear y publicar nuevos posts en el blog usando MDX.

## ¿Qué es MDX?

MDX es Markdown + JSX. Te permite escribir contenido en Markdown y también usar componentes React dentro de tus posts.

## Estructura de un Post

Cada post debe ser un archivo `.mdx` ubicado en `src/content/blog/`.

### Frontmatter (Metadata)

Al inicio de cada archivo `.mdx`, debes incluir el frontmatter con la metadata del post:

```mdx
---
title: 'Título del Post'
description: 'Descripción breve que aparecerá en la card y meta tags'
date: '2025-12-26'
author: 'Tu Nombre'
tags: ['react', 'typescript', 'web']
coverImage: '/images/blog/my-cover.jpg'
slug: 'titulo-del-post'
---
```

**Campos obligatorios:**

- `title`: Título principal del post
- `description`: Descripción breve (150-200 caracteres ideal)
- `date`: Fecha en formato YYYY-MM-DD
- `author`: Nombre del autor
- `tags`: Array de tags (mínimo 1, máximo 5 recomendado)
- `slug`: URL-friendly identifier (debe coincidir con el nombre del archivo sin extensión)

**Campos opcionales:**

- `coverImage`: Ruta a imagen de portada

## Contenido MDX

Después del frontmatter, escribe el contenido usando Markdown:

```mdx
---
title: "Mi Post"
... frontmatter aquí ...
---

# Título Principal

Este es un párrafo con **texto en negrita** y _cursiva_.

## Subsección

- Lista item 1
- Lista item 2

### Código

Usa bloques de código con syntax highlighting:

\`\`\`typescript
const greeting: string = "Hola Blog!";
console.log(greeting);
\`\`\`

> Las citas se ven así

[Links externos](https://ejemplo.com)
```

## Componentes Personalizados

Los siguientes elementos Markdown tienen estilos personalizados:

- **Headings** (`h1`, `h2`, `h3`) - Con gradientes y tipografía premium
- **Code blocks** - Syntax highlighting con tema oscuro
- **Links** - Color violeta con hover effects
- **Blockquotes** - Borde lateral violeta
- **Imágenes** - Bordes redondeados y lazy loading

## Workflow para Crear un Post

### 1. Crear el archivo

```bash
cd src/content/blog
touch mi-nuevo-post.mdx
```

### 2. Agregar frontmatter y contenido

```mdx
---
title: 'Mi Nuevo Post'
description: 'Descripción del post'
date: '2025-12-26'
author: 'Alex'
tags: ['react', 'tutorial']
slug: 'mi-nuevo-post'
---

# Mi Nuevo Post

Contenido aquí...
```

### 3. Guardar y verificar

El sistema de build escaneará automáticamente el directorio `src/content/blog/` y detectará el nuevo post.

```bash
pnpm dev
# Visita http://localhost:3000/blog
```

### 4. Publicar

Una vez verificado localmente:

```bash
pnpm build
# Deploy to production
```

## Mejores Prácticas

### SEO

- Usa títulos descriptivos (50-60 caracteres)
- Descriptions de 150-160 caracteres
- Incluye keywords relevantes en tags

### Contenido

- **Headings**: Usa jerarquía correcta (h1 → h2 → h3)
- **Código**: Siempre especifica el lenguaje en code blocks
- **Imágenes**: Usa alt text descriptivo
- **Links**: Marca links externos apropiadamente

### Legibilidad

- Párrafos cortos (2-4 líneas)
- Usa listas para enumerar puntos
- Incluye ejemplos de código prácticos
- Usa blockquotes para destacar información importante

## Ejemplos de Código

### TypeScript

\`\`\`typescript
interface User {
name: string;
email: string;
}

const user: User = {
name: "Alex",
email: "alex@example.com"
};
\`\`\`

### React Component

\`\`\`tsx
export const Button: React.FC<{ label: string }> = ({ label }) => {
return (
<button className="btn-primary">
{label}
</button>
);
};
\`\`\`

### CSS

\`\`\`css
.custom-class {
background: linear-gradient(to right, #8b5cf6, #a855f7);
border-radius: 0.5rem;
}
\`\`\`

## Tags Recomendados

Usa tags consistentes para facilitar la navegación:

**Tecnologías:**

- `react`, `typescript`, `javascript`, `nodejs`, `nextjs`
- `tailwind`, `css`, `html`
- `vite`, `webpack`

**Categorías:**

- `tutorial`, `best practices`, `tips`
- `performance`, `accessibility`, `security`
- `web development`, `frontend`, `backend`

**Niveles:**

- `beginner`, `intermediate`, `advanced`

## Troubleshooting

### El post no aparece

1. Verifica que el archivo esté en `src/content/blog/`
2. Revisa que el frontmatter sea válido YAML
3. Asegúrate que el slug coincida con el nombre del archivo

### Errores de compilación

1. Revisa la sintaxis del frontmatter
2. Asegúrate que los code blocks estén cerrados correctamente
3. Verifica que no haya caracteres especiales sin escapar

### Imágenes no cargan

1. Coloca imágenes en `public/images/blog/`
2. Usa rutas absolutas: `/images/blog/mi-imagen.jpg`
3. Verifica que el archivo exista

## Recursos Adicionales

- [MDX Documentation](https://mdxjs.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Syntax Highlighting Languages](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md)

---

**¡Feliz blogging! 🚀**
