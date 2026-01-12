'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Data Engineering Solutions',
      description: 'Developed automated data pipelines using SSIS and cloud infrastructure (AWS & Azure) for data ingestion and transformation at Standard Bank.',
      tech: ['SSIS', 'Azure', 'AWS', 'SQL', 'Python'],
      color: 'green',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Built responsive e-commerce websites for clients with modern web technologies and best practices.',
      tech: ['JavaScript', 'React', 'Node.js', 'MySQL'],
      color: 'blue',
    },
    {
      title: 'Web Applications',
      description: 'Created responsive web applications collaborating in agile project teams, focusing on user experience and performance.',
      tech: ['React', 'Angular', 'TypeScript', 'Tailwind CSS'],
      color: 'green',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="font-mono mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-green-400">&gt;</span>
            <span className="text-blue-400"> projects</span>
            <span className="text-white/60">.list</span>
          </h2>
          <div className="text-green-400 text-sm sm:text-base">
            <span className="text-white/60">{'//'}</span> Portfolio Projects
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const isGreen = project.color === 'green';
            const borderColor = isGreen ? 'border-green-500/50' : 'border-blue-500/50';
            const hoverBorder = isGreen ? 'hover:border-green-500' : 'hover:border-blue-500';
            const titleColor = isGreen ? 'text-green-400' : 'text-blue-400';
            const hoverTitle = isGreen ? 'group-hover:text-green-500' : 'group-hover:text-blue-500';
            
            return (
              <div
                key={index}
                className={`border ${borderColor} bg-white/5 backdrop-blur-md p-6 sm:p-8 ${hoverBorder} hover:bg-white/10 transition-all duration-300 group cursor-pointer font-mono rounded-xl shadow-lg shadow-black/20`}
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <div className="mb-2 text-white/60 text-xs">
                  <span className={isGreen ? 'text-green-400' : 'text-blue-400'}>[</span>
                  <span className="text-white/60">project-{index + 1}</span>
                  <span className={isGreen ? 'text-green-400' : 'text-blue-400'}>]</span>
                </div>
                <h3 className={`text-xl sm:text-2xl font-semibold ${titleColor} mb-3 ${hoverTitle} transition-colors`}>
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-white/5 text-white/60 border border-white/10 hover:border-white/30 transition-colors font-mono rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
