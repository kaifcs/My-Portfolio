"use client";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

const EmailSection = () => {
  const [state, handleSubmit] = useForm("mbdajnny");

  return (
    <section className="py-16 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Establishing communication for internships, collaborations, or technical 
            <br />
            discussions. Available for <span className="text-white font-medium">Summer 2026/27 SDE Internships</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* LEFT SIDE - Communication Stack */}
          {/* <div className="space-y-8 lg:col-span-2 bg"> */}
          <div className="space-y-8 lg:col-span-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300">
            {/* Communication Stack Section */}
            <div>
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
                Communication Stack
              </h3>
              
              <div className="space-y-4">
                {/* Email Card */}
                <Link href="mailto:kk.kaifkhan05@gmail.com" className="group block">
                  <div className="flex items-center gap-5 p-5 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all duration-500">
                    <div className="w-14 h-14 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                        System.Mail
                      </p>
                      <p className="text-white font-bold truncate group-hover:text-emerald-400 transition-colors">
                        kk.kaifkhan05@gmail.com
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                {/* Location Card */}
                <div className="flex items-center gap-5 p-5 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                      System.Origin
                    </p>
                    <p className="text-white font-bold truncate">
                      Delhi-NCR, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Nodes Section */}
            <div>
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
                Network Nodes
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {/* GitHub */}
                <Link href="https://github.com/kaifcs" target="_blank" className="group">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-zinc-900/50 border border-transparent hover:border-zinc-700 hover:text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-zinc-400 group-hover:text-white transition-colors">
                      GitHub
                    </span>
                  </div>
                </Link>

                {/* LinkedIn */}
                <Link href="https://www.linkedin.com/in/kaif-khan-2805-2005-cs/" target="_blank" className="group">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-zinc-900/50 border border-transparent hover:border-zinc-700 hover:text-blue-400 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-zinc-400 group-hover:text-blue-400 transition-colors">
                      LinkedIn
                    </span>
                  </div>
                </Link>

                {/* Twitter/X */}
                <Link href="https://x.com/KaifKh2805" target="_blank" className="group">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-zinc-900/50 border border-transparent hover:border-zinc-700 hover:text-sky-400 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.901 1.153h3.68l-8.04 9.188L24 22.847h-7.406l-5.803-7.592-6.64 7.592H.47l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.47h2.04L6.486 3.26H4.298l13.313 17.363Z" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-zinc-400 group-hover:text-sky-400 transition-colors">
                      Twitter
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Competitive Handles */}
            <div>
              <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
                Competitive Handles
              </h3>
              
              <div className="space-y-3">
                <Link 
                  href="https://leetcode.com/u/Dynamite05/" 
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 rounded-xl hover:border-yellow-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="text-gray-300 font-medium">LeetCode</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-yellow-500 transition-colors">
                    Knight @ 1859
                  </span>
                </Link>

                <Link 
                  href="https://www.codechef.com/users/labor_art_09" 
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 rounded-xl hover:border-orange-500/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-gray-300 font-medium">CodeChef</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-orange-500 transition-colors">
                    3 Star Coder
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="lg:sticky lg:top-24 lg:col-span-3">
            {/* ✅ FIXED: Single-line className to prevent hydration error */}
            <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300">
              
              {state.succeeded ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-emerald-400 text-lg font-medium mb-2">
                    Message Sent Successfully!
                  </p>
                  <p className="text-gray-400 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Payload.Submit()
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Initialize a secure handshake to discuss projects or internship opportunities.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                          SENDER.NAME
                        </label>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          required
                          placeholder="Identify yourself..."
                          className="w-full bg-gray-950/50 border border-gray-700/50 text-gray-100 rounded-xl px-4 py-3 text-sm focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                          SENDER.EMAIL
                        </label>
                        <input
                          name="email"
                          type="email"
                          id="email"
                          required
                          placeholder="Return address..."
                          className="w-full bg-gray-950/50 border border-gray-700/50 text-gray-100 rounded-xl px-4 py-3 text-sm focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                        PAYLOAD.SUBJECT
                      </label>
                      <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        placeholder="What is the context of this call?"
                        className="w-full bg-gray-950/50 border border-gray-700/50 text-gray-100 rounded-xl px-4 py-3 text-sm focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                        PAYLOAD.DATA
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={6}
                        placeholder="Draft your message here..."
                        className="w-full bg-gray-950/50 border border-gray-700/50 text-gray-100 rounded-xl px-4 py-3 text-sm focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      >
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                        <path d="m21.854 2.147-10.94 10.939" />
                      </svg>
                      {state.submitting ? "Transmitting..." : "Execute.Send()"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmailSection;