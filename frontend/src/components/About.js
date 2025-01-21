import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Rocket, Code, ChevronRight } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Frontend', description: 'HTML, CSS, React, React Native, Tailwind CSS, ElectronJS', color: 'purple' },
    { icon: <Database className="w-6 h-6" />, title: 'Backend', description: 'Node.js, Flask, FastAPI, SQL, MongoDB, PostgreSQL', color: 'blue' },
    { icon: <Brain className="w-6 h-6" />, title: 'AI/ML', description: 'Pandas, OpenCV, NLTK, NumPy, TensorFlow, PyTorch, LangChain', color: 'purple' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Tools', description: 'Git, Docker, AWS', color: 'blue' },
    { icon: <Code className="w-6 h-6" />, title: 'Skills', description: 'Frontend, Backend, Fullstack, AI ML, Data Science', color: 'purple' }
  ];

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">My Journey</h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p className="relative">
                <span className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                I'm a passionate Full Stack Developer and AI Engineer with experience in building modern web and mobile applications
                and implementing AI solutions. Currently working on innovative projects that combine cutting-edge web
                technologies with artificial intelligence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
            <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Quick Facts
                <ChevronRight className="w-5 h-5 text-purple-400" />
              </h3>
              <ul className="space-y-4">
                <QuickFact label="Frontend Developer" />
                <QuickFact label="Backend Developer" />
                <QuickFact label="Full Stack Developer" />
                <QuickFact label="AI Engineer" />
                <QuickFact label="Machine Learning Engineer" />
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              className="group relative cursor-pointer"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-md"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 rounded-lg ${
                      skill.color === 'purple' 
                        ? 'bg-gradient-to-br from-purple-500/20 to-purple-500/10' 
                        : 'bg-gradient-to-br from-blue-500/20 to-blue-500/10'
                    } text-white`}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const QuickFact = ({ label }) => (
  <motion.li
    className="flex justify-between items-center p-3 rounded-lg bg-white/5 backdrop-blur-sm transition-all duration-300"
    whileHover={{ 
      x: 5, 
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      scale: 1.02
    }}
    transition={{ duration: 0.2 }}
  >
    <span className="text-gray-400">{label}</span>
  </motion.li>
);

export default About;