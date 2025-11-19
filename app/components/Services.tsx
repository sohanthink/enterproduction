"use client";

import React, { useEffect, useState } from "react";
import Section from "./Section";
import Button from "./Button";
import ScrollAnimation from "./ScrollAnimation";
import {
  FaCode,
  FaCog,
  FaPalette,
  FaShareAlt,
  FaChartLine,
  FaCameraRetro,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    description:
      "Custom, high-performance websites built with cutting-edge technology and best practices.",
    Icon: FaCode,
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    title: "Website Management",
    description:
      "Ongoing maintenance, updates, and optimization to keep your site running smoothly.",
    Icon: FaCog,
    gradient: "from-green-500/10 to-teal-500/10",
  },
  {
    title: "Design Services",
    description:
      "Stunning visual designs that capture your brand essence and engage your audience.",
    Icon: FaPalette,
    gradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    title: "Social Media",
    description:
      "Strategic social media management to grow your presence and engage your community.",
    Icon: FaShareAlt,
    gradient: "from-indigo-500/10 to-blue-500/10",
  },
  {
    title: "Marketing",
    description:
      "Data-driven marketing strategies that drive traffic, leads, and conversions.",
    Icon: FaChartLine,
    gradient: "from-orange-500/10 to-red-500/10",
  },
  {
    title: "Photography Services",
    description:
      "Editorial-grade photography, art direction, and visual storytelling that capture your brand's essence.",
    Icon: FaCameraRetro,
    gradient: "from-amber-500/10 to-yellow-500/10",
  },
];

export default function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section bgColor="white" id="services" className="relative overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] opacity-5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] opacity-5 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="relative z-10">
        {/* Header with animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#FF6B35] to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.Icon;
            return (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="group relative h-full">
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl p-8 md:p-10 border border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 cursor-pointer overflow-hidden h-full flex flex-col transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF6B35]/10">
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Orange accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon container */}
                      <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-[#FF6B35]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-[#FF6B35]/10 group-hover:to-[#FF6B35]/5 flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                          <IconComponent className="text-2xl md:text-3xl text-gray-700 group-hover:text-[#FF6B35] transform group-hover:scale-110 transition-all duration-300" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 group-hover:text-[#FF6B35] transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed grow text-base md:text-lg">
                        {service.description}
                      </p>

                      {/* CTA Button */}
                      <div className="mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full group/btn relative overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Learn More
                            <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">
                              →
                            </span>
                          </span>
                          <span className="absolute inset-0 bg-[#FF6B35] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300" />
                        </Button>
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF6B35] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution? Let's discuss your unique requirements.
          </p>
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </Section>
  );
}
