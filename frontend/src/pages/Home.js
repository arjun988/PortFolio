import React from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="relative w-full">
      <div className="w-full">
        <Intro />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </div>

      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default Home;
