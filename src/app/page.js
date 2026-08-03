import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutMeSection from "@/components/AboutMeSection";
import ProgrammingSection from "@/components/ProgrammingSection";
import RecognitionSection from "@/components/RecognitionSection";
import ProjectSection from "@/components/ProjectSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
// AI Chatbot temporarily disabled.
// Original implementation preserved for future use.
// import AiChatbotSection from "@/components/AiChatbotSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />

      {/* HERO SECTION */}
      <div className="container mt-24 mx-auto max-w-7xl px-4 lg:px-8 py-4">
        <HeroSection />
      </div>

      {/* Each section below owns its own id + vertical padding */}
      <AboutMeSection />
      <Skills />
      <ProgrammingSection />
      <RecognitionSection />
      <ProjectSection />
      <EmailSection />

      {/* AI Chatbot temporarily disabled. */}
      {/* Original implementation preserved for future use. */}
      {/* <AiChatbotSection /> */}

      {/* FOOTER */}
      <Footer />
    </main>
  );
}