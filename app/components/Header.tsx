"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black backdrop-blur-md shadow-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="w-[85%] mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl md:text-3xl font-bold relative z-[101]">
              <Image src={logo} alt="Logo" width={200} height={100} />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-white hover:text-[#FF6B35] transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-white hover:text-[#FF6B35] transition-colors font-medium"
              >
                Portfolio
              </a>
              <a
                href="#process"
                className="text-white hover:text-[#FF6B35] transition-colors font-medium"
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-white hover:text-[#FF6B35] transition-colors font-medium"
              >
                Contact
              </a>
              <Button href="#contact" variant="primary" size="sm">
                Get Started
              </Button>
            </div>
            <button
              className="md:hidden text-white relative z-[101] p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-[99] md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      >
        <div
          className="flex flex-col items-center justify-center h-full gap-8 px-6"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href="#services"
            onClick={closeMobileMenu}
            className="text-white text-2xl font-semibold hover:text-[#FF6B35] transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={closeMobileMenu}
            className="text-white text-2xl font-semibold hover:text-[#FF6B35] transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#process"
            onClick={closeMobileMenu}
            className="text-white text-2xl font-semibold hover:text-[#FF6B35] transition-colors"
          >
            Process
          </a>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="text-white text-2xl font-semibold hover:text-[#FF6B35] transition-colors"
          >
            Contact
          </a>
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            onClick={closeMobileMenu}
            className="mt-4"
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
