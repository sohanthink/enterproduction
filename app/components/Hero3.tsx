"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Hero3() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate star positions
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background with Grid Pattern */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Star-like dots scattered across background */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}

        {/* Glowing horizon effect from bottom-center */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120%] h-[60%] blur-3xl"
          style={{
            background:
              "linear-gradient(to top, rgba(255,107,53,0.2), rgba(255,107,53,0.1), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[50%] blur-2xl"
          style={{
            background:
              "linear-gradient(to top, rgba(255,87,34,0.15), rgba(255,107,53,0.08), transparent)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-[85%] mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Main Headline with Special Word Treatment */}
          <h1
            className={`text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.1] mb-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span className="block">Reach</span>
            <span className="block">
              <span className="relative inline-flex items-center gap-2">
                <span className="italic">New</span>
                <span className="absolute -inset-2 border border-white/30 rounded-full" />
                <span className="ml-2 text-[#FF6B35] text-2xl sm:text-3xl md:text-4xl font-normal">
                  ++
                </span>
              </span>
            </span>
            <span className="block">Horizons</span>
          </h1>

          {/* CTA Button - Black with Orange Border */}
          <div
            className={`mb-16 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <Button
              href="#contact"
              variant="outline"
              size="lg"
              className="bg-black border-2 border-[#FF6B35] text-white hover:bg-[#FF6B35] hover:text-black hover:shadow-lg hover:shadow-[#FF6B35]/50 transition-all duration-300 px-4 md:px-8 py-2 md:py-4 text-lg font-semibold mb-20 md:mb-0"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Agency Description at Bottom */}
        <div
          className={`absolute bottom-10 md:bottom-20 left-0 right-0 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <p className="text-base sm:text-lg md:text-xl text-white/80 italic text-center leading-relaxed">
            <span className="font-normal">ENTERPRODUCTION</span> is a
            full-service <span className="font-bold uppercase">STRATEGY</span>,{" "}
            <span className="font-bold uppercase">DESIGN</span> and{" "}
            <span className="font-bold uppercase">
              DIGITAL MARKETING AGENCY
            </span>{" "}
            that helps <span className="font-bold uppercase">EMERGING</span> and{" "}
            <span className="font-bold uppercase">ESTABLISHED BRANDS</span>{" "}
            <span className="font-bold uppercase">GROW FASTER</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
