import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { getPostBySlug } from '../../utils/blog';
import { MDXComponents } from './MDXComponents';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Post no encontrado
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-violet-500 hover:text-violet-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const Content = post.content;

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver al blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            {post.description}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-500 pb-8 border-b border-gray-200 dark:border-gray-800">
            <span className="flex items-center gap-2">
              <User size={18} />
              <span className="font-medium">{post.author}</span>
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </span>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <Content components={MDXComponents} />
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Ver todos los posts
          </Link>
        </motion.footer>
      </article>
    </div>
  );
};

export default BlogPost;
