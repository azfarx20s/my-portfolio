import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const appRef = useRef(null);
  const marqueeRef = useRef(null);
  const isPaused = useRef(false);
  const resumeTimeout = useRef(null);

  const skills = [
    { category: "Languages", items: ["JavaScript (ES6+)", "Java", "C++", "Python", "PHP"] },
    { category: "Frontend", items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend & Databases", items: ["MySQL", "RESTful APIs", "Database Architecture", "OpenSSL & Security"] },
    { category: "Parallel & Distributed", items: ["Multithreading", "Socket Programming", "Distributed Systems", "Linux & VirtualBox"] },
    { category: "Developer Tools", items: ["Git & GitHub", "VS Code", "XAMPP", "Figma"] }
  ];

  const experiences = [
    {
      role: "Web Development Intern",
      company: "Zynvex Solutions",
      period: "2026",
      desc: "Developed responsive frontend interfaces, debugged full-stack web modules, and collaborated on production deliverables using modern web standards."
    }
  ];

  const projects = [
    {
      title: "Campus Connect",
      role: "Lead Frontend Engineer",
      tech: "React, Vite, Tailwind CSS, Vercel",
      problem: "University students lacked a centralized, responsive web platform to organize and showcase project deliverables cleanly across devices.",
      process: "Architected a modular, component-driven React application with Tailwind CSS for consistent styling and Git-integrated CI/CD deployment on Vercel.",
      challenges: "Maintaining smooth UI responsiveness and clean state management across varying mobile screen sizes without heavy bundle overhead.",
      outcome: "Delivered a fast, publicly accessible live web application with zero layout shifts and streamlined student project navigation.",
      repo: "https://github.com/azfarx20s/CampusConnect",
      demo: "https://campus-connect-flame-two.vercel.app/"
    },
    {
      title: "Faculty Web Portal",
      role: "Full-Stack & Database Developer",
      tech: "PHP, MySQL, HTML5, Custom CSS",
      problem: "Manual handling of faculty records, announcements, and departmental information lacked centralized access control and structured organization.",
      process: "Built a dynamic web portal using PHP and MySQL featuring role-based authentication, dedicated faculty dashboards, and structured database routing.",
      challenges: "Designing secure session handling and clean relational database schemas to separate administrative privileges from standard faculty views.",
      outcome: "Streamlined faculty data management with reliable authentication, organized dashboards, and fast database-driven page rendering.",
      repo: "https://github.com/azfarx20s/fet-faculty-portal",
      demo: ""
    }
  ];

  const achievements = [
    {
      title: "NASA Space Apps Challenge 2026 — Galactic Problem Solver",
      issuer: "NASA International Space Apps Challenge",
      desc: "Recognized for collaborating under tight deadlines to build an innovative technical solution for global space and Earth science challenges.",
      link: "/certificate_azfarqa_2026__n_a_s_a__space__apps__challenge.jpeg"
    }
  ];

  const certificates = [
    { title: "Getting started with AWS and Cloud Computing", issuer: "AWS Student Builder Group - University of Sindh", link: "/aws-cloud-cert.jpeg" },
    { title: "Generative AI Mastermind", issuer: "Outskill", link: "/outskill-genai-cert.jpeg" },
    { title: "NASA Space Apps Challenge 2026 - Galactic Problem Solver", issuer: "NASA", link: "/certificate_azfarqa_2026__n_a_s_a__space__apps__challenge.jpeg" },
    { title: "Introduction to Modern AI", issuer: "Cisco", link: "https://www.credly.com/badges/097946b0-ee0c-46ed-9dce-650fefb70897/linked_in_profile" },
    { title: "Climate Action: Tackling the Climate Crisis for a Better World", issuer: "University of Leeds", link: "https://www.futurelearn.com/certificates/9gu6azw" },
    { title: "Web Development Internship", issuer: "Zynvex Solutions", link: "https://www.zynvexcert.live/verify/ZYNVEX-CERT-1911" },
    { title: "Build a free website with WordPress", issuer: "Coursera", link: "https://www.coursera.org/account/accomplishments/verify/HW4SMKJ1JP4T" },
    { title: "Introduction to Developing AI Agents", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/MuhammadAzfarQadri-4418/achievements/K9KDHNXB?ref=https%3a%2f%2fwww.linkedin.com%2f" },
    { title: "Introduction to Generative AI and Agents", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/MuhammadAzfarQadri-4418/achievements/NQ8MUKYF?ref=https%3a%2f%2fwww.linkedin.com%2f" },
    { title: "Agile Project Management", issuer: "Life-Global", link: "https://www.life-global.org/certificate/f51479b1-1250-4c61-bedc-5603d713757e" },
    { title: "AI for Business Professionals", issuer: "Life-Global", link: "https://www.life-global.org/certificate/0165f385-b860-4e5b-9be2-808862c8a705" },
    { title: "The AI Bridge: Source-Grounded AI & NotebookLM Mastery", issuer: "AI Bridge IIUI", link: "https://ai-bridge-iiui.vercel.app/verify/AIB-EULYM8V5" },
    { title: "Entrepreneurship", issuer: "IdeaGist", link: "https://quiz.ideagist.com/ideagist-certificate?cert_hash=b89f5278fb77ebb9" }
  ];

  const recommendations = [
    {
      name: "Moazzam Azam",
      designation: "General Operations Manager",
      organization: "Zynvex Solutions",
      date: "October 30, 2026",
      text: "During his internship, he demonstrated strong analytical thinking, problem-solving abilities, and a solid understanding of web development fundamentals. He contributed effectively to web development projects... We confidently recommend him for roles in Web Development, Front-End Development, Back-End Development, and Full-Stack Development.",
      pdfFile: "/Zynvex Recommendation Letter.pdf"
    }
  ];

  useEffect(() => {
    let animationId;
    let setupTimeout;

    const scrollMarquee = () => {
      if (marqueeRef.current && !isPaused.current) {
        marqueeRef.current.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(scrollMarquee);
    };

    setupTimeout = setTimeout(() => {
      if (marqueeRef.current) {
        const singleBlockWidth = marqueeRef.current.scrollWidth / 10;
        marqueeRef.current.scrollLeft = singleBlockWidth * 4;
      }
      animationId = requestAnimationFrame(scrollMarquee);
    }, 500);

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline();
      heroTimeline
        .fromTo(".nav-fade", { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power3.out", delay: 0.2 })
        .fromTo(".mask-reveal", { y: "110%" }, { y: "0%", duration: 1.4, stagger: 0.15, ease: "expo.out" }, "-=0.8")
        .fromTo(".fade-in-up", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.8");

      gsap.utils.toArray(".scroll-mask-container").forEach((container) => {
        const text = container.querySelector(".scroll-mask-reveal");
        gsap.fromTo(text,
          { y: "110%" },
          {
            y: "0%",
            ease: "expo.out",
            duration: 1.5,
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
            }
          }
        );
      });

      gsap.utils.toArray(".scroll-fade").forEach((element) => {
        gsap.fromTo(element,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
            }
          }
        );
      });
    }, appRef);

    return () => {
      clearTimeout(setupTimeout);
      clearTimeout(resumeTimeout.current);
      cancelAnimationFrame(animationId);
      ctx.revert();
    };
  }, []);

  const handleScroll = () => {
    if (!marqueeRef.current) return;
    const { scrollLeft, scrollWidth } = marqueeRef.current;
    const singleBlockWidth = scrollWidth / 10;

    if (scrollLeft <= singleBlockWidth * 2) {
      marqueeRef.current.scrollLeft = scrollLeft + (singleBlockWidth * 4);
    } else if (scrollLeft >= singleBlockWidth * 8) {
      marqueeRef.current.scrollLeft = scrollLeft - (singleBlockWidth * 4);
    }
  };

  const handleTouchStart = () => {
    isPaused.current = true;
    clearTimeout(resumeTimeout.current);
  };

  const handleTouchEnd = () => {
    resumeTimeout.current = setTimeout(() => {
      isPaused.current = false;
    }, 1500);
  };

  return (
    <div ref={appRef} className="min-h-screen bg-[#0B0B0B] text-[#F4F0EB] font-sans selection:bg-[#FF5A1F] selection:text-[#F4F0EB] overflow-x-hidden antialiased">

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* --- NAVIGATION --- */}
      <nav aria-label="Primary Navigation" className="fixed w-full top-0 z-50 mix-blend-difference px-6 md:px-12 py-6 flex justify-between items-center pointer-events-none">
        <a href="#home" className="nav-fade pointer-events-auto font-medium tracking-tight text-lg text-[#F4F0EB] will-change-transform">
          Azfar<span className="text-[#FF5A1F] font-bold">.</span>
        </a>
        <div className="nav-fade pointer-events-auto flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-[#A6A09B] will-change-transform">
          <a href="#about" className="hover:text-[#FF7847] transition-colors duration-300">About</a>
          <a href="#experience" className="hover:text-[#FF7847] transition-colors duration-300">Experience</a>
          <a href="#work" className="hover:text-[#FF7847] transition-colors duration-300">Work</a>
          <a href="#certifications" className="hover:text-[#FF7847] transition-colors duration-300">Certificates</a>
          <a href="#contact" className="hover:text-[#FF7847] transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* --- HOME / HERO --- */}
      <header id="home" className="min-h-[100dvh] flex flex-col justify-center md:justify-end md:pb-24 pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
          <div className="max-w-5xl">
            <div className="overflow-hidden leading-tight pb-2 md:pb-4">
              <h1 className="mask-reveal will-change-transform text-6xl sm:text-[5.5rem] md:text-8xl lg:text-[9.5rem] font-bold tracking-tighter text-[#F4F0EB]">
                Muhammad
              </h1>
            </div>
            <div className="overflow-hidden leading-tight pb-2 md:pb-6">
              <h1 className="mask-reveal will-change-transform text-6xl sm:text-[5.5rem] md:text-8xl lg:text-[9.5rem] font-extrabold tracking-tighter text-[#FF5A1F]">
                Azfar.
              </h1>
            </div>
          </div>

          <div className="fade-in-up will-change-transform flex-shrink-0 mb-2">
           <img
  src="/profile.jpeg"
  alt="Muhammad Azfar - Software Engineer"
  onError={(e) => {
    e.currentTarget.src = "https://ui-avatars.com/api/?name=Muhammad+Azfar&background=20140F&color=FF5A1F&size=256&bold=true";
  }}
  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border border-[#39241A]"
/>
          </div>
        </div>

        <div className="fade-in-up will-change-transform flex flex-col md:flex-row gap-8 justify-between items-start md:items-end border-t border-[#39241A] pt-8 mt-4">
          <p className="text-xl md:text-2xl font-light text-[#A6A09B] max-w-xl leading-relaxed">
            Software Engineer &amp; Full-Stack Developer building scalable web applications, distributed systems, and intuitive digital interfaces.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/Muhammad_Azfar_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full bg-[#FF5A1F] text-[#0B0B0B] hover:bg-[#FF7847] transition-colors duration-300"
            >
              Download CV &#8599;
            </a>
            <a href="https://github.com/azfarx20s" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest text-[#F4F0EB] hover:text-[#FF7847] transition-colors duration-300">GitHub</a>
            <span className="text-[#70645D]">/</span>
            <a href="https://www.linkedin.com/in/muhammad-azfar-qadri-b5b35b363" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest text-[#F4F0EB] hover:text-[#FF7847] transition-colors duration-300">LinkedIn</a>
          </div>
        </div>
      </header>

      {/* --- ABOUT, OBJECTIVE & EDUCATION --- */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#39241A]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <div className="sticky top-32 scroll-mask-container overflow-hidden pb-2">
              <h2 className="scroll-mask-reveal will-change-transform text-3xl font-bold tracking-tight text-[#F4F0EB]">About &amp; Objective</h2>
            </div>
          </div>
          <div className="md:w-2/3 space-y-16">
            <div className="scroll-fade will-change-transform space-y-8 text-2xl md:text-3xl font-light leading-snug text-[#A6A09B]">
              <p>
                I am Muhammad Azfar, a <span className="text-[#FF5A1F] font-semibold">Software Engineer</span> based in Pakistan with a strong interest in full-stack development, distributed computing, and system security.
              </p>
              <p>
                My strength lies in turning complex backend requirements into clean, modular, and fast user interfaces. I value structured problem-solving, continuous learning, and practical engineering.
              </p>
            </div>

            <div className="scroll-fade will-change-transform border-t border-[#39241A] pt-12">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF5A1F] block mb-4">Career Objective</span>
              <p className="text-lg md:text-xl font-light text-[#F4F0EB] leading-relaxed">
                Seeking software engineering roles and collaborative projects where I can apply full-stack development, cloud fundamentals, and parallel/distributed computing principles to build reliable, high-performance software systems.
              </p>
            </div>

            <div className="scroll-fade will-change-transform border-t border-[#39241A] pt-12">
              <span className="text-sm font-bold uppercase tracking-widest text-[#70645D] block mb-4">Education</span>
              <h3 className="text-2xl font-normal text-[#F4F0EB] mb-1">Bachelor of Science in Software Engineering</h3>
              <p className="text-lg text-[#A6A09B] mb-2">University of Sindh, Jamshoro &mdash; 2024 &ndash; Present</p>
              <p className="text-sm text-[#70645D]">Relevant Coursework: Parallel &amp; Distributed Computing, Operating Systems, Database Systems, Web Engineering, Information Security, Mobile App Development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SKILLS --- */}
      <section id="skills" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#39241A]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <div className="sticky top-32 scroll-mask-container overflow-hidden pb-2">
              <h2 className="scroll-mask-reveal will-change-transform text-3xl font-bold tracking-tight text-[#F4F0EB]">Technical Skills</h2>
            </div>
          </div>
          <div className="md:w-2/3 flex flex-col space-y-14">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="scroll-fade will-change-transform group">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF5A1F] mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="text-xl md:text-2xl font-light text-[#A6A09B] group-hover:text-[#F4F0EB] transition-colors duration-300">
                      {item}
                      {i < skillGroup.items.length - 1 && <span className="text-[#70645D] ml-6 font-thin">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#39241A]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <div className="sticky top-32 scroll-mask-container overflow-hidden pb-2">
              <h2 className="scroll-mask-reveal will-change-transform text-3xl font-bold tracking-tight text-[#F4F0EB]">Experience</h2>
            </div>
          </div>
          <div className="md:w-2/3 flex flex-col divide-y divide-[#39241A]">
            {experiences.map((exp, idx) => (
              <div key={idx} className="scroll-fade will-change-transform py-8 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-[#F4F0EB]">{exp.role}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A1F]">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-[#70645D] mb-4">{exp.company}</p>
                <p className="text-base md:text-lg font-light text-[#A6A09B] leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SELECTED WORKS (DETAILED CASE STUDIES) --- */}
      <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#39241A]">
        <div className="scroll-mask-container overflow-hidden mb-16 pb-4">
          <h2 className="scroll-mask-reveal will-change-transform text-4xl md:text-6xl font-bold tracking-tighter text-[#F4F0EB]">Selected Works.</h2>
        </div>

        <div id="projects-section" className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="scroll-fade will-change-transform p-8 md:p-12 rounded-3xl bg-[#141210] border border-[#39241A] hover:border-[#FF5A1F]/50 transition-colors duration-500">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A1F] block mb-3">{project.role}</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[#F4F0EB] mb-2">{project.title}</h3>
              <p className="text-sm text-[#70645D] mb-8">{project.tech}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base font-light text-[#A6A09B] mb-8">
                <div>
                  <strong className="text-[#F4F0EB] font-semibold block mb-1">Problem</strong>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <strong className="text-[#F4F0EB] font-semibold block mb-1">Process &amp; Implementation</strong>
                  <p>{project.process}</p>
                </div>
                <div>
                  <strong className="text-[#F4F0EB] font-semibold block mb-1">Challenges</strong>
                  <p>{project.challenges}</p>
                </div>
                <div>
                  <strong className="text-[#F4F0EB] font-semibold block mb-1">Outcome</strong>
                  <p>{project.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full border border-[#39241A] text-[#F4F0EB] hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-all duration-300">
                  Source Code &rarr;
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full bg-[#FF5A1F] text-[#0B0B0B] hover:bg-[#FF7847] transition-all duration-300">
                    Live Demo &#8599;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ACHIEVEMENTS & AWARDS --- */}
      <section id="achievements" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#39241A]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <div className="sticky top-32 scroll-mask-container overflow-hidden pb-2">
              <h2 className="scroll-mask-reveal will-change-transform text-3xl font-bold tracking-tight text-[#F4F0EB]">Achievements</h2>
            </div>
          </div>
          <div className="md:w-2/3 space-y-8">
            {achievements.map((ach, idx) => (
              <div key={idx} className="scroll-fade will-change-transform p-8 rounded-2xl bg-[#141210] border border-[#39241A] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A1F] block mb-2">{ach.issuer}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#F4F0EB] mb-2">{ach.title}</h3>
                  <p className="text-base font-light text-[#A6A09B]">{ach.desc}</p>
                </div>
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 inline-flex items-center text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full border border-[#39241A] text-[#F4F0EB] hover:border-[#FF5A1F] hover:text-[#FF5A1F] transition-colors duration-300"
                >
                  View Proof &#8599;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS & COURSES --- */}
      <section id="certifications" className="py-32 border-t border-[#39241A] overflow-hidden">
        <div className="scroll-fade will-change-transform">
          <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 scroll-mask-container overflow-hidden pb-4">
            <h2 className="scroll-mask-reveal will-change-transform text-4xl md:text-6xl font-bold tracking-tighter text-[#F4F0EB]">Certifications.</h2>
          </div>

          <div
            ref={marqueeRef}
            onScroll={handleScroll}
            onMouseEnter={() => { isPaused.current = true; clearTimeout(resumeTimeout.current); }}
            onMouseLeave={() => { isPaused.current = false; }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ WebkitOverflowScrolling: 'touch' }}
            className="flex overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing w-full"
          >
            {[...Array(10)].map((_, blockId) => (
              <div key={`block-${blockId}`} className="flex gap-6 pr-6 w-max flex-shrink-0">
                {certificates.map((cert, idx) => (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    key={`cert-${blockId}-${idx}`}
                    style={{ transform: 'translateZ(0)' }}
                    className="flex-shrink-0 w-80 p-6 rounded-2xl bg-[#141210] border border-[#39241A] hover:border-[#FF5A1F] hover:bg-[#20140F] transition-colors duration-300 group flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#70645D]">{cert.issuer}</span>
                      <span className="text-[#FF5A1F] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">&#8599;</span>
                    </div>
                    <h3 className="text-lg font-medium text-[#F4F0EB] leading-snug">{cert.title}</h3>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RECOMMENDATIONS --- */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#39241A]">
        <div className="scroll-mask-container overflow-hidden mb-16 pb-4">
          <h2 className="scroll-mask-reveal will-change-transform text-4xl md:text-6xl font-bold tracking-tighter text-[#F4F0EB]">Testimonials.</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="scroll-fade will-change-transform bg-[#20140F] p-10 md:p-14 rounded-3xl border border-[#39241A] flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <span className="text-6xl text-[#FF5A1F] font-serif leading-none opacity-50">"</span>
                <p className="text-xl md:text-2xl font-light text-[#F4F0EB] leading-relaxed italic mb-8 -mt-4">
                  {rec.text}
                </p>
                <div>
                  <h4 className="text-lg font-bold text-[#FF5A1F]">{rec.name}</h4>
                  <p className="text-sm font-medium text-[#A6A09B]">{rec.designation}</p>
                  <p className="text-sm text-[#70645D]">{rec.organization} &mdash; {rec.date}</p>
                </div>
              </div>
              <div className="md:w-1/3 flex items-start md:justify-end border-t md:border-t-0 md:border-l border-[#39241A] pt-8 md:pt-0 md:pl-12">
                <a
                  href={rec.pdfFile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#2A1B14] text-[#F4F0EB] font-bold text-sm uppercase tracking-widest border border-[#39241A] hover:border-[#FF5A1F] hover:text-[#FF5A1F] rounded-xl transition-colors duration-300"
                >
                  View Letter PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#39241A] flex flex-col items-center text-center">
        <div className="scroll-mask-container overflow-hidden mb-8 pb-4">
          <h2 className="scroll-mask-reveal will-change-transform text-5xl md:text-8xl font-bold tracking-tighter text-[#F4F0EB]">
            Let's talk.
          </h2>
        </div>

        <p className="scroll-fade will-change-transform text-xl font-light text-[#A6A09B] mb-12 max-w-md">
         Available for software engineering opportunities and collaborations.
        </p>

        <a
          href="mailto:muhammadazfarqadri@gmail.com"
          className="scroll-fade will-change-transform text-lg md:text-2xl font-bold text-[#F4F0EB] border-b-2 border-[#FF5A1F]/50 hover:text-[#FF7847] hover:border-[#FF7847] pb-2 transition-colors duration-300"
        >
          muhammadazfarqadri@gmail.com
        </a>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-[#39241A] py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-[#70645D]">
        <p>&copy; {new Date().getFullYear()} Muhammad Azfar. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#home" className="hover:text-[#F4F0EB] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#F4F0EB] transition-colors">About</a>
          <a href="#work" className="hover:text-[#F4F0EB] transition-colors">Projects</a>
          <a href="https://github.com/azfarx20s" target="_blank" rel="noreferrer" className="hover:text-[#FF5A1F] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/muhammad-azfar-qadri-b5b35b363" target="_blank" rel="noreferrer" className="hover:text-[#FF5A1F] transition-colors">LinkedIn</a>
        </div>
      </footer>

    </div>
  );
};

export default App;