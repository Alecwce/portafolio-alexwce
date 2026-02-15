import React from 'react';
import type { BlogPost, BlogPostMetadata } from '../types/blog';

// Este archivo será actualizado dinámicamente con las importaciones de posts
// Por ahora, lo dejamos preparado para importar posts MDX

const postModules = import.meta.glob<{
  frontmatter: BlogPostMetadata;
  default: React.ComponentType;
}>('../content/blog/*.mdx', { eager: true });

export const getAllPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];

  for (const path in postModules) {
    const module = postModules[path];
    const slug = path.replace('../content/blog/', '').replace('.mdx', '');
    
    posts.push({
      slug,
      ...module.frontmatter,
      content: module.default,
    });
  }

  // Ordenar por fecha descendente (más recientes primero)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
};

export const getAllTags = (): string[] => {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  const posts = getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
};
