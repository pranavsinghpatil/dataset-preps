// About.tsx
import React from 'react';

export function About() {
  return (
    <section className="relative py-20 text-white">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <p className="mb-6">
              As a Computer Engineering student at Pune University, I'm passionate about pushing the boundaries of what's possible with artificial intelligence and machine learning. My journey in tech began with a curiosity about how computers think, and has evolved into a deep fascination with neural networks and deep learning.
            </p>
            <p className="mb-6">
              Currently preparing for my GRE while maintaining a strong academic record, I balance my technical pursuits with personal development. I believe in the power of continuous learning and challenging myself to grow both professionally and personally.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p>B.Tech in Computer Engineering</p>
              <p className="text-gray-600">Pune University, 2020-2024</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Career Goals</h3>
              <p>Pursuing expertise in AI/ML</p>
              <p className="text-gray-600">Research and Innovation Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}