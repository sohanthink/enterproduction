"use client";

import React from "react";
import Section from "./Section";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience to create a strategic foundation.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Our team develops a comprehensive strategy tailored to your unique needs and objectives.",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "We bring your vision to life with stunning designs and robust, high-performance solutions.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We launch your project and continuously optimize for maximum performance and results.",
  },
];

export default function Process() {
  return (
    <Section bgColor="black" id="process">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          How We Work
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A proven process that delivers exceptional results
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2" />

        <div className="space-y-12 md:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                } text-center md:text-left`}
              >
                <div className="text-6xl md:text-8xl font-bold text-[#FF6B35]/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Timeline dot */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#FF6B35] flex items-center justify-center border-4 border-black">
                <div className="w-4 h-4 rounded-full bg-white" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
