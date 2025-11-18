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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Get in touch and let's discuss your project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-white mb-2 font-semibold">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
              >
                <option value="">Select a service</option>
                <option value="development">Website Development</option>
                <option value="management">Website Management</option>
                <option value="design">Design Services</option>
                <option value="social">Social Media</option>
                <option value="marketing">Marketing</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#FF6B35] transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We're here to help bring your vision to life. Reach out through any of these channels.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <div className="text-white font-semibold mb-1">Email</div>
                  <a href="mailto:hello@enterproduction.com" className="text-[#FF6B35] hover:text-[#FF5722] transition-colors">
                    hello@enterproduction.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <div className="text-white font-semibold mb-1">Phone</div>
                  <a href="tel:+1234567890" className="text-[#FF6B35] hover:text-[#FF5722] transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <div className="text-white font-semibold mb-1">Location</div>
                  <div className="text-gray-300">
                    Available Worldwide
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-800">
              <div className="text-white font-semibold mb-4">Follow Us</div>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                  >
                    {social}
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

