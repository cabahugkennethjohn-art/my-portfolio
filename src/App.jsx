import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Menu, X, Mail, Phone, Facebook, Download } from 'lucide-react';
import profileImg from './assets/knt.jpg';
import ciaImg from './assets/CIA.jpg';
import eunKImg from './assets/EunKEntertainment.jpg';
import mtoImg from './assets/MTO Technotrends.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import TechBackground from './components/TechBackground';

gsap.registerPlugin(useGSAP, TextPlugin);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = useRef(null);

  useGSAP(() => {
    // Hero section animations
    const tl = gsap.timeline();
    
    tl.from('.hero-badge', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    })
    .from('.hero-title-container', {
      opacity: 0,
      duration: 0.2
    }, '-=0.4')
    .to('.type-text-1', {
      duration: 0.6,
      text: "Hello!",
      ease: "none"
    })
    .to('.type-text-2', {
      duration: 1.2,
      text: "I'm Kenneth.",
      ease: "none"
    })
    .from('.hero-desc', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-links a', {
      x: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-image', {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=1');
  }, { scope: container });

  // --- Resume Data ---
  const sampleSkills = [
    {
      category: "HARDWARE & NETWORKING",
      items: ["Printer Network Sharing", "Basic Printer Troubleshooting", "Computer Hardware & Software Repair", "Networking & LAN Routing", "Laptop Repair"]
    },
    {
      category: "SECURITY SYSTEMS",
      items: ["CCTV Camera Installation", "CCTV Configuration", "CCTV Troubleshooting", "Door Lock System Programming"]
    },
    {
      category: "TECHNICAL SUPPORT",
      items: ["Assemble/Disassemble Computers", "Reformat & Install O.S.", "Problem Solving", "Field Work Troubleshooting"]
    },
    {
      category: "SOFTWARE & SYSTEMS",
      items: ["Adobe Photoshop", "Application Software Setup", "Online Casino / E-junket Setup", "Server & Video Recorder Management"]
    }
  ];

  const sampleProjects = [
    {
      title: "Cebu International Academy",
      description: "Served as I.T. Staff & Technician. Maintained all CCTV cameras, installed and configured door lock systems, and provided extensive troubleshooting for printers, desktop computers, and complex network issues. Also executed installation and wiring of UTP cables for extensive CCTV networks.",
      tags: ["I.T. Staff", "Technician", "CCTV & Network"],
      image: ciaImg
    },
    {
      title: "Eun K Entertainment",
      description: "Operated as I.T. Team Leader. Ensured the continuous operation of machines and computers for online casino systems. Responsibilities included managing video recorder servers, setting up web accounts for guests, resolving electronic shoebox issues, and comprehensive router and LAN cable configurations.",
      tags: ["I.T. Team Leader", "Server Management", "Hardware Config"],
      image: eunKImg
    },
    {
      title: "MTO Technotrends",
      description: "Technical Staff handling troubleshooting of computer hardware/software. Assembled and disassembled computers, reformatted systems, installed operating systems, and performed field work dealing with various technical issues from computer repair to CCTV configuration.",
      tags: ["Technical Staff", "Field Work", "Hardware Repair"],
      image: mtoImg
    }
  ];

  const sampleTestimonials = [
    {
      quote: "Provided excellent technical support and maintained seamless operations across all our hardware and networking systems.",
      author: "Renante Landiza",
      role: "Supervisor at MTO Technotrends"
    },
    {
      quote: "A dedicated IT professional capable of leading teams, handling complex server management, and resolving issues rapidly.",
      author: "Marvin Carillas",
      role: "IT Supervisor at EUN K ENTERTAINMENT"
    },
    {
      quote: "Demonstrated strong skills in technical support, from surveillance systems to everyday desktop and network troubleshooting.",
      author: "Eduardo DC. Santos",
      role: "Surveillance Technical Staff at PAGCOR"
    },
    {
      quote: "A reliable professional with deep practical knowledge of hardware, software, and critical system setups.",
      author: "Mr. Dexter Mancao",
      role: "Chairman at MTO TECHNOTRENDS"
    }
  ];

  return (
    <div 
      ref={container} 
      className="relative min-h-screen text-[#F2BA49] font-sans selection:bg-[#F2BA49] selection:text-[#4a0404] z-0"
    >
      <TechBackground />
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#4a0404]/90 backdrop-blur-md border-b border-[#F2BA49]/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="text-sm font-bold tracking-tight uppercase text-[#F2BA49]">
            Kenneth John L. Cabahug
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-[#F2BA49]">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -mr-2 text-[#F2BA49]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#4a0404] border-b border-[#F2BA49]/20 p-6 flex flex-col gap-6 shadow-xl">
            <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-[#F2BA49]">Work</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-[#F2BA49]">Skills</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-[#F2BA49]">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-[#F2BA49]">Contact</a>
          </div>
        )}
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-40 pb-24">
        
        {/* Hero Section */}
        <section className="mb-40" id="about">
          <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
            <div className="flex-1 max-w-5xl">
              <p className="hero-badge text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#4a0404] mb-10 bg-[#F2BA49] inline-block px-4 py-1.5 rounded-full shadow-lg shadow-black/10">
                KENNETH JOHN L. CABAHUG | TECHNICAL STAFF & I.T. PROFESSIONAL
              </p>
              <h1 className="hero-title-container text-6xl md:text-8xl lg:text-[7.5rem] font-serif tracking-normal leading-[1.05] mb-12 text-[#F2BA49] min-h-[130px] md:min-h-[200px] lg:min-h-[260px]">
                <span className="italic font-light type-text-1"></span><br />
                <span className="italic font-light type-text-2"></span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 items-start">
                <div className="md:col-span-8">
                  <p className="hero-desc text-lg md:text-xl font-light text-[#F2BA49]/90 max-w-2xl leading-relaxed tracking-wide">
                    With a strong background in hardware, software, and networking, I specialize in the installation, troubleshooting, and maintenance of critical systems. From configuring comprehensive CCTV networks to repairing desktops, setting up servers, and executing field work, my objective is to utilize my extensive technical skills to ensure reliability and growth within a challenging and dynamic environment.
                  </p>
                </div>
                <div className="hero-links md:col-span-4 flex flex-col gap-5 font-semibold items-start md:items-end md:text-right mt-2 md:mt-0 text-[#F2BA49] tracking-widest text-sm">
                  <a href="#contact" className="flex items-center gap-2 group hover:text-white transition-colors">
                    RESUME <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <a href="#contact" className="flex items-center gap-2 group hover:text-white transition-colors">
                    LINKEDIN <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <a href="mailto:kenzocabahug30@gmail.com" className="flex items-center gap-2 group hover:text-white transition-colors">
                    EMAIL <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="hero-image w-full lg:w-1/3 max-w-sm shrink-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border-4 border-[#F2BA49]/20 bg-[#F2BA49]/10">
                <img 
                  src={profileImg} 
                  alt="Kenneth John L. Cabahug" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section className="mb-40" id="work">
          <div className="flex items-baseline justify-between mb-16 border-b-2 border-[#F2BA49]/20 pb-8">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#F2BA49]">Professional Experience</h2>
            <span className="text-sm text-[#F2BA49]/60">2018 — Present</span>
          </div>

          <div className="flex flex-col gap-32">
            {sampleProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                {/* Image Placeholder */}
                <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-black/20 mb-10 overflow-hidden relative rounded-2xl border-2 border-[#F2BA49]/10 transition-all group-hover:border-[#F2BA49]/30 group-hover:bg-black/30">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-3 text-[#F2BA49]/40">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        <span className="text-xs font-mono uppercase tracking-widest">Project Visual</span>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-8">
                    <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-[#F2BA49] group-hover:text-white transition-colors">{project.title}</h3>
                    <p className="text-xl font-light text-[#F2BA49]/80 max-w-2xl leading-relaxed tracking-wide">{project.description}</p>
                  </div>
                  <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6">
                    <div className="flex flex-wrap md:justify-end gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-mono uppercase tracking-wider text-[#4a0404] bg-[#F2BA49] px-3 py-1 rounded-full font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-medium flex items-center gap-2 mt-4 md:mt-0 text-[#F2BA49] group-hover:text-white group-hover:translate-x-2 transition-all">
                      VIEW DETAILS <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Skills Section */}
        <section className="mb-40" id="skills">
          <div className="border-b-2 border-[#F2BA49]/20 pb-8 mb-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#F2BA49]">Core Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {sampleSkills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold tracking-tight mb-6 text-[#F2BA49]">{skillGroup.category}</h3>
                <ul className="flex flex-col gap-4 text-[#F2BA49]/80">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#F2BA49] mt-1 opacity-60">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-32">
          <div className="border-b-2 border-[#F2BA49]/20 pb-8 mb-16">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#F2BA49]">Character References</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {sampleTestimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col p-8 rounded-3xl bg-black/10 border border-[#F2BA49]/10">
                <p className="text-xl tracking-tight leading-snug mb-8 text-[#F2BA49]">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-[#F2BA49]">{testimonial.author}</p>
                  <p className="text-[#F2BA49]/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 text-[#F2BA49] py-20 border-t-4 border-[#F2BA49]/20" id="contact">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-8 max-w-2xl leading-tight">
              Reliable infrastructure.<br/><span className="italic font-light">Seamless operations.</span><br/>Let's connect!
            </h2>
            <div className="flex flex-col gap-4">
                <a href="mailto:kenzocabahug30@gmail.com" className="text-xl md:text-2xl inline-flex items-center gap-3 group hover:text-white transition-colors">
                  <Mail size={24} className="text-[#F2BA49]" />
                  kenzocabahug30@gmail.com
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50" />
                </a>
                <div className="text-xl md:text-2xl inline-flex items-center gap-3 text-[#F2BA49]/80">
                  <Phone size={24} className="text-[#F2BA49]" />
                  +63 926-728-1654
                </div>
                <a href="https://www.facebook.com/bogard30" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl inline-flex items-center gap-3 group hover:text-white transition-colors">
                  <Facebook size={24} className="text-[#F2BA49]" />
                  Facebook
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50" />
                </a>
                <a href="/resume.pdf" download className="text-xl md:text-2xl inline-flex items-center gap-3 group hover:text-white transition-colors">
                  <Download size={24} className="text-[#F2BA49]" />
                  Download Resume
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50" />
                </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 text-sm text-[#F2BA49]/80 md:text-right font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#work" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <p className="mt-8 text-[#F2BA49]/50">© {new Date().getFullYear()} Kenneth John L. Cabahug.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;