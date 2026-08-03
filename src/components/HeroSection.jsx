"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { HiDownload, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8 lg:py-16">
      
      {/* LEFT CONTENT */}
      <motion.div
        className="col-span-1 lg:col-span-7 text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* HEADING */}
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          <span className="text-white">Hello, I&apos;m </span>
          <br />

          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                "Kaif Khan |",
                1200,
                "Aspiring Software Engineer |",
                1200,
                "Competitive Programmer |",
                1200,
                "Full-Stack Developer |",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              aria-label="Kaif Khan roles"
            />
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-xl mb-6">
          Computer Science student passionate about{" "}
          <span className="text-emerald-400 font-semibold">problem solving</span>,{" "}
          <span className="text-emerald-400 font-semibold">Data Structures & Algorithms</span>, and building{" "}
          <span className="text-emerald-400 font-semibold">
            scalable web applications
          </span>.
        </p>

        {/* BADGES */}
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-6">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="text-emerald-400 font-semibold text-sm">
              1600+ Problems Solved
            </span>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="text-blue-400 font-semibold text-sm">
              Full-Stack Developer
            </span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* LET'S CONNECT → scroll to contact with smooth scroll */}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-black bg-white hover:bg-zinc-200 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg font-medium"
            aria-label="Scroll to contact section"
          >
            <HiMail className="text-xl" />
            <span>Let&apos;s Connect</span>
          </button>

          {/* RESUME */}
          <a
            href="/Kaif_Khan_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <button 
              className="w-full sm:w-auto rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-600 hover:scale-105 transition-all duration-300 shadow-lg"
              aria-label="Download Kaif Khan resume"
            >
              <span className="flex items-center justify-center gap-2 px-8 py-4 text-white">
                <HiDownload className="text-xl" />
                <span>Download Resume</span>
              </span>
            </button>
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-4 justify-center sm:justify-start">
          <a
            href="https://github.com/kaifcs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-zinc-900/50 border border-white/5 flex items-center justify-center hover:scale-110 hover:bg-zinc-800 hover:border-emerald-500/30 transition-all duration-300"
            aria-label="Visit Kaif Khan's GitHub profile"
          >
            <FaGithub className="text-xl text-zinc-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/kaif-khan-2805-2005-cs/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-zinc-900/50 border border-white/5 flex items-center justify-center hover:scale-110 hover:bg-zinc-800 hover:border-blue-500/30 transition-all duration-300"
            aria-label="Visit Kaif Khan's LinkedIn profile"
          >
            <FaLinkedin className="text-xl text-zinc-400" />
          </a>

          <a
            href="https://x.com/KaifKh2805"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-zinc-900/50 border border-white/5 flex items-center justify-center hover:scale-110 hover:bg-zinc-800 hover:border-cyan-500/30 transition-all duration-300"
            aria-label="Visit Kaif Khan's X (Twitter) profile"
          >
            <FaXTwitter className="text-xl text-zinc-400" />
          </a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="col-span-1 lg:col-span-5 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-96">
          {/* Gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl animate-pulse blur-xl" />

          {/* Image */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 p-[3px]">
            <div className="w-full h-full rounded-3xl overflow-hidden bg-zinc-950">
              <Image
                src="/my_formals_photo.jpg"
                alt="Kaif Khan - Software Engineer"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-white text-black rounded-2xl px-4 py-2 shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-bold text-sm">
              Open to Opportunities
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;