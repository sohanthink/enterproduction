'use client';

import React, { useState, useEffect } from 'react';
import Section from './Section';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'enterproduction transformed our digital presence completely. Their attention to detail and strategic approach exceeded all our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Creative Agency',
    content: 'Working with enterproduction was a game-changer. They delivered a website that not only looks stunning but drives real business results.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, BrandCo',
    content: 'The team at enterproduction is exceptional. They understood our vision and brought it to life in ways we never imagined possible.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Entrepreneur',
    content: 'Professional, creative, and results-driven. enterproduction helped us establish a strong online presence that continues to grow.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section bgColor="white" id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Trusted by forward-thinking brands worldwide
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
          {/* Quote icon */}
          <div className="text-6xl text-[#FF6B35]/20 absolute top-4 left-4">"</div>
          
          {/* Rating stars */}
          <div className="flex gap-1 mb-6 justify-center">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <span key={i} className="text-2xl text-[#FF6B35]">★</span>
            ))}
          </div>
          
          {/* Testimonial content */}
          <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed relative z-10">
            {currentTestimonial.content}
          </p>
          
          {/* Author info */}
          <div className="text-center">
            <div className="text-lg font-bold text-black mb-1">
              {currentTestimonial.name}
            </div>
            <div className="text-gray-600">
              {currentTestimonial.role}
            </div>
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#FF6B35] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Client logos placeholder */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <p className="text-center text-gray-600 mb-8">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {['Client 1', 'Client 2', 'Client 3', 'Client 4'].map((client, index) => (
            <div key={index} className="text-2xl font-bold text-gray-400">
              {client}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

