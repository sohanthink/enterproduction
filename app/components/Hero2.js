"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Hero2() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-[#0a0a0a] to-black">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,107,53,0.12),transparent_70%)] animate-float opacity-50" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,107,53,0.08),transparent_70%)] animate-float-reverse opacity-50" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-[85%] mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              mounted
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-block">
              <span className="text-[#FF6B35] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Digital Excellence
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span
                className={`block transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                Transform Your
              </span>
              <span
                className={`block transition-all duration-700 ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <span className="text-white">Business</span>{" "}
                <span
                  className="text-[#FF6B35] relative inline-block"
                  style={{
                    textShadow: "0 0 40px rgba(255,107,53,0.4)",
                  }}
                >
                  Online
                </span>
              </span>
            </h1>

            {/* Divider */}
            <div
              className={`w-20 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FF5722] transition-all duration-700 ${
                mounted ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transitionDelay: "0.6s" }}
            />

            {/* Description */}
            <p
              className={`text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              We craft exceptional digital experiences that elevate your brand
              and drive measurable results. From strategic web development to
              comprehensive digital marketing, we're your partner in digital
              transformation.
            </p>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 pt-4 transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B35] mb-1">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B35] mb-1">
                  98%
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B35] mb-1">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Years Experience
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "1.2s" }}
            >
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="group transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/50 transition-all duration-300"
              >
                Start Your Journey
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="group transform hover:scale-105 transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div
            className={`relative transition-all duration-1000 mt-12 lg:mt-0 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            {/* Main Illustration Container */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-transparent rounded-3xl blur-3xl" />

              {/* SVG Illustration */}
              <div className="relative w-full h-full flex items-center justify-center">
                <svg
                  viewBox="0 0 800 600"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Elements */}
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#FF6B35", stopOpacity: 0.3 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#FF5722", stopOpacity: 0.1 }}
                      />
                    </linearGradient>
                    <linearGradient
                      id="grad2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#FF6B35", stopOpacity: 0.2 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "transparent", stopOpacity: 0 }}
                      />
                    </linearGradient>
                  </defs>

                  {/* Floating Geometric Shapes */}
                  <g
                    className="animate-float"
                    style={{ animationDuration: "8s" }}
                  >
                    <rect
                      x="100"
                      y="80"
                      width="120"
                      height="120"
                      rx="12"
                      fill="url(#grad1)"
                      opacity="0.6"
                    />
                    <circle
                      cx="650"
                      cy="150"
                      r="60"
                      fill="url(#grad2)"
                      opacity="0.5"
                    />
                  </g>

                  {/* Central Device/Interface Illustration */}
                  <g
                    className="animate-scale-in"
                    style={{
                      animationDuration: "1.5s",
                      animationDelay: "0.5s",
                      animationFillMode: "both",
                    }}
                  >
                    {/* Main Screen/Frame */}
                    <rect
                      x="200"
                      y="100"
                      width="400"
                      height="300"
                      rx="20"
                      fill="#0a0a0a"
                      stroke="#FF6B35"
                      strokeWidth="3"
                      opacity="0.9"
                    />

                    {/* Screen Content - Grid Pattern */}
                    <g opacity="0.3">
                      <line
                        x1="250"
                        y1="150"
                        x2="550"
                        y2="150"
                        stroke="#FF6B35"
                        strokeWidth="1"
                      />
                      <line
                        x1="250"
                        y1="200"
                        x2="550"
                        y2="200"
                        stroke="#FF6B35"
                        strokeWidth="1"
                      />
                      <line
                        x1="250"
                        y1="250"
                        x2="550"
                        y2="250"
                        stroke="#FF6B35"
                        strokeWidth="1"
                      />
                      <line
                        x1="250"
                        y1="300"
                        x2="550"
                        y2="300"
                        stroke="#FF6B35"
                        strokeWidth="1"
                      />
                      <line
                        x1="300"
                        y1="120"
                        x2="300"
                        y2="380"
                        stroke="#FF6B35"
                        strokeWidth="1"
                      />
                      <line
                        x1="400"
                        y1="120"
                        x2="400"
                        y2="380"
                        stroke="#FF6B35"
                        strokeWidth="1"
                      />
                      <line
                        x1="500"
                        y1="120"
                        x2="500"
                        y2="380"
                        stroke="#FF6B35"
                        strokeWidth="1"
                      />
                    </g>

                    {/* Accent Elements */}
                    <rect
                      x="280"
                      y="170"
                      width="80"
                      height="50"
                      rx="6"
                      fill="#FF6B35"
                      opacity="0.4"
                    />
                    <rect
                      x="420"
                      y="170"
                      width="80"
                      height="50"
                      rx="6"
                      fill="#FF6B35"
                      opacity="0.3"
                    />
                    <rect
                      x="280"
                      y="240"
                      width="220"
                      height="30"
                      rx="6"
                      fill="#FF6B35"
                      opacity="0.2"
                    />
                  </g>

                  {/* Floating Elements */}
                  <g
                    className="animate-float-reverse"
                    style={{ animationDuration: "10s" }}
                  >
                    <path
                      d="M150 350 Q200 300 250 350 T350 350"
                      stroke="#FF6B35"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.4"
                    />
                    <circle
                      cx="500"
                      cy="450"
                      r="40"
                      fill="url(#grad1)"
                      opacity="0.3"
                    />
                  </g>

                  {/* Connection Lines */}
                  <g opacity="0.2">
                    <line
                      x1="50"
                      y1="200"
                      x2="200"
                      y2="250"
                      stroke="#FF6B35"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <line
                      x1="600"
                      y1="250"
                      x2="750"
                      y2="200"
                      stroke="#FF6B35"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </g>

                  {/* Accent Dots */}
                  <circle
                    cx="120"
                    cy="250"
                    r="4"
                    fill="#FF6B35"
                    opacity="0.6"
                    className="animate-pulse"
                  />
                  <circle
                    cx="680"
                    cy="350"
                    r="4"
                    fill="#FF6B35"
                    opacity="0.6"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <circle
                    cx="150"
                    cy="450"
                    r="4"
                    fill="#FF6B35"
                    opacity="0.6"
                    className="animate-pulse"
                    style={{ animationDelay: "2s" }}
                  />
                </svg>
              </div>

              {/* Overlay Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl pointer-events-none" />
            </div>

            {/* Floating Accent Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF6B35]/10 rounded-full blur-xl animate-float" />
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-xl animate-float-reverse"
              style={{ animationDuration: "12s" }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1.5s" }}
        >
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
              <div className="absolute inset-0 border-2 border-[#FF6B35]/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent opacity-50" />
    </section>
  );
}
