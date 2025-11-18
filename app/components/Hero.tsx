"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black">
        {/* Primary gradient orb */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,107,53,0.15),transparent_50%)] animate-pulse-glow" />
        
        {/* Secondary gradient orb */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,107,53,0.08),transparent_50%)] animate-float" />
        
        {/* Animated mesh gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30 animate-gradient"
          style={{
            background: 'linear-gradient(135deg, rgba(255,107,53,0.1) 0%, transparent 25%, transparent 75%, rgba(255,107,53,0.1) 100%)',
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orb */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B35] opacity-5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-[#FF6B35] opacity-5 rounded-full blur-3xl animate-float-reverse" />
        
        {/* Small accent orbs */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#FF6B35] opacity-10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-[#FF6B35] opacity-8 rounded-full blur-2xl animate-float-reverse" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[85%] mx-auto px-4 md:px-6 text-center">
        <div className="space-y-8">
          {/* Main headline with staggered animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span 
              className={`block transition-all duration-1000 ${
                mounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Elevate Your
            </span>
            <span 
              className={`block transition-all duration-1000 ${
                mounted 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <span className="text-white">Digital</span>{" "}
              <span 
                className="text-[#FF6B35] relative inline-block"
                style={{
                  textShadow: '0 0 30px rgba(255,107,53,0.5)',
                }}
              >
                Presence
              </span>
            </span>
          </h1>

          {/* Subheadline with fade-in */}
          <p 
            className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
              mounted 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            High-end digital solutions for forward-thinking brands. We craft
            exceptional websites, manage your online presence, and drive results
            through strategic design and marketing.
          </p>

          {/* CTA buttons with scale-in animation */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
              mounted 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            <Button 
              href="#contact" 
              variant="primary" 
              size="lg" 
              className="group transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/50 transition-all duration-300"
            >
              Start Your Project
            </Button>
            <Button 
              href="#services" 
              variant="outline" 
              size="lg" 
              className="group transform hover:scale-105 transition-all duration-300"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                Explore Services
              </span>
            </Button>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div 
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative group cursor-pointer">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
            <div className="absolute inset-0 border-2 border-[#FF6B35]/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll
          </p>
        </div>
      </div>

      {/* Animated gradient border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-50" />
    </section>
  );
}
