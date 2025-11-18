'use client';

import React from 'react';
import Section from './Section';
import ScrollAnimation from './ScrollAnimation';

const values = [
  {
    title: 'Premium Quality',
    description: 'We don\'t compromise on quality. Every project is crafted with meticulous attention to detail.',
    icon: '✨',
  },
  {
    title: 'Strategic Approach',
    description: 'Data-driven decisions and strategic thinking guide every aspect of our work.',
    icon: '🎯',
  },
  {
    title: 'Results-Driven',
    description: 'We measure success by your success. Every solution is designed to deliver measurable results.',
    icon: '📊',
  },
  {
    title: 'Dedicated Support',
    description: 'Your success is our priority. We provide ongoing support and partnership beyond project completion.',
    icon: '🤝',
  },
];

export default function ValueProposition() {
  return (
    <Section bgColor="black" id="why-us">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Why Choose Us
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          What sets us apart in the digital landscape
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <ScrollAnimation key={index} delay={index * 100}>
            <div className="text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF6B35] transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      
      {/* Stats section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">100+</div>
          <div className="text-gray-400">Projects Delivered</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">50+</div>
          <div className="text-gray-400">Happy Clients</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">5+</div>
          <div className="text-gray-400">Years Experience</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">24/7</div>
          <div className="text-gray-400">Support Available</div>
        </div>
      </div>
    </Section>
  );
}

