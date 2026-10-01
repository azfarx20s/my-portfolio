import { motion } from "framer-motion";

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
      link: "https://github.com/azfarx20s"
    },
    {
      title: "CampusConnect",
      description: "A modern frontend interface built with a component-driven architecture to manage and display weekly project deliverables.",
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "https://github.com/azfarx20s"
    },
    {
      title: "Real-Time Stopwatch",
      description: "A lightweight, precision web utility handling asynchronous state for start, pause, and reset time-tracking functionality.",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/azfarx20s"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800/80"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold tracking-wider text-white">AZFAR<span className="text-blue-500">.</span></span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
          >
            Get in touch
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 min-h-[85vh] flex items-center relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto mt-16 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Muhammad Azfar Qadri.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            I am a full-stack developer who builds fast, responsive frontends and robust database-driven backends.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects" 
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
            >
              View My Work
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/azfarx20s" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 rounded-xl font-medium border border-slate-800 text-slate-300 bg-slate-900/50 hover:bg-slate-800 hover:text-white transition-all shadow-sm"
            >
              GitHub Profile
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50 border-y border-slate-800/60 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Technical Arsenal</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-900 rounded-2xl border border-slate-800/80 shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-blue-400 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-300 font-medium">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl hover:border-slate-700 transition-all flex flex-col h-full"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800/50 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-200 hover:text-blue-400 flex items-center group">
                    View Source 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-20 bg-slate-900/80 border-t border-slate-800 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Let&apos;s build something.</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:muhammadazfarqadri@gmail.com?subject=Hello%20from%20your%20portfolio" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 transition-colors mb-16 shadow-lg shadow-blue-600/30"
          >
            Send me an email
          </motion.a>
          
          <div className="flex justify-center space-x-8 text-slate-400 text-sm font-medium">
            <a href="https://www.linkedin.com/in/muhammadazfarqadri" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/azfarx20s" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadazfarqadri@gmail.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Gmail</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;