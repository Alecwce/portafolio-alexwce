import React from 'react';

export const MDXComponents = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 
      className="text-4xl md:text-5xl font-display font-bold mb-6 mt-12 first:mt-0 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent"
      {...props}
    >
      {children}
    </h1>
  ),
  
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 
      className="text-3xl md:text-4xl font-display font-bold mb-4 mt-10 text-gray-900 dark:text-gray-100"
      {...props}
    >
      {children}
    </h2>
  ),
  
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 
      className="text-2xl md:text-3xl font-display font-semibold mb-3 mt-8 text-gray-800 dark:text-gray-200"
      {...props}
    >
      {children}
    </h3>
  ),
  
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p 
      className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300"
      {...props}
    >
      {children}
    </p>
  ),
  
  a: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      href={href}
      className="text-violet-500 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-300 underline underline-offset-4 decoration-2 transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul 
      className="list-disc list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300"
      {...props}
    >
      {children}
    </ul>
  ),
  
  ol: ({ children, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol 
      className="list-decimal list-inside mb-6 space-y-2 text-gray-700 dark:text-gray-300"
      {...props}
    >
      {children}
    </ol>
  ),
  
  li: ({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li 
      className="ml-4 leading-relaxed"
      {...props}
    >
      {children}
    </li>
  ),
  
  blockquote: ({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote 
      className="border-l-4 border-violet-500 pl-6 py-2 my-6 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 rounded-r-lg"
      {...props}
    >
      {children}
    </blockquote>
  ),
  
  code: ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    // Inline code
    const isInline = !className?.includes('language-');
    
    if (isInline) {
      return (
        <code 
          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-violet-600 dark:text-violet-400 rounded font-mono text-sm"
          {...props}
        >
          {children}
        </code>
      );
    }
    
    // Code block (handled by pre)
    return <code className={className} {...props}>{children}</code>;
  },
  
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre 
      className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto mb-6 shadow-lg border border-gray-800"
      {...props}
    >
      {children}
    </pre>
  ),
  
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img 
      src={src}
      alt={alt || ''}
      className="rounded-lg my-8 w-full shadow-xl"
      loading="lazy"
      {...props}
    />
  ),
  
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr 
      className="my-12 border-gray-300 dark:border-gray-700"
      {...props}
    />
  ),
  
  table: ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-8">
      <table 
        className="min-w-full divide-y divide-gray-300 dark:divide-gray-700"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  
  th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th 
      className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
      {...props}
    >
      {children}
    </th>
  ),
  
  td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td 
      className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300"
      {...props}
    >
      {children}
    </td>
  ),
};

export default MDXComponents;
