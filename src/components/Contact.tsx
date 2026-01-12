'use client';

export default function Contact() {
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
          className="border border-green-500/30 p-6 sm:p-8 md:p-10 font-mono rounded-xl shadow-lg"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <form className="space-y-6" action="mailto:nomasekomahlangu@gmail.com" method="post" encType="text/plain">
            <div>
              <label htmlFor="name" className="block text-green-400 mb-2 text-sm sm:text-base">
                <span className="text-white/60">$</span> name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-black/50 border border-green-500/30 text-white focus:border-green-500 focus:outline-none transition-colors text-sm sm:text-base font-mono rounded-lg"
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
                className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 text-white focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base font-mono rounded-lg"
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
                className="w-full px-4 py-3 bg-black/50 border border-green-500/30 text-white focus:border-green-500 focus:outline-none transition-colors resize-none text-sm sm:text-base font-mono rounded-lg"
                placeholder="Enter your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 sm:py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-semibold tracking-wide text-sm sm:text-base font-mono rounded-lg"
            >
              <span className="text-green-400">$</span> send_message
            </button>
          </form>
        </div>
        <div className="mt-12 space-y-4 font-mono">
          <div className="text-center space-y-2 text-white/80">
            <p className="text-sm sm:text-base">
              <span className="text-green-400">$</span> phone: <span className="text-white/60">072-666-7449</span>
            </p>
            <p className="text-sm sm:text-base">
              <span className="text-blue-400">$</span> email: <span className="text-white/60">nomasekomahlangu@gmail.com</span>
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
