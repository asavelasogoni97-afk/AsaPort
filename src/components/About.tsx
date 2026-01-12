'use client';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl">
        <div className="font-mono mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-green-400">&gt;</span>
            <span className="text-blue-400"> about</span>
            <span className="text-white/60">.me</span>
          </h2>
          <div className="text-green-400 text-sm sm:text-base">
            <span className="text-white/60">{'//'}</span> About Nomaseko
          </div>
        </div>
        
        <div className="space-y-6 sm:space-y-8 text-white/80 text-base sm:text-lg md:text-xl leading-relaxed font-mono">
          <div 
            className="border-l-4 border-green-500 p-4 sm:p-6 rounded-r-xl shadow-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            <div 
              className="absolute inset-0 rounded-r-xl opacity-50"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                pointerEvents: 'none',
              }}
            />
            <p className="text-white/90 relative z-10">
              A motivated IT graduate and former Standard Bank learner with practical experience in software development, data engineering, and cloud infrastructure (AWS & Azure). Skilled in programming, data handling, and automated workflows, I bring a passion for learning and quality-driven software delivery.
            </p>
          </div>
          
          <div 
            className="border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-xl shadow-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            <div 
              className="absolute inset-0 rounded-r-xl opacity-50"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                pointerEvents: 'none',
              }}
            />
            <p className="text-white/90 relative z-10">
              I specialize in creating beautiful, functional, and performant web applications that deliver exceptional user experiences, with expertise in both frontend and backend technologies.
            </p>
          </div>
          
          <div className="pt-8 sm:pt-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-400 mb-6 sm:mb-8">
              <span className="text-white/60">$</span> skills
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-green-400 mb-3 text-sm sm:text-base font-semibold">
                  <span className="text-white/60">{'//'}</span> Programming Languages
                </h4>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                  {['Java', 'Python', 'JavaScript', 'C++', 'C#', 'SQL', 'TypeScript'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 sm:px-6 py-2 sm:py-3 border border-green-500/30 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 text-sm sm:text-base font-mono rounded-lg backdrop-blur-sm bg-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-blue-400 mb-3 text-sm sm:text-base font-semibold">
                  <span className="text-white/60">{'//'}</span> Cloud & DevOps
                </h4>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                  {['AWS', 'Azure', 'Agile', 'SSIS', 'CI/CD'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 sm:px-6 py-2 sm:py-3 border border-blue-500/30 text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 text-sm sm:text-base font-mono rounded-lg backdrop-blur-sm bg-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-green-400 mb-3 text-sm sm:text-base font-semibold">
                  <span className="text-white/60">{'//'}</span> Frameworks & Tools
                </h4>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                  {['React', 'Next.js', 'Angular', 'Node.js', 'Tailwind CSS', 'MSSQL', 'MySQL'].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 sm:px-6 py-2 sm:py-3 border border-green-500/30 text-green-400 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 text-sm sm:text-base font-mono rounded-lg backdrop-blur-sm bg-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
