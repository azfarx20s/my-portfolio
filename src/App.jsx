import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const appRef = useRef(null);

  const skills = [
    { category: "Languages", items: ["JavaScript (ES6+)", "Java", "C++", "Python", "PHP"] },
    { category: "Frontend", items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend", items: ["MySQL", "RESTful APIs", "Database Architecture", "OpenSSL & Security"] },
    { category: "Tools", items: ["Git & GitHub", "VS Code", "XAMPP", "Figma"] }
  ];

  const projects = [
    {
      title: "Campus Connect",
      role: "Frontend Engineering",
      desc: "A modern interface utilizing component-driven architecture for university project deliverables. Focuses on clean state management and responsive layouts.",
      tech: "React, Vite, Tailwind",
      repo: "https://github.com/azfarx20s/CampusConnect", 
      demo: "https://campus-connect-flame-two.vercel.app/", 
      speed: "1.15" 
    },
    {
      title: "Faculty Web Portal",
      role: "Full-Stack & Database",
      desc: "Role-based authentication and faculty management system with dedicated facility dashboards and secure data routing.",
      tech: "PHP, MySQL, Custom CSS",
      repo: "https://github.com/azfarx20s/fet-faculty-portal", 
      demo: "", 
      speed: "0.85"
    }
  ];

  const certificates = [
    { title: "Web Development Internship", issuer: "Zynvex Solutions", link: "https://www.zynvexcert.live/verify/ZYNVEX-CERT-1911" },
    { title: "Coursera Course Certification", issuer: "Coursera", link: "https://www.coursera.org/account/accomplishments/verify/HW4SMKJ1JP4T" },
    { title: "Microsoft Learn Achievement 1", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/MuhammadAzfarQadri-4418/achievements/K9KDHNXB?ref=https%3a%2f%2fwww.linkedin.com%2f" },
    { title: "Microsoft Learn Achievement 2", issuer: "Microsoft", link: "https://learn.microsoft.com/en-us/users/MuhammadAzfarQadri-4418/achievements/NQ8MUKYF?ref=https%3a%2f%2fwww.linkedin.com%2f" },
    { title: "Life-Global Certification 1", issuer: "Life-Global", link: "https://www.life-global.org/certificate/f51479b1-1250-4c61-bedc-5603d713757e" },
    { title: "Life-Global Certification 2", issuer: "Life-Global", link: "https://www.life-global.org/certificate/0165f385-b860-4e5b-9be2-808862c8a705" },
    { title: "AI Bridge Certification", issuer: "AI Bridge IIUI", link: "https://ai-bridge-iiui.vercel.app/verify/AIB-EULYM8V5" },
    { title: "IdeaGist Certification", issuer: "IdeaGist", link: "https://quiz.ideagist.com/ideagist-certificate?cert_hash=b89f5278fb77ebb9" }
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
    const ctx = gsap.context(() => {
      
      // 1. Initial Hero Animations
      const heroTimeline = gsap.timeline();
      heroTimeline
        .fromTo(".nav-fade", { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power3.out", delay: 0.2 })
        .fromTo(".mask-reveal", { y: "110%" }, { y: "0%", duration: 1.4, stagger: 0.15, ease: "expo.out" }, "-=0.8")
        .fromTo(".fade-in-up", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.8");

      // 2. Scroll-triggered Text Masking
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

      // 3. Scroll-triggered Fade Ins
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

      // 4. Parallax Project Cards
      const isDesktop = window.innerWidth > 768;
      gsap.utils.toArray(".parallax-card").forEach((card) => {
        gsap.fromTo(card, 
          { opacity: 0 }, 
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );

        if (isDesktop) {
          const speed = card.getAttribute("data-speed") || 1;
          gsap.fromTo(card, 
            { y: 0 },
            {
              y: () => (1 - parseFloat(speed)) * 200, 
              ease: "none",
              scrollTrigger: {
                trigger: "#projects-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2, 
              }
            }
          );
        }
      });

    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-[#0B0B0B] text-[#F4F0EB] font-sans selection:bg-[#FF5A1F] selection:text-[#F4F0EB] antialiased">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full top-0 z-50 mix-blend-difference px-6 md:px-12 py-6 flex justify-between items-center pointer-events-none">
        <div className="nav-fade pointer-events-auto font-medium tracking-tight text-lg text-[#F4F0EB] will-change-transform">
          Azfar<span className="text-[#FF5A1F] font-bold">.</span>
        </div>
        <div className="nav-fade pointer-events-auto flex gap-6 text-sm font-medium text-[#A6A09B] will-change-transform">
          <a href="#about" className="hover:text-[#FF7847] transition-colors duration-300">About</a>
          <a href="#work" className="hover:text-[#FF7847] transition-colors duration-300">Work</a>
          <a href="#contact" className="hover:text-[#FF7847] transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="min-h-[100dvh] flex flex-col justify-center md:justify-end md:pb-24 pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-8 max-w-5xl">
          <div className="overflow-hidden leading-tight pb-2 md:pb-4">
            <h1 className="mask-reveal will-change-transform text-6xl sm:text-[5.5rem] md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-[#F4F0EB]">
              Muhammad
            </h1>
          </div>
          <div className="overflow-hidden leading-tight pb-2 md:pb-6">
            <h1 className="mask-reveal will-change-transform text-6xl sm:text-[5.5rem] md:text-8xl lg:text-[10rem] font-extrabold tracking-tighter text-[#FF5A1F]">
              Azfar.
            </h1>
          </div>
        </div>

        <div className="fade-in-up will-change-transform flex flex-col md:flex-row gap-8 justify-between items-start md:items-end border-t border-[#39241A] pt-8 mt-4">
          <p className="text-xl md:text-2xl font-light text-[#A6A09B] max-w-xl leading-relaxed">
            Software Engineer building fluid, full-stack digital experiences with a focus on clean architecture and precise interface design.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/azfarx20s" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest text-[#F4F0EB] hover:text-[#FF7847] transition-colors duration-300">GitHub</a>
            <span className="text-[#70645D]">/</span>
            <a href="https://www.linkedin.com/in/muhammad-azfar-qadri-b5b35b363" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest text-[#F4F0EB] hover:text-[#FF7847] transition-colors duration-300">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#39241A]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          <div className="md:w-1/3">
            <div className="sticky top-32 scroll-mask-container overflow-hidden pb-2">
              <h2 className="scroll-mask-reveal will-change-transform text-3xl font-bold tracking-tight text-[#F4F0EB]">Background</h2>
            </div>
          </div>

          <div className="md:w-2/3 space-y-16">
            <div className="scroll-fade will-change-transform space-y-8 text-2xl md:text-4xl font-light leading-snug text-[#A6A09B]">
              <p>
                I am Azfar, a <span className="text-[#FF5A1F] font-semibold">Software Engineer</span> based in Pakistan. 
              </p>
              <p>
                My approach to software is rooted in simplicity. I believe the best applications hide their complex backend logic behind fast, intuitive, and seamlessly engineered frontends.
              </p>
            </div>

            <div className="scroll-fade will-change-transform border-t border-[#39241A] pt-12">
              <span className="text-sm font-bold uppercase tracking-widest text-[#70645D] block mb-6">Education</span>
              <h3 className="text-2xl font-normal text-[#F4F0EB] mb-2">B.S. Software Engineering</h3>
              <p className="text-lg text-[#A6A09B]">University of Sindh, Jamshoro</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SKILLS --- */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#39241A]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          <div className="md:w-1/3">
            <div className="sticky top-32 scroll-mask-container overflow-hidden pb-2">
              <h2 className="scroll-mask-reveal will-change-transform text-3xl font-bold tracking-tight text-[#F4F0EB]">Expertise</h2>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="scroll-fade will-change-transform p-8 rounded-2xl bg-[#20140F] border border-[#39241A] hover:border-[#FF5A1F] hover:bg-[#2A1B14] transition-colors duration-500">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF5A1F] mb-6">{skillGroup.category}</h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="text-lg font-light text-[#F4F0EB] flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#FF5A1F] rounded-full mr-4 opacity-80"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SELECTED WORK --- */}
      <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#39241A]">
        <div className="scroll-mask-container overflow-hidden mb-24 pb-4">
          <h2 className="scroll-mask-reveal will-change-transform text-4xl md:text-6xl font-bold tracking-tighter text-[#F4F0EB]">Selected Works.</h2>
        </div>

        <div id="projects-section" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              data-speed={project.speed}
              className={`parallax-card will-change-transform bg-[#20140F] p-10 md:p-14 rounded-3xl flex flex-col justify-between min-h-[450px] border border-[#39241A] hover:bg-[#2A1B14] hover:border-[#FF5A1F] transition-colors duration-500 ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A1F] block mb-4">
                  {project.role}
                </span>
                <h3 className="text-3xl font-bold text-[#F4F0EB] mb-6 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg font-light text-[#A6A09B] leading-relaxed mb-8">
                  {project.desc}
                </p>
              </div>

              <div>
                <div className="text-sm text-[#70645D] font-medium mb-8">
                  {project.tech}
                </div>
                <div className="flex flex-wrap gap-6 items-center">
                  <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[#F4F0EB] hover:text-[#FF7847] transition-colors duration-300 group">
                    Repository 
                    <span className="ml-2 text-lg leading-none group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[#FF5A1F] hover:text-[#F4F0EB] transition-colors duration-300 group">
                      Live Demo 
                      <span className="ml-2 text-lg leading-none group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">&#8599;</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CERTIFICATIONS --- */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#39241A]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          <div className="md:w-1/3">
            <div className="sticky top-32 scroll-mask-container overflow-hidden pb-2">
              <h2 className="scroll-mask-reveal will-change-transform text-3xl font-bold tracking-tight text-[#F4F0EB]">Certifications</h2>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certificates.map((cert, idx) => (
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer" 
                key={idx} 
                className="scroll-fade will-change-transform block p-6 rounded-2xl bg-[#141210] border border-[#39241A] hover:border-[#FF5A1F] hover:bg-[#20140F] transition-colors duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#70645D]">{cert.issuer}</span>
                  <span className="text-[#FF5A1F] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">&#8599;</span>
                </div>
                <h3 className="text-lg font-medium text-[#F4F0EB] leading-snug">{cert.title}</h3>
              </a>
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
        
        <p className="scroll-fade will-change-transform text-xl font-light text-[#A6A09B] mb-16 max-w-md">
          Available for software engineering opportunities and collaborations.
        </p>
        
        <a 
          href="mailto:muhammadazfarqadri@gmail.com" 
          className="scroll-fade will-change-transform text-lg md:text-2xl font-bold text-[#F4F0EB] border-b-2 border-[#FF5A1F]/50 hover:text-[#FF7847] hover:border-[#FF7847] pb-2 transition-colors duration-300"
        >
          muhammadazfarqadri@gmail.com
        </a>

        <div className="scroll-fade will-change-transform flex gap-8 mt-24">
          <a href="https://github.com/azfarx20s" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest text-[#70645D] hover:text-[#F4F0EB] transition-colors duration-300">GitHub</a>
          <a href="https://www.linkedin.com/in/muhammad-azfar-qadri-b5b35b363" target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest text-[#70645D] hover:text-[#F4F0EB] transition-colors duration-300">LinkedIn</a>
        </div>
      </section>

    </div>
  );
};

export default App;