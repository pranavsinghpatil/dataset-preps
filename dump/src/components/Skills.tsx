// Skills.tsx
import React from 'react';

const skills = {
  "AI/ML": [
    { name: "TensorFlow", level: 85 },
    { name: "PyTorch", level: 80 },
    { name: "Scikit-learn", level: 90 },
    { name: "Computer Vision", level: 75 }
  ],
  "Programming": [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "C++", level: 80 },
    { name: "Java", level: 75 }
  ],
  "Web Development": [
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "MongoDB", level: 75 }
  ],
  "Tools & Technologies": [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Linux", level: 85 }
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">{category}</h3>
              <div className="space-y-4">
                {skillList.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}