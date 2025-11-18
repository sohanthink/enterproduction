'use client';

import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Development',
    description: 'Modern e-commerce solution with seamless user experience',
    image: '🛒',
  },
  {
    title: 'Brand Identity Design',
    category: 'Design',
    description: 'Complete brand transformation with stunning visual identity',
    image: '🎨',
  },
  {
    title: 'Social Media Campaign',
    category: 'Marketing',
    description: 'Viral social media campaign that increased engagement by 300%',
    image: '📱',
  },
  {
    title: 'Corporate Website',
    category: 'Development',
    description: 'Enterprise-level website with advanced functionality',
    image: '💼',
  },
  {
    title: 'Creative Portfolio',
    category: 'Design',
    description: 'Stunning portfolio website showcasing creative work',
    image: '✨',
  },
  {
    title: 'Digital Marketing Strategy',
    category: 'Marketing',
    description: 'Comprehensive marketing strategy driving 250% ROI increase',
    image: '📈',
  },
];

const categories = ['All', 'Development', 'Design', 'Marketing'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <Section bgColor="white" id="portfolio">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Our Work
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Showcasing excellence in every project we deliver
        </p>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#FF6B35] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="aspect-square flex items-center justify-center text-8xl bg-gradient-to-br from-[#0a0a0a] to-black">
              {project.image}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <span className="text-[#FF6B35] text-sm font-semibold mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <Button variant="primary" size="sm">
                  View Case Study
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

