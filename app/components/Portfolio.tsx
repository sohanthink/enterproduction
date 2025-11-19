"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Section from "./Section";
import Button from "./Button";
import ScrollAnimation from "./ScrollAnimation";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Development",
    description:
      "Modern e-commerce solution with seamless user experience and advanced features",
    image: "/images/portfolio/ecommerce.jpg", // Replace with your actual image path
    results: "300% increase in conversions",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Design",
    description:
      "Complete brand transformation with stunning visual identity and guidelines",
    image: "/images/portfolio/branding.jpg", // Replace with your actual image path
    results: "Brand recognition up 250%",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Marketing",
    description:
      "Viral social media campaign that increased engagement and brand awareness",
    image: "/images/portfolio/social.jpg", // Replace with your actual image path
    results: "300% engagement increase",
  },
  {
    id: 4,
    title: "Corporate Website",
    category: "Development",
    description:
      "Enterprise-level website with advanced functionality and seamless integration",
    image: "/images/portfolio/corporate.jpg", // Replace with your actual image path
    results: "50% faster load times",
  },
  {
    id: 5,
    title: "Creative Portfolio",
    category: "Design",
    description:
      "Stunning portfolio website showcasing creative work with immersive experience",
    image: "/images/portfolio/creative.jpg", // Replace with your actual image path
    results: "Award-winning design",
  },
  {
    id: 6,
    title: "Digital Marketing Strategy",
    category: "Marketing",
    description:
      "Comprehensive marketing strategy driving measurable growth and ROI",
    image: "/images/portfolio/marketing.jpg", // Replace with your actual image path
    results: "250% ROI increase",
  },
];

const categories = ["All", "Development", "Design", "Marketing"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Section
      bgColor="white"
      id="portfolio"
      className="relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B35] opacity-5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B35] opacity-5 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#FF6B35] to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Showcasing excellence in every project we deliver
          </p>
        </div>

        {/* Category filter with enhanced design */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform ${
                activeCategory === category
                  ? "bg-[#FF6B35] text-white scale-105 shadow-lg shadow-[#FF6B35]/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#FF6B35] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={index * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-gray-900 cursor-pointer transform hover:-translate-y-2 transition-all duration-500">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Placeholder for image - replace with Next.js Image when you have images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📷</div>
                  </div>

                  {/* When you have images, uncomment and use this: */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  /> */}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Orange accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#FF6B35] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="space-y-3">
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2">
                      <span className="px-3 py-1 bg-[#FF6B35] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Results */}
                    {project.results && (
                      <div className="flex items-center gap-2 text-[#FF6B35] text-sm font-semibold">
                        <span>✓</span>
                        <span>{project.results}</span>
                      </div>
                    )}

                    {/* CTA Button */}
                    <div className="pt-2">
                      <Button
                        variant="primary"
                        size="sm"
                        className="group/btn w-full md:w-auto"
                      >
                        <span className="flex items-center justify-center gap-2">
                          View Case Study
                          <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Default visible content (shows when not hovering) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-linear-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#FF6B35] text-xs font-semibold uppercase tracking-wide block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-[#FF6B35]/50 transition-colors duration-300">
                      <span className="text-white text-lg">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Empty state when no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Want to see more of our work or discuss your project?
          </p>
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="transform hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </Section>
  );
}
