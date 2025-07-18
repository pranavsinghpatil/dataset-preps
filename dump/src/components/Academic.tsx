// Academic.tsx
import React from 'react';

const timeline = [
  {
    year: '2024',
    title: 'Final Year Project',
    description: 'Developing an AI-powered healthcare diagnostic system',
  },
  {
    year: '2023',
    title: 'Research Internship',
    description: 'Machine Learning research at Tech Institute',
  },
  {
    year: '2023',
    title: 'Academic Excellence',
    description: "Dean's List - Top 5% of class",
  },
  {
    year: '2021',
    title: 'University Admission',
    description: 'Started Computer Engineering at Pune University',
  },
];

export function Academic() {
  return (
    <section className="relative py-20 text-white">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Academic Journey
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200" />

            {/* Timeline entries */}
            <div className="space-y-12">
              {timeline.map((entry, index) => (
                <div key={index} className="relative">
                  {/* Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full" />

                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-5/12" />
                    <div className="w-7/12 p-4">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <span className="text-blue-600 font-semibold">
                          {entry.year}
                        </span>
                        <h3 className="text-xl font-semibold mt-1">
                          {entry.title}
                        </h3>
                        <p className="text-gray-600 mt-2">
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Research Interests</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                <span>Deep Learning Applications in Healthcare</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                <span>Natural Language Processing</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                <span>Computer Vision</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                <span>Reinforcement Learning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
