import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

// Improved Intro component with typing animation and parallax effects
const Intro = () => {
  const [typed, setTyped] = useState('');
  const fullText = "Full Stack Developer & AI Engineer";
  const additionalText = "The Developer You Need";
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typed.length < fullText.length) {
        setTyped(fullText.slice(0, typed.length + 1));
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [typed]);

  return (
    <section className="min-h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <motion.div
        style={{ y }}
        className="text-center px-4 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-2xl" />
          <h1 className="text-6xl md:text-8xl font-bold relative">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Arjun Shukla
            </span>
          </h1>
        </motion.div>

        <motion.p className="text-xl md:text-2xl text-gray-400 mb-4 font-light h-8">
          {typed}
          <span className="animate-blink">|</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-400 font-light mb-3"
        >
          {additionalText}
        </motion.p>

        <SocialLinks />
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

const SocialLinks = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.8 }}
    className="flex gap-8 justify-center"
  >
    {[
      { href: "https://github.com/arjun988/", icon: <FaGithub className="w-6 h-6" />, label: "GitHub" },
      { href: "https://www.linkedin.com/in/arjun-shukla-1a6579227/", icon: <FaLinkedinIn className="w-6 h-6" />, label: "LinkedIn" },
      { href: "mailto:arjunshukla6558@gmail.com", icon: <Mail className="w-6 h-6" />, label: "Email" }
    ].map((link, index) => (
      <SocialLink key={index} {...link} />
    ))}
  </motion.div>
);

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-4 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      whileHover={{ scale: 1.2 }}
    />
    <div className="relative text-gray-300 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
      {label}
    </span>
  </motion.a>
);

const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="absolute bottom-12"
  >
    <motion.div
      animate={{
        y: [0, 10, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="cursor-pointer"
    >
      <ArrowDown className="w-8 h-8 text-gray-400" />
    </motion.div>
  </motion.div>
);

export default Intro;
