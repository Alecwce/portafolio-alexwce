import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBlog = location.pathname.startsWith('/blog');

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference text-white"
      aria-label="Navegación principal"
    >
      <Link 
        to="/" 
        className="font-display font-bold text-sm md:text-lg tracking-widest uppercase hover:text-primary transition-colors" 
        aria-label="Logo de marca"
      >
        Alexwce
      </Link>
      
      <div className="hidden md:flex gap-12 font-medium text-xs tracking-widest uppercase" role="menubar">
        {isHome ? (
          <>
            <a href="#work" className="hover:text-primary transition-colors focus-visible:outline-white" role="menuitem">Proyectos</a>
            <a href="#about" className="hover:text-primary transition-colors focus-visible:outline-white" role="menuitem">Sobre mí</a>
            <a href="#contact" className="hover:text-primary transition-colors focus-visible:outline-white" role="menuitem">Contacto</a>
          </>
        ) : (
          <>
            <Link to="/" className="hover:text-primary transition-colors focus-visible:outline-white" role="menuitem">Inicio</Link>
          </>
        )}
        <Link 
          to="/blog" 
          className={`hover:text-primary transition-colors focus-visible:outline-white ${isBlog ? 'text-primary' : ''}`} 
          role="menuitem"
        >
          Blog
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <ThemeToggle />
        <Link 
          to="/blog"
          className="hidden md:block text-xs font-bold tracking-widest cursor-pointer hover:underline focus-visible:outline-white"
          aria-label="Explorar blog"
        >
          EXPLORAR
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;

