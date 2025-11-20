"use client";

import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6">
      <div className="w-90% md:w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image src={logo} alt="Logo" width={200} height={100} />
            <p className="text-gray-400 mb-4">
              High-end digital solutions for forward-thinking brands.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Website Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Design Services
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Social Media
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:hello@enterproduction.com"
                  className="hover:text-[#FF6B35] transition-colors"
                >
                  hello@enterproduction.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-[#FF6B35] transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} || Website Created By{" "}
            <a
              href="https://sohanthink.com"
              className="text-green-500 hover:text-[#FF6B35] transition-colors"
            >
              sohanthink
            </a>
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-[#FF6B35] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#FF6B35] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
