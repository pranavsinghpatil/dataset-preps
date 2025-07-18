// Hero.tsx
import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { TechStack } from './TechStack';
import AnimatedContent from './AnimatedContent'; // Import the AnimatedContent component
import AboutMe from './AboutMe'; // Import the AboutMe component

export function Hero() {
  useEffect(() => {
    // Create neural network animation
    const canvas = document.getElementById('neural-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const numNodes = 50;
    const connectionDistance = 150;
    
    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    // Animation function
    function animate() {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.fill();
      });
      
      // Draw connections
      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach(node2 => {
          const dx = node2.x - node1.x;
          const dy = node2.y - node1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            const opacity = (1 - distance / connectionDistance) * 0.2;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#0A0A0A] text-white overflow-hidden">
      {/* AI/ML themed background */}
      <div className="absolute inset-0">
        {/* Neural network animation canvas */}
        <canvas 
          id="neural-canvas" 
          className="absolute inset-0 opacity-20"
        />

        {/* Data flow lines */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="data-flow"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                height: `${Math.random() * 100 + 50}px`
              }}
            />
          ))}
        </div>

        {/* Matrix-like binary overlay */}
        <div className="absolute inset-0 bg-neural-pattern opacity-5" />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col items-start">
          {/* Flex container for Avatar and Animated Content */}
          <div className="flex items-center mb-4">
            {/* Avatar Container */}
            <div className="relative w-32 h-32 mr-4">
              {/* Animated background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse-slow" />
              <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 
                            group-hover:opacity-100 transition duration-1000" />
              
              {/* Avatar container */}
              <div className="relative w-full h-full rounded-full bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800/50
                            flex items-center justify-center overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {/* Your avatar image */}
                <img
                  src="src/static/avatar.png" // Replace with your avatar image path
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-full" // Ensure it fits well
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/10 rounded-full blur-sm animate-float" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/10 rounded-full blur-sm animate-float-delayed" />
            </div>

            {/* Use AnimatedContent component */}
            <AnimatedContent />
          </div>

          {/* Information Paragraph */}
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-4 pt-4">
            <i>I'm a dedicated tech enthusiast driven by curiosity and innovation.<br />
            Balancing advanced studies in AI, I'm here to transform challenges into opportunities.</i>
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800/50 
                       transition-colors text-gray-300 font-medium"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors
                       text-white font-medium flex items-center gap-2"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Tech stack and Resume sections */}
      <div className="absolute bottom-8 right-8 w-[400px] z-10 space-y-4">
        <TechStack />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 z-10">
        <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
      </div>
    </section>
  );
}
