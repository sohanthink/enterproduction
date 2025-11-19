"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Section from "./Section";
import ScrollAnimation from "./ScrollAnimation";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "enterproduction transformed our digital presence completely. Their attention to detail and strategic approach exceeded all our expectations. The results speak for themselves.",
    rating: 5,
    image: "/images/testimonials/sarah.jpg", // Replace with actual client image
    company: "TechStart Inc.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Creative Agency",
    content:
      "Working with enterproduction was a game-changer. They delivered a website that not only looks stunning but drives real business results. Our conversion rate increased by 180%.",
    rating: 5,
    image: "/images/testimonials/michael.jpg", // Replace with actual client image
    company: "Creative Agency",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, BrandCo",
    content:
      "The team at enterproduction is exceptional. They understood our vision and brought it to life in ways we never imagined possible. Truly professional and innovative.",
    rating: 5,
    image: "/images/testimonials/emily.jpg", // Replace with actual client image
    company: "BrandCo",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Entrepreneur",
    content:
      "Professional, creative, and results-driven. enterproduction helped us establish a strong online presence that continues to grow. Best investment we've made.",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjV1eWuNUC7g0FONDea-F6iRsofY_gRdD6iB4NruEORgMKSGPSqr=w128-h128-c-rp-mo-ba3-br100", // Replace with actual client image
    company: "Thompson Ventures",
  },
];

const clientLogos = [
  {
    name: "TechStart",
    logo: "https://enterproductions.ca/wp-content/uploads/2024/12/7-5.jpg",
  },
  {
    name: "Creative Agency",
    logo: "https://enterproductions.ca/wp-content/uploads/2024/12/3-6.jpg",
  },
  {
    name: "BrandCo",
    logo: "https://enterproductions.ca/wp-content/uploads/2024/12/2-6.jpg",
  },
  {
    name: "Ventures",
    logo: "https://enterproductions.ca/wp-content/uploads/2024/12/13-1.jpg",
  },
  {
    name: "client2",
    logo: "https://enterproductions.ca/wp-content/uploads/2025/08/Visper-Logo.png",
  },
  {
    name: "client3",
    logo: "https://enterproductions.ca/wp-content/uploads/2024/12/16-1.jpg",
  },
  {
    name: "client4",
    logo: "https://enterproductions.ca/wp-content/uploads/2024/12/16-1.jpg",
  },
  {
    name: "client6",
    logo: "https://enterproductions.ca/wp-content/uploads/2025/08/Untitled-design-1.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section
      bgColor="white"
      id="testimonials"
      className="relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35] opacity-5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] opacity-5 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-[#FF6B35]/80 mb-4">
            Client Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#FF6B35] to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by forward-thinking brands worldwide
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div
            key={currentTestimonial.id}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden border border-gray-200/50 shadow-xl transition-all duration-700"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            {/* Quote icon */}
            <div className="text-8xl md:text-9xl text-[#FF6B35]/10 absolute top-6 left-6 md:top-8 md:left-8 font-serif">
              "
            </div>

            <div className="relative z-10">
              {/* Rating stars */}
              <div className="flex gap-1 mb-8 justify-center md:justify-start">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-2xl md:text-3xl text-[#FF6B35] transform hover:scale-110 transition-transform duration-300"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial content */}
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 text-center md:text-left mb-10 leading-relaxed font-light relative z-10">
                {currentTestimonial.content}
              </p>

              {/* Author info with image */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Client Image */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#FF6B35]/20 shadow-lg ring-4 ring-white">
                    {/* Placeholder - replace with actual image when available */}
                    <div className="w-full h-full bg-linear-to-br from-[#FF6B35] to-[#FF5722] flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                    {/* Uncomment when you have actual images:
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    /> */}
                  </div>
                  {/* Verified badge */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>

                {/* Author details */}
                <div className="text-center md:text-left flex-1">
                  <div className="text-xl md:text-2xl font-bold text-black mb-2">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-600 text-base md:text-lg mb-1">
                    {currentTestimonial.role}
                  </div>
                  <div className="text-[#FF6B35] font-semibold text-sm md:text-base">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots with thumbnails */}
          <div className="flex flex-col items-center gap-6 mt-12">
            {/* Dots */}
            <div className="flex justify-center gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative transition-all duration-500 ${
                    index === currentIndex
                      ? "scale-125"
                      : "hover:scale-110 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Go to testimonial from ${testimonial.name}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? "bg-[#FF6B35] w-10 shadow-lg shadow-[#FF6B35]/50"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Thumbnail previews */}
            <div className="flex justify-center gap-4 mt-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                    index === currentIndex
                      ? "border-[#FF6B35] scale-110 shadow-lg shadow-[#FF6B35]/30"
                      : "border-gray-200 hover:border-gray-300 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="w-full h-full bg-linear-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-bold text-sm md:text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  {/* Uncomment when you have actual images:
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                  */}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <ScrollAnimation delay={200}>
            <p className="text-center text-gray-600 mb-12 text-lg uppercase tracking-wide">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {clientLogos.map((client, index) => (
                <ScrollAnimation key={client.name} delay={index * 100}>
                  <div className="group relative">
                    {/* Placeholder for client logos */}
                    {/* <div className="w-32 h-16 md:w-40 md:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border border-gray-300 hover:border-[#FF6B35]/50 transition-all duration-300 hover:shadow-lg">
                      <span className="text-gray-400 font-semibold text-sm md:text-base group-hover:text-[#FF6B35] transition-colors">
                        {client.name}
                      </span>
                    </div> */}
                    {/* Uncomment when you have actual logos: */}
                    <div className="w-32 h-16 md:w-40 md:h-20 relative opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain"
                        sizes="160px"
                      />
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Section>
  );
}
