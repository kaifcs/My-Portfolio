"use client";

import Link from "next/link";
import React from "react";
import { Trophy, Star, Medal, Flame, Code, Globe, Sparkles, BadgeCheck, Zap, ExternalLink } from "lucide-react";

const RecognitionSection = () => {
  const achievements = [
  {
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      iconBg: "from-yellow-500/10 to-orange-500/10",
      iconBorder: "border-yellow-500/20",
      glow: "group-hover:shadow-yellow-500/40",
      title: "LeetCode Knight",
      description: "Achieved Knight badge with 1850+ rating",
    },
    {
      icon: <Star className="w-8 h-8 text-emerald-400" />,
      iconBg: "from-emerald-500/10 to-teal-500/10",
      iconBorder: "border-emerald-500/20",
      glow: "group-hover:shadow-emerald-500/40",
      title: "3-Star CodeChef",
      description: "Reached 3-star rating (1650+) on CodeChef",
    },
    {
      icon: <Medal className="w-8 h-8 text-blue-400" />,
      iconBg: "from-blue-500/10 to-cyan-500/10",
      iconBorder: "border-blue-500/20",
      glow: "group-hover:shadow-blue-500/40",
      title: "Pupil on Codeforces",
      description: "Achieved Pupil rank with 1300+ rating",
    },
    {
      icon: <Flame className="w-8 h-8 text-red-400" />,
      iconBg: "from-red-500/10 to-pink-500/10",
      iconBorder: "border-red-500/20",
      glow: "group-hover:shadow-red-500/40",
      title: "440+ Days Streak",
      description: "Maintained 440+ day coding streak",
    },
    {
      icon: <Code className="w-8 h-8 text-amber-400" />,
      iconBg: "from-amber-500/10 to-yellow-500/10",
      iconBorder: "border-amber-500/20",
      glow: "group-hover:shadow-amber-500/40",
      title: "1300+ Problems",
      description: "Solved 1300+ DSA problems across platforms",
    },
    {
      icon: <Globe className="w-8 h-8 text-teal-400" />,
      iconBg: "from-teal-500/10 to-emerald-500/10",
      iconBorder: "border-teal-500/20",
      glow: "group-hover:shadow-teal-500/40",
      title: "Top 5.59% Globally",
      description: "Ranked in top 3% on LeetCode contests",
    },
  ];

  const certifications = [
    {
      icon: "✓",
      iconBg: "from-blue-500/10 to-cyan-500/10",
      iconBorder: "border-blue-500/20",
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2026",
      badge: "CERTIFIED",
      verifyLink: "https://drive.google.com/file/d/1re5GFskUpz-pcbgTlkJPc_Z0TldDPRaa/view?usp=drive_link",
      certified: true
    },
    {
      icon: "✓",
      iconBg: "from-gray-500/10 to-gray-600/10",
      iconBorder: "border-gray-500/20",
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      organization: "Oracle University",
      year: "2025",
      verifyLink: "https://drive.google.com/file/d/1vPh3sFNuhTQZQx9lhqEEJIg1UPMUYiIM/view?usp=sharing",
      certified: true
    },
    {
      icon: "✓",
      iconBg: "from-gray-500/10 to-gray-600/10",
      iconBorder: "border-gray-500/20",
      title: "Introduction to MongoDB Certification",
      organization: "MongoDB Inc.",
      year: "2025",
      verifyLink: "https://drive.google.com/file/d/11GjFMU4dQ3HVCt60Ituudpqs1Lf-CP1t/view?usp=sharing",
      certified: false
    },
    {
      icon: "✓",
      iconBg: "from-gray-500/10 to-gray-600/10",
      iconBorder: "border-gray-500/20",
      title: "Database Programming with SQL Certification",
      organization: "Oracle University",
      year: "2025",
      verifyLink: "https://drive.google.com/file/d/1WjxM8aFE4fEZsINiub2AMLxxcjNhNPtI/view?usp=sharing",
      certified: false
    },
  ];

  return (
    <section className="py-4 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/20 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-zinc-300 font-mono tracking-tighter">
              Milestones.Get()
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Recognition &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional certifications and competitive milestones earned through technical persistence.
          </p>
        </div>

        {/* Proof of Work */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-yellow-500 text-2xl">🏆</div>
            <h3 className="text-xl font-mono text-white uppercase tracking-wider">
              Proof of Work
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="group bg-[#020617]/90 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-lg">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.iconBg} border ${achievement.iconBorder} flex items-center justify-center mb-6 transition-all duration-300 shadow-lg ${achievement.glow} group-hover:scale-110`}>
                  {achievement.icon}
                </div>
                <h4 className={`text-2xl font-bold mb-2 ${achievement.titleColor || 'text-white'}`}>
                  {achievement.title}
                </h4>
                
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Credentials */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="text-blue-500 text-2xl">🛡️</div>
            <h3 className="text-xl font-mono text-white uppercase tracking-wider">
              Verified Credentials
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="group bg-[#020617]/90 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-lg">
                <div className="flex items-start gap-5">
                  
                  {/* ICON */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 bg-blue-500/20 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                    <BadgeCheck className="w-6 h-6" />
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    
                    {/* TITLE + BADGE */}
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-white truncate text-lg">
                        {cert.title}
                      </h4>

                      {cert.certified && (
                        <span className="text-[9px] font-bold bg-blue-500 text-white px-1.5 py-0.5 rounded uppercase tracking-tighter">
                          Certified
                        </span>
                      )}
                    </div>

                    {/* ORGANIZATION */}
                    <p className="text-xs text-zinc-500 font-mono mb-3">
                      {cert.organization}
                    </p>

                    {/* YEAR + VERIFY */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                        <Zap className="w-3 h-3" />
                        {cert.year}
                      </div>

                      <Link href={cert.verifyLink} target="_blank" className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-white transition-colors">
                        Verify
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default RecognitionSection;