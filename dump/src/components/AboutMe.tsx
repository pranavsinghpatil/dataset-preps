import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react'; // Import icons as needed
import styles from './AboutMe.module.css'; // Create a CSS module for styling if needed
import BlurFade from './ui/BlurFade'; // Adjust the import based on your file structure

const AboutMe = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      className="space-y-4"
      style={{
        transitionDuration: isMounted ? "500ms" : "0ms"
      }}
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      dragElastic={0.1}
    >
      <BlurFade delay={0.25}>
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="flex items-center mb-4">
            {/* Avatar Container */}
            <div className="relative w-32 h-32 mr-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse-slow" />
              <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 
                            group-hover:opacity-100 transition duration-1000" />
              
              <div className="relative w-full h-full rounded-full bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800/50
                            flex items-center justify-center overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="src/static/avatar.png" // Replace with your avatar image path
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-full" // Ensure it fits well
                />
              </div>
            </div>

            {/* Name and Tagline */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Hi, I'm Pranav
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4 pt-4">
                Computer Engineering Student | AI/ML Enthusiast
              </p>
            </div>
          </div>

          {/* Information Paragraph */}
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a dedicated tech enthusiast driven by curiosity and innovation.<br />
            Balancing advanced studies in AI, I'm here to transform challenges into opportunities.
          </p>
        </div>
      </BlurFade>

      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800/50 transition-colors text-gray-300 font-medium"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-white font-medium flex items-center gap-2"
        >
          View My Work
        </a>
      </div>
    </motion.div>
  );
};

export default AboutMe; 