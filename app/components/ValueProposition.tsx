"use client";

import React, { useEffect, useState } from "react";
import Section from "./Section";
import ScrollAnimation from "./ScrollAnimation";
import { FaGem, FaBullseye, FaChartLine, FaHandshake } from "react-icons/fa";

const values = [
  {
    title: "Premium Quality",
    description:
      "We obsess over the craft—delivering luxurious digital experiences with meticulous detail and flawless execution.",
    Icon: FaGem,
    accent: "from-[#FF6B35]/20 via-transparent to-transparent",
  },
  {
    title: "Strategic Approach",
    description:
      "Every engagement starts with research, insight, and strategy to ensure every pixel moves the business forward.",
    Icon: FaBullseye,
    accent: "from-[#FF6B35]/10 via-transparent to-transparent",
  },
  {
    title: "Results-Driven",
    description:
      "We measure the impact of everything we create, iterating to deliver tangible growth and measurable ROI.",
    Icon: FaChartLine,
    accent: "from-[#FF6B35]/15 via-transparent to-transparent",
  },
  {
    title: "Dedicated Support",
    description:
      "Consider us an extension of your team—responsive, proactive, and relentlessly focused on your success.",
    Icon: FaHandshake,
    accent: "from-[#FF6B35]/10 via-transparent to-transparent",
  },
];

const stats = [
  { label: "Projects Delivered", value: "100+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Years Experience", value: "5+" },
  { label: "Support Available", value: "24/7" },
];

export default function ValueProposition() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section bgColor="black" id="why-us" className="relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-10 w-96 h-96 bg-[#FF6B35] opacity-20 blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF6B35] opacity-20 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#FF6B35]/80 mb-4">
            enterproduction advantage
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Industry Leaders Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We blend strategic thinking, world-class design, and cutting-edge
            technology to help ambitious brands dominate their category.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.Icon;
            return (
              <ScrollAnimation key={value.title} delay={index * 150}>
                <div className="group relative bg-[#070707] border border-white/5 rounded-2xl p-8 h-full overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#FF6B35]/40 hover:shadow-2xl hover:shadow-[#FF6B35]/10">
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br ${value.accent}`}
                  />
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-center md:justify-start">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#FF6B35]/60 transition-all duration-500">
                        <IconComponent className="text-2xl text-white group-hover:text-[#FF6B35] transition-colors duration-500" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF6B35] transition-colors duration-500">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  <div className="absolute bottom-4 right-6 text-sm uppercase tracking-[0.2em] text-white/20 group-hover:text-[#FF6B35]/70 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollAnimation key={stat.label} delay={index * 120}>
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-linear-to-br from-white/5 to-transparent px-6 py-8 text-center hover:border-[#FF6B35]/40 transition-all duration-500">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-[0.3em] text-gray-400">
                  {stat.label}
                </div>
                <div className="absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-[#FF6B35] to-transparent opacity-70" />
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <p className="text-gray-400 mb-4">
            Ready to experience a premium agency partnership?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[#FF6B35] font-semibold tracking-wide group"
          >
            Schedule a consultation
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}
