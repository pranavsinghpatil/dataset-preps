// Projects.tsx
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Image Recognition",
    description: "Deep learning model for real-time object detection using TensorFlow",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/username/project1",
    demo: "https://demo.project1.com"
  },
  {
    title: "Smart Learning Platform",
    description: "Educational platform with personalized learning paths",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/project2",
    demo: "https://demo.project2.com"
  },
  {
    title: "Data Analysis Dashboard",
    description: "Interactive dashboard for visualizing complex datasets",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "Data Science",
    technologies: ["Python", "Pandas", "D3.js"],
    github: "https://github.com/username/project3",
    demo: "https://demo.project3.com"
  }
];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "AI/ML", "Web Development", "Data Science"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="relative py-20 text-white">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}