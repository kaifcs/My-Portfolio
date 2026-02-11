"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutMeSection from "@/components/AboutMeSection";
import ProgrammingSection from "@/components/ProgrammingSection";
import RecognitionSection from "@/components/RecognitionSection";
import ProjectSection from "@/components/ProjectSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import AiChatbotSection from "@/components/AiChatbotSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      
      {/* HERO SECTION */}
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>

      {/* ABOUT Me SECTION */}
      <section id="about" className="py-20">
        <AboutMeSection />
      </section>

      <section id="skills" className="py-20">
        <Skills />
      </section>

      {/* PROBLEM SOLVING / PROGRAMMING SECTION */}
      <section id="problem-solving" className="py-20">
        <ProgrammingSection />
      </section>

      {/* RECOGNITION SECTION */}
      <section id="recognition" className="py-20">
        <RecognitionSection />
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20">
        <ProjectSection />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20">
        <EmailSection />
      </section>

      {/* AI CHATBOT */}
      <section id="ai-chatbot" className="py-20">
        <AiChatbotSection />
      </section>
      {/* FOOTER */}
      <Footer />
    </main>
  );
}