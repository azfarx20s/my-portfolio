import React from 'react';

const App = () => {
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", items: ["PHP", "MySQL", "Java", "RESTful APIs"] },
    { category: "Tools & Environment", items: ["Git & GitHub", "VS Code", "XAMPP", "Command Line"] }
  ];

  const projects = [
    {
      title: "Faculty Web Portal",
      description: "A dynamic, database-driven application featuring role-based access control, facility dashboards, and a modern card-based UI.",
      tech: ["PHP", "MySQL", "CSS"],
      link: "#"
    },
    {
      title: "CampusConnect",
      description: "A modern frontend interface built with a component-driven architecture to manage and display weekly project deliverables.",
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Real-Time Stopwatch",
      description: "A lightweight, precision web utility handling asynchronous state for start, pause, and reset time-tracking functionality.",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight text-blue-600">MQ.</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          </div>
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Hi, I'm <span className="text-blue-600">Muhammad Azfar Qadri.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed mb-10">
            I am a full-stack developer who builds fast, responsive frontends and robust database-driven backends. 
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
              View My Work
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg font-medium border border-slate-300 hover:border-slate-400 hover:bg-slate-100 transition-colors">
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white border-y border-slate-200 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Technical Arsenal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-sm font-semibold text-slate-900 hover:text-blue-600 flex items-center group">
                    View Source 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's build something.</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <a href="mailto:your.email@example.com" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors mb-16">
            Send me an email
          </a>
          
          <div className="flex justify-center space-x-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;