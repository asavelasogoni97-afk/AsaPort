'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // Using mailto as fallback, but also providing better UX
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    const mailtoLink = `mailto:nomasekomahlangu@gmail.com?subject=${subject}&body=${body}`;

    // Try to open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-32">
      <div className="container mx-auto max-w-2xl">
        <div className="font-mono mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-green-400">&gt;</span>
            <span className="text-blue-400"> contact</span>
            <span className="text-white/60">.me</span>
          </h2>
          <div className="text-green-400 text-sm sm:text-base">
            <span className="text-white/60">{'//'}</span> Get in touch
          </div>
        </div>
        
        <div 
          className="border border-green-500/30 p-6 sm:p-8 md:p-10 font-mono rounded-xl shadow-2xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          }}
        >
          {/* Glassmorphism overlay */}
          <div 
            className="absolute inset-0 rounded-xl opacity-50"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              pointerEvents: 'none',
            }}
          />
          
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-green-400 mb-2 text-sm sm:text-base">
                <span className="text-white/60">$</span> name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/30 border border-green-500/30 text-white focus:border-green-500 focus:outline-none transition-colors text-sm sm:text-base font-mono rounded-lg backdrop-blur-sm"
                placeholder="Enter your name..."
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-blue-400 mb-2 text-sm sm:text-base">
                <span className="text-white/60">$</span> email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/30 border border-blue-500/30 text-white focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base font-mono rounded-lg backdrop-blur-sm"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-green-400 mb-2 text-sm sm:text-base">
                <span className="text-white/60">$</span> message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/30 border border-green-500/30 text-white focus:border-green-500 focus:outline-none transition-colors resize-none text-sm sm:text-base font-mono rounded-lg backdrop-blur-sm"
                placeholder="Enter your message..."
                required
              />
            </div>
            {status === 'success' && (
              <div className="px-4 py-3 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg text-sm">
                ✓ Email client opened! Your message is ready to send.
              </div>
            )}
            {status === 'error' && (
              <div className="px-4 py-3 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg text-sm">
                ✗ Something went wrong. Please try again.
              </div>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-3 sm:py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-semibold tracking-wide text-sm sm:text-base font-mono rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⟳</span> Opening email...
                </span>
              ) : (
                <>
                  <span className="text-green-400">$</span> send_message
                </>
              )}
            </button>
          </form>
        </div>
        
        <div className="mt-12 space-y-4 font-mono">
          <div className="text-center space-y-2 text-white/80">
            <p className="text-sm sm:text-base">
              <span className="text-green-400">$</span> phone: <a href="tel:+27726667449" className="text-white/60 hover:text-green-400 transition-colors">072-666-7449</a>
            </p>
            <p className="text-sm sm:text-base">
              <span className="text-blue-400">$</span> email: <a href="mailto:nomasekomahlangu@gmail.com" className="text-white/60 hover:text-blue-400 transition-colors">nomasekomahlangu@gmail.com</a>
            </p>
          </div>
          <div className="text-center space-x-4 sm:space-x-6 pt-4">
            <a 
              href="https://www.linkedin.com/in/nomaseko-mahlangu-0b4171178/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-green-400 transition-colors text-sm sm:text-base"
            >
              <span className="text-green-400">$</span> linkedin
            </a>
            <a 
              href="mailto:nomasekomahlangu@gmail.com" 
              className="text-white/70 hover:text-blue-400 transition-colors text-sm sm:text-base"
            >
              <span className="text-blue-400">$</span> email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
