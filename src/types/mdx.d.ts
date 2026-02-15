declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';
  
  export const frontmatter: {
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    coverImage?: string;
    slug: string;
  };
  
  export default function MDXContent(props: MDXProps): JSX.Element;
}
