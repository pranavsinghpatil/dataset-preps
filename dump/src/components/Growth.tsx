// Growth.tsx
import React from 'react';

const blogPosts = [
  {
    title: "My GRE Preparation Journey",
    date: "March 15, 2024",
    excerpt: "Sharing my experience and strategies for GRE preparation...",
    readTime: "5 min read"
  },
  {
    title: "Balancing Academics and Fitness",
    date: "March 1, 2024",
    excerpt: "How I maintain a healthy lifestyle while pursuing my studies...",
    readTime: "4 min read"
  },
  {
    title: "Overcoming Technical Challenges",
    date: "February 15, 2024",
    excerpt: "Lessons learned from debugging complex ML models...",
    readTime: "6 min read"
  }
];

export function Growth() {
  return (
    <section id="growth" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Personal Growth</h2>

        <div className="max-w-6xl mx-auto">
          {/* GRE Progress */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">GRE Preparation Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Quantitative</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }} />
                </div>
                <p className="text-gray-600 mt-2">Mock Test Score: 165/170</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Verbal</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }} />
                </div>
                <p className="text-gray-600 mt-2">Mock Test Score: 155/170</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">AWA</h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }} />
                </div>
                <p className="text-gray-600 mt-2">Mock Test Score: 4.5/6.0</p>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">Recent Blog Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h4 className="text-xl font-semibold mb-3">{post.title}</h4>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <a href="#" className="text-blue-600 hover:text-blue-700">Read more →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fitness Journey */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Fitness & Wellness</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Weekly Goals</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    <span>3 workout sessions completed</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    <span>7 hours of meditation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                    <span>8 hours daily sleep (in progress)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Challenge Management</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    <span>Time management techniques</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    <span>Stress reduction strategies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                    <span>Work-life balance optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}