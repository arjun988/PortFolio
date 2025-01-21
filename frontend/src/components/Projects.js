import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import {  Code2, Star, ChevronRight,ExternalLink } from 'lucide-react';
// import { FaGithub } from 'react-icons/fa';
import GitmindImage from '../project_images/Gitmind.png';
import Alab from '../project_images/Alab.png';
import C3D from '../project_images/C3D.png';
import HackMate from '../project_images/HackMate.png';
import DailyHub from '../project_images/DailyHub.png';
import Mutapro from '../project_images/MutaPro.png';
import Mutalite from '../project_images/MutaLite.png';
import StoryCraft from '../project_images/StoryCraft.jpeg';
import Nexus from '../project_images/Nexus.png';
import NFT from '../project_images/NFT.jpeg';
import Nike from '../project_images/Nike.jpeg';
import SystemSage from '../project_images/SystemSage.png';
import Numina from '../project_images/numina.png';

const projectData = [
  {
    title: 'Archetype Labs',
    description: 'Web Platform that integrates PlantUML , Mermaid etc to help developers with UML diagrams',
    tech: ['React', 'Tailwind CSS'],
    image: Alab,
    
    link:'https://archetype-lab.vercel.app/',
    category: ['Frontend', 'Web'],
    featured: true
  },
  {
    title: 'C3D',
    description: 'Compile Code and Debug , A platform to code with high efficeny',
    tech: ['React ', 'Tailwind CSS'],
    image: C3D,
    
    link:'https://c3-d.vercel.app/',
    category: ['Frontend', 'Web'],
    featured: true
  },
  {
    title: 'GitMind',
    description: 'AI-powered documentation generator that automatically creates comprehensive documentation for your GitHub repositories using advanced language models.',
    tech: ['React', 'TailwindCSS', 'LLM', 'flask', 'MongoDB'],
    image: GitmindImage,
    github: 'https://github.com/arjun988/GITMIND',
   
    category: ['AI', 'Web','Full Stack'],
    featured: true
  },
  {
    title: 'HackMate',
    description: 'Interactive platform that generates personalized programming challenges and provides real-time feedback using AI. Helps developers improve their coding skills.',
    tech: ['React', 'Flask', 'Python', 'SQL', 'TailwindCSS', 'LLM'],
    image: HackMate,
    github: 'https://github.com/arjun988/HackMate',
    
    category: ['AI', 'Web','Full Stack'],
    featured: true
  },
  {
    title: 'NuminaJS',
    description: 'A javascript library for Data Science',
    tech: ['javascript'],
    image: Numina,
  
    link:'https://www.npmjs.com/package/numinajs',
    category: ['package'],
    featured: true
  },
  {
    title: 'StoryCraft',
    description: 'AI-driven storytelling platform that helps writers generate creative ideas, develop plot lines, and get feedback on their writing through advanced NLP.',
    tech: ['React Native', 'Django', 'LLM', 'PostgreSQL'],
    image: StoryCraft,
    github: 'https://github.com/TechManTejas/StoryCraft_Client',
    
    category: ['AI', 'Mobile', 'Full Stack'],
    featured: true
  },
  {
    title: 'DailyHub',
    description: 'A News web application , with sleek UI and high performance. Modern UI design and UX practices',
    tech: ['React ', 'Tailwind CSS'],
    image: DailyHub,
   
    link:'https://daily-hub.vercel.app/',
    category: ['Frontend', 'Web'],
    featured: true
  },
  {
    title: 'Nexus',
    description: 'An AI Product landing page for selling products designed with modern practices of UI development',
    tech: ['React ', 'Tailwind CSS'],
    image: Nexus,
  
    link:'https://nexus-teal-omega.vercel.app/',
    category: ['Frontend', 'Web'],
    featured: true
  },
  {
    title: 'MutaCryptorLite',
    description: 'A Desktop based application that is used for code obfuscation designed for MutaEngine. It is developed using the best practices of UI and UX',
    tech: ['React ','ElectronJS', 'Tailwind CSS'],
    image: Mutalite,
    link:'https://mutaengine.cloud/mutaCryptorLite',
    category: ['Frontend', 'Desktop'],
    featured: true
  },
  {
    title: 'MutaCryptorPro',
    description: 'A Desktop based application that is used for code obfuscation of multiple files at a same time designed for MutaEngine. It is developed using the best practices of UI and UX',
    tech: ['React ','ElectronJS', 'Tailwind CSS'],
    image: Mutapro,
    link:'https://mutaengine.cloud/mutaCryptorPro',
    
    category: ['Frontend', 'Desktop'],
    featured: true
  },
  {
    title: 'NFT',
    description: 'An NFT selling and buying place . It is a frontend for mobile application with multiple screens that follows the best practices of UI ',
    tech: ['React Native ', 'Tailwind CSS'],
    image: NFT,
    github: 'https://github.com/arjun988/NFT',
    
    category: ['Frontend', 'Mobile'],
    featured: true
  },
  {
    title: 'Nike',
    description: 'Mobile application for Nike Products . It is a frontend for mobile application with multiple screens that follows the best practices of UI ',
    tech: ['React Native ', 'Tailwind CSS'],
    image: Nike,
    github: 'https://github.com/arjun988/NikeApp',
    
    category: ['Frontend', 'Mobile'],
    featured: true
  },
  {
    title: 'SystemSage',
    description: 'AI based virtual assistant for desktops integrated with OS and local enviorment of laptops',
    tech: ['React', 'Tailwind CSS', 'ElectronJS', 'Flask'],
    image: SystemSage,
    github: 'https://github.com/arjun988/SystemSage',
    
    category: ['Full Stack', 'Desktop'],
    featured: true
  },
];
const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projectData.flatMap(p => p.category))];

  const filteredProjects = projectData.filter(project =>
    filter === 'All' ? true : project.category.includes(filter)
  );

  return (
    <section id="projects" >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Animated background gradient */}
      

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 animate-text-shimmer">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work and personal projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                px-6 py-2 rounded-full transition-all duration-300 transform
                ${filter === category 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white scale-105 shadow-lg shadow-purple-500/25' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:scale-105'}
                hover:shadow-lg hover:shadow-purple-500/20
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative rounded-xl overflow-hidden 
        transition-all duration-500 ease-out
        bg-gradient-to-br from-white/10 to-white/5
        hover:from-white/15 hover:to-white/10
        hover:shadow-xl hover:shadow-purple-500/20
        transform hover:-translate-y-2
      `}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1 bg-purple-500 rounded-full text-white text-sm font-medium animate-pulse">
          <Star className="w-4 h-4" />
          Featured
        </div>
      )}

      {/* Image container with overlay */}
      <div className="relative overflow-hidden h-48">
        <div className={`
          absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
          transition-opacity duration-300
          ${isHovered ? 'opacity-70' : 'opacity-50'}
        `} />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="relative p-6 space-y-4">
        <h3 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            {project.title}
          </span>
        </h3>

        <p className="text-gray-400 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full
                transition-all duration-300
                hover:bg-purple-500/20 hover:text-purple-200
                hover:shadow-lg hover:shadow-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400
                transition-all duration-300 hover:scale-110"
            >
              <Code2 className="w-5 h-5" />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400
                transition-all duration-300 hover:scale-110"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm">Live Demo</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;