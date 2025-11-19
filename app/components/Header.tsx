"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="w-[85%] mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold">
            <Image src={logo} alt="Logo" width={200} height={100} />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-white hover:text-[#FF6B35] transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-white hover:text-[#FF6B35] transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#process"
              className="text-white hover:text-[#FF6B35] transition-colors"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#FF6B35] transition-colors"
            >
              Contact
            </a>
            <Button href="#contact" variant="primary" size="sm">
              Get Started
            </Button>
          </div>
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
