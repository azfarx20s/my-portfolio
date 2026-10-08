import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Custom Component: Card with Radial Spotlight Glow ---
const SpotlightCard = ({ children, className = "", onClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden transform-gpu transition-all duration-300 ${className}`}
    >
      {/* Spotlight Radial Background Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />
      
      {/* Border Highlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4), transparent 80%)`,
          maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </div>
  );
};

// --- Interactive Project Demo Widget ---
const FacultyPortalDemo = () => {
  const [role, setRole] = useState("Faculty");

  const permissions = {
    Admin: ["Manage Faculty Accounts", "Access Facility Dashboards", "Edit Department Directories", "System Audit Logs"],
    Faculty: ["Access Facility Dashboards", "View Department Directories", "Update Personal Profile"],
    Student: ["View Department Directories", "Course Catalog Access"]
  };

  return (
    <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-semibold text-blue-400">⚡ Live Access Simulator</span>
        <span className="text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2 py-0.5 rounded-full">Interactive</span>
      </div>
      <div>
        <p className="text-slate-400 mb-2">Select User Role:</p>
        <div className="flex gap-2">
          {["Admin", "Faculty", "Student"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                role === r
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-600/50"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-slate-400 mb-1">Granted Permissions:</p>
        <ul className="space-y-1">
          {permissions[role].map((perm, i) => (
            <li key={i} className="flex items-center text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
              {perm}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeDemo, setActiveDemo] = useState(null);

  const filterCategories = ["All", "Frontend", "Backend", "Tools"];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", items: ["PHP", "MySQL", "Java", "RESTful APIs"] },
    { category: "Tools", items: ["Git & GitHub", "VS Code", "XAMPP", "Command Line"] }
  ];

  const experiences = [
    {
      period: "2026 - Present",
      role: "Web Development Intern & Project Builder",
      organization: "CampusConnect & Faculty Web Portal",
      description: "Developing responsive component-driven frontends with React, Vite, and Tailwind CSS, alongside dynamic database-driven faculty systems built using PHP and MySQL."
    },
    {
      period: "2024 - Present",
      role: "B.S. Software Engineering",
      organization: "University of Sindh",
      description: "Studying core software engineering principles, database systems, web engineering, security, and mobile application development."
    }
  ];

  const projects = [
    {
      id: "faculty-portal",
      title: "Faculty Web Portal",
      description: "A dynamic, database-driven application featuring role-based access control, facility dashboards, and a modern card-based UI.",
      tech: ["PHP", "MySQL", "CSS"],
      category: "Backend",
      link: "https://github.com/azfarx20s",
      hasDemo: true
    },
    {
      id: "campus-connect",
      title: "CampusConnect",
      description: "A modern frontend interface built with a component-driven architecture to manage and display weekly project deliverables.",
      tech: ["React", "Vite", "Tailwind CSS"],
      category: "Frontend",
      link: "https://github.com/azfarx20s",
      hasDemo: false
    },
    {
      id: "stopwatch",
      title: "Real-Time Stopwatch",
      description: "A lightweight, precision web utility handling asynchronous state for start, pause, and reset time-tracking functionality.",
      tech: ["JavaScript", "HTML", "CSS"],
      category: "Frontend",
      link: "https://github.com/azfarx20s",
      hasDemo: false
    }
  ];

  const filteredSkills = activeFilter === "All" 
    ? skills 
    : skills.filter((s) => s.category.toLowerCase() === activeFilter.toLowerCase());

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase() || p.tech.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  const fadeInUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden antialiased">
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800/80"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold tracking-wider text-white">AZFAR<span className="text-blue-500">.</span></span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          </div>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
          >
            Get in touch
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 min-h-[85vh] flex items-center relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto mt-16 relative z-10">
          <motion.h1 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Muhammad Azfar Qadri.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            Software Engineering student at the University of Sindh. Passionate about building full-stack web applications, dynamic faculty portals, and modern interactive interfaces.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects" 
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
            >
              View My Work
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/cv.html" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3 rounded-xl font-medium border border-blue-500/30 text-blue-400 bg-blue-950/30 hover:bg-blue-900/40 hover:text-white transition-all shadow-sm"
            >
              View CV
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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

      {/* Experience & Education Timeline Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl font-bold mb-12 text-white"
          >
            Experience & Education
          </motion.h2>
          <div className="space-y-6 border-l border-slate-800 ml-3 pl-6">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <SpotlightCard className="p-6">
                  <div className="absolute -left-[35px] top-6 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950"></div>
                  <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-1 block">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-sm font-medium text-slate-300 mb-3">{exp.organization}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Category Bar */}
      <section className="pt-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-semibold uppercase text-slate-500 mr-2 tracking-wider">Filter View:</span>
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeFilter === cat 
                  ? "text-white" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
              }`}
            >
              {activeFilter === cat && (
                <motion.div
                  layoutId="filterTab"
                  className="absolute inset-0 bg-blue-600/20 border border-blue-500/40 rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-900/40 border-y border-slate-800/60 px-6 my-10">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl font-bold mb-12 text-white"
          >
            Technical Arsenal
          </motion.h2>
          <motion.div layout className="grid md:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredSkills.map((skillGroup) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={skillGroup.category}
                >
                  <SpotlightCard className="p-6">
                    <h3 className="text-lg font-semibold text-blue-400 mb-4">{skillGroup.category}</h3>
                    <ul className="space-y-3">
                      {skillGroup.items.map((item, i) => (
                        <li key={i} className="flex items-center text-slate-300 font-medium">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl font-bold mb-12 text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={project.title}
                >
                  <SpotlightCard className="p-8 h-full">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        {project.hasDemo && (
                          <button
                            onClick={() => setActiveDemo(activeDemo === project.id ? null : project.id)}
                            className="text-xs font-medium text-blue-400 bg-blue-950/60 border border-blue-800/50 px-2.5 py-1 rounded-md hover:bg-blue-900/60 transition-colors flex items-center gap-1"
                          >
                            {activeDemo === project.id ? "Hide Demo ✕" : "Try Demo ⚡"}
                          </button>
                        )}
                      </div>
                      <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Expandable Demo Box */}
                      {project.hasDemo && activeDemo === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <FacultyPortalDemo />
                        </motion.div>
                      )}
                    </div>
                    <div className="mt-6">
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
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-20 bg-slate-900/80 border-t border-slate-800 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl font-bold mb-6 text-white"
          >
            Let&apos;s build something.
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-slate-400 mb-8 max-w-lg mx-auto"
          >
            Currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </motion.p>
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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