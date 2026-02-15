import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './components/blog/BlogPost';

const App: React.FC = () => {
  const { theme } = useTheme();

  // Aplicar tema al root para View Transitions
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="min-h-screen transition-colors duration-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

