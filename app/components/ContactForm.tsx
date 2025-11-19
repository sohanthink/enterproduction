'use client';

import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 1000);
  };

  return (
    <Section bgColor="black" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-6">
            <span className="text-[#FF6B35] text-sm font-semibold tracking-wider uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF5722] mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your digital presence? Get in touch and let's discuss your project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up">
            <div className="relative group">
              <label 
                htmlFor="name" 
                className={`block text-white mb-3 font-semibold text-sm tracking-wide transition-all duration-300 ${
                  focusedField === 'name' ? 'text-[#FF6B35]' : ''
                }`}
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-5 py-4 bg-[#0a0a0a] border-2 border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] focus:bg-[#111111] transition-all duration-300 hover:border-gray-700"
                  placeholder="John Doe"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FF5722] transition-all duration-300 ${
                  focusedField === 'name' ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>
            
            <div className="relative group">
              <label 
                htmlFor="email" 
                className={`block text-white mb-3 font-semibold text-sm tracking-wide transition-all duration-300 ${
                  focusedField === 'email' ? 'text-[#FF6B35]' : ''
                }`}
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-5 py-4 bg-[#0a0a0a] border-2 border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] focus:bg-[#111111] transition-all duration-300 hover:border-gray-700"
                  placeholder="john@example.com"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FF5722] transition-all duration-300 ${
                  focusedField === 'email' ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>
            
            <div className="relative group">
              <label 
                htmlFor="service" 
                className={`block text-white mb-3 font-semibold text-sm tracking-wide transition-all duration-300 ${
                  focusedField === 'service' ? 'text-[#FF6B35]' : ''
                }`}
              >
                Service Interest
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-5 py-4 bg-[#0a0a0a] border-2 border-gray-800 rounded-xl text-white focus:outline-none focus:border-[#FF6B35] focus:bg-[#111111] transition-all duration-300 hover:border-gray-700 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0a0a0a]">Select a service</option>
                  <option value="development" className="bg-[#0a0a0a]">Website Development</option>
                  <option value="management" className="bg-[#0a0a0a]">Website Management</option>
                  <option value="design" className="bg-[#0a0a0a]">Design Services</option>
                  <option value="social" className="bg-[#0a0a0a]">Social Media</option>
                  <option value="marketing" className="bg-[#0a0a0a]">Marketing</option>
                  <option value="multiple" className="bg-[#0a0a0a]">Multiple Services</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FF5722] transition-all duration-300 ${
                  focusedField === 'service' ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>
            
            <div className="relative group">
              <label 
                htmlFor="message" 
                className={`block text-white mb-3 font-semibold text-sm tracking-wide transition-all duration-300 ${
                  focusedField === 'message' ? 'text-[#FF6B35]' : ''
                }`}
              >
                Project Details
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-[#0a0a0a] border-2 border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] focus:bg-[#111111] transition-all duration-300 hover:border-gray-700 resize-none"
                  placeholder="Tell us about your project, goals, and vision..."
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FF5722] transition-all duration-300 ${
                  focusedField === 'message' ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full group relative overflow-hidden"
              disabled={isSubmitting}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </span>
            </Button>
          </form>
          
          {/* Contact Information */}
          <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-gray-800 rounded-2xl p-8 lg:p-10 hover:border-gray-700 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                We're here to help bring your vision to life. Reach out through any of these channels and let's start a conversation.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#FF5722] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#FF6B35]/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="text-white font-semibold mb-2 text-lg">Email</div>
                    <a 
                      href="mailto:hello@enterproduction.com" 
                      className="text-[#FF6B35] hover:text-[#FF5722] transition-colors text-lg font-medium group-hover:underline"
                    >
                      hello@enterproduction.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#FF5722] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#FF6B35]/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="text-white font-semibold mb-2 text-lg">Phone</div>
                    <a 
                      href="tel:+1234567890" 
                      className="text-[#FF6B35] hover:text-[#FF5722] transition-colors text-lg font-medium group-hover:underline"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#FF5722] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B35]/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="text-white font-semibold mb-2 text-lg">Location</div>
                    <div className="text-gray-300 text-lg">
                      Available Worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-gray-800 rounded-2xl p-8 lg:p-10 hover:border-gray-700 transition-all duration-300">
              <div className="text-white font-bold mb-6 text-xl">Follow Us</div>
              <div className="flex gap-6">
                {[
                  { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                  { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="group flex items-center justify-center w-12 h-12 rounded-xl bg-[#0a0a0a] border border-gray-800 text-gray-400 hover:text-[#FF6B35] hover:border-[#FF6B35] transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

