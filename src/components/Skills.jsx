"use client";
import { useState } from "react";
import {
  Code2,
  Server,
  Layout,
  Database,
  Wrench,
  Shield,
} from "lucide-react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages");

  const skillCategories = {
    languages: {
      title: "LANGUAGES",
      subtitle: "4 TECHNOLOGIES",
      icon: Code2,
      color: "blue",
      skills: [
        { name: "C++", level: 95 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
      ],
    },
    backend: {
      title: "BACKEND",
      subtitle: "2 TECHNOLOGIES",
      icon: Server,
      color: "emerald",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
      ],
    },
    frontend: {
      title: "FRONTEND",
      subtitle: "4 TECHNOLOGIES",
      icon: Layout,
      color: "cyan",
      skills: [
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 75 },
        { name: "HTML/CSS", level: 80 },
        { name: "Next.js", level: 65 },
      ],
    },
    databases: {
      title: "DATABASES",
      subtitle: "4 TECHNOLOGIES",
      icon: Database,
      color: "purple",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Oracle SQL", level: 80 },
        { name: "PostgreSQL", level: 80 },
      ],
    },
    tools: {
      title: "TOOLS",
      subtitle: "4 TECHNOLOGIES",
      icon: Wrench,
      color: "amber",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "Vercel", level: 85 },
      ],
    },
    security: {
      title: "SECURITY",
      subtitle: "4 TECHNOLOGIES",
      icon: Shield,
      color: "rose",
      skills: [
        { name: "JWT Authentication", level: 90 },
        { name: "Role-Based Access Control", level: 85 },
        { name: "Input Validation", level: 85 },
        { name: "REST API Security", level: 85 },
      ],
    },
  };

  const tabs = [
    { id: "languages", label: "Languages", icon: Code2 },
    { id: "backend", label: "Backend", icon: Server },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "databases", label: "Databases", icon: Database },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "security", label: "Security", icon: Shield },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        progress: "bg-blue-500",
        circle: "text-blue-400",
        glow: "shadow-[0_0_15px_rgba(59,130,246,0.05)]",
      },
      emerald: {
        progress: "bg-emerald-500",
        circle: "text-emerald-400",
        glow: "shadow-[0_0_15px_rgba(16,185,129,0.05)]",
      },
      cyan: {
        progress: "bg-cyan-500",
        circle: "text-cyan-400",
        glow: "shadow-[0_0_15px_rgba(6,182,212,0.05)]",
      },
      purple: {
        progress: "bg-purple-500",
        circle: "text-purple-400",
        glow: "shadow-[0_0_15px_rgba(168,85,247,0.05)]",
      },
      amber: {
        progress: "bg-amber-500",
        circle: "text-amber-400",
        glow: "shadow-[0_0_15px_rgba(245,158,11,0.05)]",
      },
      rose: {
        progress: "bg-rose-500",
        circle: "text-rose-400",
        glow: "shadow-[0_0_15px_rgba(244,63,94,0.05)]",
      },
    };
    return colors[color];
  };

  const CircularProgress = ({ percentage, color, label }) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    const colorClasses = getColorClasses(color);

    return (
      <div className="bg-zinc-900/30 backdrop-blur-md rounded-2xl p-6 text-center border border-zinc-800/40 hover:border-zinc-700/60 transition-all group">
        <div className="relative w-20 h-20 mx-auto mb-5">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="#18181b"
              strokeWidth="5"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r={radius}
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              className={colorClasses.circle}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-white font-mono tracking-tighter">
              {percentage}
            </span>
          </div>
        </div>
        <h4 className="text-[11px] font-bold text-zinc-500 font-mono uppercase tracking-[0.2em] group-hover:text-zinc-300 transition-colors">
          {label}
        </h4>
      </div>
    );
  };

  const activeCategory = skillCategories[activeTab];
  const colorClasses = getColorClasses(activeCategory.color);
  const Icon = activeCategory.icon;

  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-transparent">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 backdrop-blur-sm mb-6">
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
              className="w-4 h-4 text-emerald-400"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
              <path d="M20 2v4" />
              <path d="M22 4h-4" />
              <circle cx="4" cy="20" r="2" />
            </svg>
            <span className="text-xs font-medium text-zinc-300">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Skills
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Scalable architecture, database optimization, and high-performance
            engineering.
          </p>
        </div>

        {/* Skills Container */}
        <div className="bg-zinc-950/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl overflow-hidden mb-20 shadow-2xl">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-zinc-800 bg-zinc-900/30">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-5 transition-all duration-300 relative group ${
                    isActive
                      ? "text-white bg-zinc-800/40"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/20"
                  }`}
                >
                  <TabIcon
                    className={`w-4 h-4 transition-colors ${
                      isActive
                        ? getColorClasses(skillCategories[tab.id].color).circle
                        : "group-hover:text-zinc-300"
                    }`}
                  />
                  <span className="font-medium text-sm tracking-wide">
                    {tab.label}
                  </span>
                  {isActive && (
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        getColorClasses(skillCategories[tab.id].color).progress
                      }`}
                      style={{
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12">
            <div
              className="grid lg:grid-cols-2 gap-16"
              style={{ opacity: 1, transform: "none" }}
            >
              {/* Left Side - Progress Bars */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      getColorClasses(activeCategory.color).progress
                    }/10 ${
                      getColorClasses(activeCategory.color).circle
                    } border border-white/5`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-widest font-mono">
                      {activeCategory.title}
                    </h3>
                    <p className="text-[10px] text-zinc-500 font-mono tracking-tighter uppercase">
                      {activeCategory.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-7">
                  {activeCategory.skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="font-medium text-zinc-300 group-hover:text-white transition-colors tracking-tight">
                          {skill.name}
                        </span>
                        <span className="text-[11px] text-zinc-500 font-mono bg-zinc-900/50 px-2 py-0.5 rounded border border-white/5">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-zinc-900/80 rounded-full overflow-hidden border border-white/5">
                        <div
                          className={`h-full ${colorClasses.progress} rounded-full relative shadow-[0_0_15px_rgba(255,255,255,0.05)]`}
                          style={{
                            width: `${skill.level}%`,
                            transition: "width 1s ease-out",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Circular Progress */}
              <div className="grid grid-cols-2 gap-6">
                {activeCategory.skills.map((skill, index) => (
                  <CircularProgress
                    key={index}
                    percentage={skill.level}
                    color={activeCategory.color}
                    label={skill.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 
        ======================================================
        PROBLEM SOLVING SECTION (TEMPORARILY DISABLED)
        ======================================================

        {/* Problem Solving Section * /}
        <div className="mt-24">
          <div className="flex flex-col items-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
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
                className="w-4 h-4 text-blue-400"
              >
                <path d="M12 20v2" />
                <path d="M12 2v2" />
                <path d="M17 20v2" />
                <path d="M17 2v2" />
                <path d="M2 12h2" />
                <path d="M2 17h2" />
                <path d="M2 7h2" />
                <path d="M20 12h2" />
                <path d="M20 17h2" />
                <path d="M20 7h2" />
                <path d="M7 20v2" />
                <path d="M7 2v2" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="8" y="8" width="8" height="8" rx="1" />
              </svg>
              <span className="text-[10px] uppercase tracking-widest font-bold text-blue-300">
                Algorithm Master
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Problem Solving{" "}
              <span className="text-zinc-600">Dynamics</span>
            </h3>
          </div>

          {/* DSA Topics Grid * /}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Arrays & Hashing", solved: 1148, total: 1350, mastery: 85, color: "rgb(16, 185, 129)" },
              { name: "Strings", solved: 184, total: 220, mastery: 84, color: "rgb(6, 182, 212)" },
              { name: "Linked List", solved: 55, total: 60, mastery: 92, color: "rgb(20, 184, 166)" },
              { name: "Stack & Queue", solved: 89, total: 105, mastery: 85, color: "rgb(249, 115, 22)" },
              { name: "Math", solved: 138, total: 170, mastery: 81, color: "rgb(234, 179, 8)" },
              { name: "Greedy", solved: 86, total: 110, mastery: 78, color: "rgb(251, 113, 133)" },
              { name: "Trees", solved: 208, total: 260, mastery: 80, color: "rgb(34, 197, 94)" },
              { name: "Graphs", solved: 295, total: 350, mastery: 84, color: "rgb(59, 130, 246)" },
              { name: "Divide & Conquer", solved: 30, total: 40, mastery: 75, color: "rgb(234, 88, 12)" },
              { name: "Recursion & Backtracking", solved: 72, total: 90, mastery: 80, color: "rgb(217, 70, 239)" },
              { name: "Dynamic Programming", solved: 151, total: 180, mastery: 84, color: "rgb(244, 63, 94)" },
              { name: "Advanced DS (Trie, Segment_Tree)", solved: 32, total: 50, mastery: 64, color: "rgb(5, 150, 105)" },
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-zinc-950/30 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 hover:bg-zinc-900/40 transition-all group"
              >
                <div className="flex justify-between items-center mb-5">
                  <h4 className="font-semibold text-zinc-300 group-hover:text-white transition-colors">
                    {topic.name}
                  </h4>
                  <span className="text-[10px] font-mono p-1 rounded bg-zinc-800/50 text-zinc-500 border border-white/5">
                    {topic.solved}/{topic.total}
                  </span>
                </div>
                <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: topic.color,
                      width: `${topic.mastery}%`,
                      transition: "width 1s ease-out",
                    }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">
                    Mastery
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {topic.mastery}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default Skills;