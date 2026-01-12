'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const fullText = 'Nomaseko';
  const subtitle = 'IT Graduate & Quality Engineer';

  useEffect(() => {
    // Typewriter effect
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      
      // Hide scroll indicator when scrolled past hero section or when at bottom
      if (scrollY > heroHeight * 0.3 || scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Tech scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-full" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)',
        }} />
      </div>

      {/* Interactive tech orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.6), transparent)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl transition-all duration-1500 ease-out pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent)',
          left: `${100 - mousePosition.x}%`,
          top: `${100 - mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="text-center space-y-8 relative z-10">
        {/* Terminal-style name */}
        <div className="font-mono">
          <div className="text-green-400 text-sm sm:text-base mb-2 text-left max-w-2xl mx-auto">
            <span className="text-blue-400">$</span> echo <span className="text-white">&quot;</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            {fullText.split('').map((letter, index) => (
              <span
                key={index}
                className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold inline-block font-mono ${
                  index < typedText.length 
                    ? 'text-green-400' 
                    : index === typedText.length 
                    ? 'text-green-400 animate-pulse' 
                    : 'text-white/20'
                }`}
                style={{
                  textShadow: index < typedText.length 
                    ? '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.4)' 
                    : 'none',
                  animation: index < typedText.length ? `glow ${2}s ease-in-out infinite` : 'none',
                }}
              >
                {index < typedText.length ? letter : index === typedText.length ? '▊' : '_'}
              </span>
            ))}
          </div>
          <div className="text-green-400 text-sm sm:text-base mt-2 text-left max-w-2xl mx-auto">
            <span className="text-white">&quot;</span>
          </div>
        </div>

        {/* Terminal prompt style subtitle */}
        <div className="h-8 md:h-12 font-mono">
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wider">
            <span className="text-green-400">&gt;</span>{' '}
            <span className="inline-block">{subtitle}</span>
            <span className="inline-block w-2 h-6 md:h-8 bg-green-500 ml-2 animate-pulse" />
          </p>
        </div>

        {/* Tech description */}
        <div className="font-mono text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          <div className="text-left space-y-1">
            <div><span className="text-green-400">{'//'}</span> Software Development</div>
            <div><span className="text-green-400">{'//'}</span> Data Engineering</div>
            <div><span className="text-green-400">{'//'}</span> Cloud Infrastructure</div>
          </div>
        </div>

        {/* CTA Buttons with tech style */}
        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center font-mono">
          <a href="#projects" className="group relative">
            <div className="absolute inset-0 bg-green-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <button className="relative px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-semibold tracking-wide text-sm sm:text-base rounded-lg">
              <span className="text-green-400">$</span> view_projects
            </button>
          </a>
          <a href="#contact" className="group relative">
            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <button className="relative px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold tracking-wide text-sm sm:text-base rounded-lg">
              <span className="text-blue-400">$</span> contact_me
            </button>
          </a>
        </div>
      </div>

      {/* Terminal scroll indicator - Only shows at top, hides when scrolling */}
      <div 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 font-mono transition-opacity duration-500 ${
          showScrollIndicator ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-white/60 text-xs tracking-widest">SCROLL ↓</span>
          <div className="w-6 h-10 border-2 border-green-500/50 rounded-lg flex justify-center items-start pt-1">
            <div className="w-1 h-3 bg-green-500 animate-pulse rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
