"use client";

import React, { useEffect, useState, useRef } from "react";
import Section from "./Section";
import ScrollAnimation from "./ScrollAnimation";
import { FaSearch, FaLightbulb, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience to create a strategic foundation.",
    Icon: FaSearch,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Our team develops a comprehensive strategy tailored to your unique needs and objectives.",
    Icon: FaLightbulb,
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "We bring your vision to life with stunning designs and robust, high-performance solutions.",
    Icon: FaCode,
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We launch your project and continuously optimize for maximum performance and results.",
    Icon: FaRocket,
    gradient: "from-pink-500/20 to-red-500/20",
  },
];

export default function Process() {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0); // Start with first step active
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          threshold: [0, 0.1, 0.2, 0.3], // Multiple thresholds for better detection
          rootMargin: "-10% 0px -10% 0px", // Trigger when element is in center area
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [mounted]);

  return (
    <Section bgColor="black" id="process" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF6B35] opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FF6B35] opacity-10 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#FF6B35]/80 mb-4">
            Our Methodology
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How We Work
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#FF6B35] to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A proven process that delivers exceptional results through strategic
            planning and flawless execution
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-gray-800" />
            <div className="absolute inset-0 bg-linear-to-b from-[#FF6B35] via-[#FF6B35]/50 to-[#FF6B35] opacity-30" />
          </div>

          <div className="space-y-8 md:space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const IconComponent = step.Icon;
              const isActive = activeStep === index;
              return (
                <ScrollAnimation key={step.number} delay={index * 150}>
                  <div
                    ref={(el) => {
                      stepRefs.current[index] = el;
                    }}
                    className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div
                      className={`flex-1 w-full lg:w-auto ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      } text-center lg:text-left`}
                    >
                      <div
                        className={`group relative bg-[#070707] border rounded-2xl p-8 md:p-10 transition-all duration-700 ${
                          isActive
                            ? "border-[#FF6B35]/40 shadow-2xl shadow-[#FF6B35]/10 -translate-y-1"
                            : "border-white/5"
                        }`}
                      >
                        {/* Gradient overlay - always visible when active */}
                        <div
                          className={`absolute inset-0 bg-linear-to-br ${
                            step.gradient
                          } transition-opacity duration-700 rounded-2xl ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Step Number Background */}
                          <div
                            className={`text-7xl md:text-9xl font-bold mb-6 transition-colors duration-700 ${
                              isActive
                                ? "text-[#FF6B35]/10"
                                : "text-[#FF6B35]/5"
                            }`}
                          >
                            {step.number}
                          </div>

                          {/* Icon */}
                          <div className="mb-6 flex items-center lg:justify-start justify-center">
                            <div
                              className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl border flex items-center justify-center transition-all duration-700 ${
                                isActive
                                  ? "border-[#FF6B35]/60 bg-[#FF6B35]/10 scale-110 rotate-3"
                                  : "bg-white/5 border-white/10"
                              }`}
                            >
                              <IconComponent
                                className={`text-2xl md:text-3xl transition-colors duration-700 ${
                                  isActive ? "text-[#FF6B35]" : "text-white"
                                }`}
                              />
                            </div>
                          </div>

                          {/* Title */}
                          <h3
                            className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-700 ${
                              isActive ? "text-[#FF6B35]" : "text-white"
                            }`}
                          >
                            {step.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                            {step.description}
                          </p>
                        </div>

                        {/* Corner accent */}
                        <div
                          className={`absolute top-4 right-4 w-2 h-2 bg-[#FF6B35] rounded-full transition-opacity duration-700 ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Enhanced Timeline Connector */}
                    <div className="relative z-10 shrink-0">
                      {/* Timeline dot with animation */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                        {/* Outer glow ring - more intense when active */}
                        <div
                          className={`absolute inset-0 rounded-full transition-opacity duration-700 ${
                            isActive
                              ? "bg-[#FF6B35]/40 animate-pulse"
                              : "bg-[#FF6B35]/20 animate-pulse"
                          }`}
                        />

                        {/* Main dot */}
                        <div
                          className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FF6B35] flex items-center justify-center border-4 border-black shadow-lg transition-all duration-700 ${
                            isActive
                              ? "shadow-[#FF6B35]/50 scale-110"
                              : "shadow-[#FF6B35]/30 hover:scale-110"
                          }`}
                        >
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center">
                            <IconComponent className="text-[#FF6B35] text-sm md:text-base" />
                          </div>
                        </div>

                        {/* Step number badge */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black border border-[#FF6B35]/50 rounded-full">
                          <span className="text-xs font-bold text-[#FF6B35]">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Connecting line for mobile */}
                      {index < steps.length - 1 && (
                        <div className="lg:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-linear-to-b from-[#FF6B35] to-gray-800" />
                      )}
                    </div>

                    {/* Spacer for desktop alternating layout */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-20 text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ready to start your project? Let's begin with discovery.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[#FF6B35] font-semibold tracking-wide group"
          >
            Get Started
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}
