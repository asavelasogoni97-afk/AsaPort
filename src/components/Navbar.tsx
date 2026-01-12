'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 font-mono ${
        isScrolled ? 'backdrop-blur-md bg-black/80 border-b border-green-500/30' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold">
            <span className="text-green-400">&gt;</span>
            <span className="text-blue-400"> Nomaseko</span>
            <span className="text-white/60">.dev</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#about" 
              className="text-white/80 hover:text-green-400 transition-colors relative group"
            >
              <span className="text-green-400">[</span>About<span className="text-green-400">]</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a 
              href="#projects" 
              className="text-white/80 hover:text-blue-400 transition-colors relative group"
            >
              <span className="text-blue-400">[</span>Projects<span className="text-blue-400">]</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a 
              href="#contact" 
              className="text-white/80 hover:text-green-400 transition-colors relative group"
            >
              <span className="text-green-400">[</span>Contact<span className="text-green-400">]</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Hamburger Button - Bottom Left */}
      <button
        onClick={toggleMenu}
        className="fixed bottom-6 left-6 z-50 md:hidden w-14 h-14 rounded border-2 border-green-500/50 bg-black/80 backdrop-blur-md flex flex-col justify-center items-center gap-1.5 hover:border-green-500 transition-all duration-300 group font-mono"
        aria-label="Toggle menu"
      >
        <span 
          className={`w-6 h-0.5 bg-green-500 transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span 
          className={`w-6 h-0.5 bg-green-500 transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        />
        <span 
          className={`w-6 h-0.5 bg-green-500 transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
        <nav 
          className={`absolute bottom-0 left-0 right-0 bg-black/98 border-t border-green-500/30 transition-transform duration-300 font-mono ${
            isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 py-12 space-y-6">
            <a 
              href="#about" 
              onClick={closeMenu}
              className="block text-2xl text-white/80 hover:text-green-400 transition-colors py-2 border-b border-white/10"
            >
              <span className="text-green-400">$</span> about
            </a>
            <a 
              href="#projects" 
              onClick={closeMenu}
              className="block text-2xl text-white/80 hover:text-blue-400 transition-colors py-2 border-b border-white/10"
            >
              <span className="text-blue-400">$</span> projects
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="block text-2xl text-white/80 hover:text-green-400 transition-colors py-2"
            >
              <span className="text-green-400">$</span> contact
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
