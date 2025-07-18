import React from 'react';
import { motion } from 'framer-motion';

interface BlurFadeProps {
  children: React.ReactNode;
  delay?: number;
}

export function BlurFade({ children, delay = 0 }: BlurFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
} 