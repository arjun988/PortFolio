import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Rocket, Code } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Frontend', description: 'HTML , CSS , React, React Native , Tailwind CSS, ElectronJS ', color: 'purple' },
    { icon: <Database className="w-6 h-6" />, title: 'Backend', description: 'Node.js, Flask,FastAPI ,SQL , MongoDB, PostgreSQL', color: 'blue' },
    { icon: <Brain className="w-6 h-6" />, title: 'AI/ML', description: 'Pandas, OpenCV ,NLTK ,NumPy ,TensorFlow, PyTorch, LangChain', color: 'purple' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Tools', description: 'Git, Docker, AWS', color: 'blue' },
    { icon: <Code className="w-6 h-6" />, title: 'Skills', description: 'Frontend , Backend , Fullstack , AI ML, Data Science ', color: 'purple' }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 relative"
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">My Journey</h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                I'm a passionate Full Stack Developer and AI Engineer with experience in building modern web and mobile applications
                and implementing AI solutions. Currently working on innovative projects that combine cutting-edge web
                technologies with artificial intelligence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <QuickFact label="Frontend Developer"  />
                <QuickFact label="Backend Developer"  />
                <QuickFact label="Full Stack Developer" />
                <QuickFact label="AI Engineer" />
                <QuickFact label="Machine Learning Engineer" />
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 rounded-lg ${skill.color === 'purple' ? 'bg-gradient-to-br from-purple-500/20 to-purple-500/10' : 'bg-gradient-to-br from-blue-500/20 to-blue-500/10'} text-white`}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const QuickFact = ({ label}) => (
  <motion.li
    className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
    whileHover={{ x: 5 }}
  >
    <span className="text-gray-400">{label}</span>
   
  </motion.li>
);

export default About;
