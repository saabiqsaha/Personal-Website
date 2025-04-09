'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-apple-gray/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-medium text-apple-dark">
              MSS
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="apple-nav-link">About Me</a>
            <a href="#founder-portfolio" className="apple-nav-link">Founder Portfolio</a>
            <a href="#projects" className="apple-nav-link">Projects</a>
          </nav>
          
          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="mailto:saabiqsaha@gmail.com" 
              className="apple-button"
            >
              Contact Me
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-apple-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-apple-light">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="block px-3 py-2 apple-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </a>
            <a 
              href="#founder-portfolio" 
              className="block px-3 py-2 apple-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Founder Portfolio
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 apple-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="mailto:saabiqsaha@gmail.com" 
              className="block px-3 py-2 apple-button mt-3 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
} 