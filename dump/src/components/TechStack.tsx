import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { BlurFade } from './ui/BlurFade';
import { Download, Eye } from 'lucide-react';
import styles from '../styles/TechStack.module.css';

const techStack = [
  { name: "Anaconda", icon: "/tech-icons/Anaconda.svg" },
  { name: "Arc", icon: "/tech-icons/arc.svg" },
  { name: "Colab", icon: "/tech-icons/Colab.svg" },
  { name: "Git", icon: "/tech-icons/github.svg" },
  { name: "Gradio", icon: "/tech-icons/Gradio.svg" },
  { name: "HuggingFace", icon: "/tech-icons/HuggingFace.svg" },
  { name: "Jupyter", icon: "/tech-icons/Jupyter.svg" },
  { name: "Kaggle" , icon: "/tech-icons/Kaggle.svg" },
  { name: "Langchain" , icon: "/tech-icons/Langchain.svg" },
  { name: "LMStudio" , icon: "/tech-icons/LMStudio.svg" },
  { name: "Notion" , icon: "/tech-icons/Notion.svg" },
  { name: "Numpy" , icon: "/tech-icons/Numpy.svg" },
  { name: "Pandas" , icon: "/tech-icons/Pandas.svg" },
  { name: "Python", icon: "/tech-icons/Python.svg" },
  { name: "PyTorch", icon: "/tech-icons/PyTorch.svg"},
  { name: "ScikitLearn" , icon: "/tech-icons/ScikitLearn.svg" },
  { name: "Streamlit" , icon: "/tech-icons/Streamlit.svg" },
  { name: "TensorFlow", icon: "/tech-icons/TensorFlow.svg"},
  { name: "VS Code", icon: "/tech-icons/vscode.svg" }
];

export function TechStack() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="space-y-4">
      {/* Resume Section */}
      <motion.div
        className={styles.itemGrab}
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
          <div className={styles.item}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    2024 CV
                  </h3>
                  <p className="text-2xl font-bold text-white mt-1">
                    RESUME
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/resume.pdf"
                    download
                    className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <Download className="w-5 h-5 text-gray-400" />
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <Eye className="w-5 h-5 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        className={styles.itemGrab}
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
        <BlurFade delay={0.35}>
          <div className={styles.item}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    Currently Using
                  </h3>
                  <p className="text-2xl font-bold text-white mt-1">
                    TECH I <span className="text-red-500">♥</span>
                  </p>
                </div>
              </div>
              <div className="h-32 overflow-hidden">
                <Marquee
                  speed={40}
                  gradient={false}
                  className="py-2"
                >
                  <div className="flex gap-10 px-4">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="flex items-center justify-center w-20 h-20 bg-gray-800/50 rounded-2xl 
                                 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 
                                 transition-all duration-300 hover:bg-gray-700/50 group"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          title={tech.name}
                          className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </BlurFade>
      </motion.div>
    </div>
  );
} 