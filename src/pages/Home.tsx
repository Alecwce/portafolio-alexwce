import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';

const About = lazy(() => import('../components/About'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Footer = lazy(() => import('../components/Footer'));

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="overflow-hidden">
          <Marquee 
            items={['ReactJS', 'TypeScript', 'NextJS', 'Tailwind', 'ThreeJS', 'WebGL']} 
            variant="primary"
            rotate={-1}
          />
        </div>
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center font-mono text-gray-400">Loading Section...</div>}>
          <About />
          <Portfolio />
          <div className="overflow-hidden">
            <Marquee 
              items={['HABLEMOS', 'COLABOREMOS', 'DI HOLA', 'EMPECEMOS ALGO']} 
              variant="dark"
              rotate={0}
            />
          </div>
          <Footer time={new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
          })} />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
