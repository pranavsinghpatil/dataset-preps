// App.tsx
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Academic } from './components/Academic';
import { Growth } from './components/Growth';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Academic />
        <Growth />
        <Contact />
      </main>

      <footer className="bg-[#0A0A0A] text-gray-400 py-8 border-t border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/pranavs-profile" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/pranavs-profile" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:pranav@example.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Pranav. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;