"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  
  const navRef = useRef(null);
  const linkRefs = useRef({});

  const navLinks = [
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Problem Solving", path: "#problem-solving" },
    { name: "Recognition", path: "#recognition" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optimized scroll spy with throttling and intersection observer fallback
  useEffect(() => {
    let ticking = false;
    
    const handleScrollSpy = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = navLinks.map((link) =>
            document.getElementById(link.path.substring(1))
          );

          // Account for navbar height + buffer
          const scrollPosition = window.scrollY + 120;
          
          // Special case: near bottom of page
          const isNearBottom = 
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

          if (isNearBottom) {
            setActiveSection(navLinks[navLinks.length - 1].path);
          } else {
            // Find the section that's currently in view
            for (let i = sections.length - 1; i >= 0; i--) {
              const section = sections[i];
              if (section && section.offsetTop <= scrollPosition) {
                setActiveSection(navLinks[i].path);
                break;
              }
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Animate the active indicator
  useEffect(() => {
    const activeLink = linkRefs.current[activeSection];
    if (activeLink && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    }
  }, [activeSection]);

  // Smooth scroll function
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.substring(1));
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Scroll to top
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_1px_0_0_rgba(255,255,255,0.03)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Fixed Left */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group z-50 relative shrink-0"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.3)] shadow-[0_0_16px_rgba(34,211,238,0.2)]">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-white hidden sm:block tracking-tight text-lg group-hover:text-zinc-100 transition-colors">
              Kaif
            </span>
          </button>

          {/* Desktop Navigation Links - Absolutely Centered */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div 
              ref={navRef}
              className="relative flex items-center gap-1 bg-zinc-900/60 px-2 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
            >
              {/* Animated Active Indicator */}
              <div
                className="absolute top-1.5 h-[calc(100%-12px)] bg-white/10 rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_2px_8px_rgba(255,255,255,0.1),inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  opacity: activeSection ? 1 : 0,
                }}
              />
              
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  ref={(el) => (linkRefs.current[link.path] = el)}
                  href={link.path}
                  onClick={(e) => scrollToSection(e, link.path)}
                  className={`
                    relative z-10 rounded-full font-medium transition-all duration-200
                    px-4 py-2 text-[16px] whitespace-nowrap
                    ${
                      activeSection === link.path
                        ? "text-white"
                        : "text-zinc-400 hover:text-zinc-200"
                    }
                  `}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Social Icons & Resume Button - Fixed Right */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-0.5">
              <Link
                href="https://github.com/kaifcs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-zinc-500 hover:text-white hover:bg-zinc-800/60 transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="GitHub"
              >
                <FaGithub className="w-[18px] h-[18px]" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kaif-khan-2805-2005-cs/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-zinc-500 hover:text-white hover:bg-zinc-800/60 transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-[18px] h-[18px]" />
              </Link>
              <Link
                href="https://x.com/KaifKh2805"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-zinc-500 hover:text-white hover:bg-zinc-800/60 transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.188L24 22.847h-7.406l-5.803-7.592-6.64 7.592H.47l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.47h2.04L6.486 3.26H4.298l13.313 17.363Z" />
                </svg>
              </Link>
            </div>

            {/* Resume Button */}
            <Link
              href="/Kaif_Khan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-100 active:bg-zinc-200 rounded-full px-5 h-9 text-[13px] font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            >
              <HiDownload className="w-4 h-4" />
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-800/60 active:scale-95"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[64px] left-0 right-0 w-full bg-zinc-950/95 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl lg:hidden transition-all duration-300 ease-out origin-top ${
          isMobileMenuOpen
            ? "opacity-100 visible scale-y-100"
            : "opacity-0 invisible scale-y-95"
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-6">
          {/* Mobile Nav Links */}
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                  activeSection === link.path
                    ? "text-white bg-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50 active:bg-zinc-800/70"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Social & Resume */}
          <div className="pt-4 border-t border-white/[0.06] space-y-4">
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-2">
              <Link
                href="https://github.com/kaifcs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-zinc-500 hover:text-white hover:bg-zinc-800/60 transition-all duration-200 active:scale-95"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kaif-khan-2805-2005-cs/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-zinc-500 hover:text-white hover:bg-zinc-800/60 transition-all duration-200 active:scale-95"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/KaifKh2805"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-zinc-500 hover:text-white hover:bg-zinc-800/60 transition-all duration-200 active:scale-95"
                aria-label="X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.188L24 22.847h-7.406l-5.803-7.592-6.64 7.592H.47l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.47h2.04L6.486 3.26H4.298l13.313 17.363Z" />
                </svg>
              </Link>
            </div>

            {/* Resume Button */}
            <Link
              href="/Kaif_Khan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl h-12 bg-white text-black hover:bg-zinc-100 active:bg-zinc-200 text-[15px] font-medium transition-all duration-200 active:scale-[0.98] shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
            >
              <HiDownload className="w-4 h-4" />
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;