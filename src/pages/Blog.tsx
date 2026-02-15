import React from 'react';
import Navbar from '../components/Navbar';
import BlogList from '../components/blog/BlogList';

const Blog: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <BlogList />
      </main>
    </>
  );
};

export default Blog;
