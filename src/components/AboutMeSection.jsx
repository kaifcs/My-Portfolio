"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaLaptopCode, FaTrophy } from "react-icons/fa";

const AboutMeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    { icon: <FaCode />, value: "1600+", label: "Problems Solved" },
    { icon: <FaLaptopCode />, value: "4", label: "Featured Projects" },
    { icon: <FaTrophy />, value: "8.62", label: "CGPA" },
  ];

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "KIET Group of Institutions (AKTU)",
      location: "Ghaziabad, Uttar Pradesh",
      duration: "2023 – 2027",
      grade: "CGPA: 8.62",
      icon: <FaGraduationCap className="text-emerald-400 text-2xl" />,
    },
    {
      degree: "Senior Secondary Education (CBSE)",
      institution: "Leelawati Public School",
      location: "Ghaziabad, Uttar Pradesh",
      duration: "2021 – 2022",
      grade: "Best 5: 92.0%",
      icon: <FaGraduationCap className="text-blue-400 text-2xl" />,
    },
    {
      degree: "Secondary Education (CBSE)",
      institution: "Leelawati Public School",
      location: "Ghaziabad, Uttar Pradesh",
      duration: "2019 – 2020",
      grade: "Best 5: 80.8%",
      icon: <FaGraduationCap className="text-cyan-400 text-2xl" />,
    },
  ];

  return (
    <section id="about" className="relative min-h-screen text-white py-16 px-5 flex justify-center items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-emerald-700/20 blur-[130px] rounded-full top-10 left-20 animate-pulse" />
      <div className="absolute w-[450px] h-[450px] bg-cyan-600/20 blur-[150px] rounded-full bottom-20 right-10 animate-pulse" />
      <div className="absolute w-[600px] h-[600px] bg-blue-400/10 blur-[200px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        className="relative z-20 max-w-7xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About
          </span>{" "}
          Me
        </motion.h2>

        <motion.p
          className="text-center text-zinc-400 mb-10 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Computer Science student passionate about problem solving, full-stack development, and building scalable software.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-zinc-950/40 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 text-center hover:border-zinc-700/60 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-2 flex justify-center text-emerald-400">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-zinc-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout — Equal Height */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* WHO I AM */}
          <motion.div
            className="h-full flex flex-col justify-between bg-zinc-950/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 shadow-2xl hover:border-zinc-700/60 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>

              <p className="text-zinc-300 leading-relaxed mb-4">
                I&apos;m a{" "}
                <span className="text-emerald-400 font-semibold">
                  Computer Science and Engineering student
                </span>{" "}
                at KIET Group of Institutions (AKTU) with strong foundations in{" "}
                <span className="text-emerald-400 font-semibold">
                  Data Structures & Algorithms
                </span>{" "}
                and hands-on experience building full-stack web applications using the MERN Stack.
              </p>

              <p className="text-zinc-300 leading-relaxed mb-4">
                Solved{" "}
                <span className="text-emerald-400 font-semibold">1600+</span>{" "}
                DSA problems across LeetCode, CodeChef, Codeforces,
                GeeksforGeeks, and other competitive programming
                platforms, strengthening problem-solving,
                algorithmic thinking, and code efficiency.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Currently exploring scalable backend systems, cloud technologies, and AI-powered applications while preparing for{" "}
                <span className="text-emerald-400 font-semibold">
                  software engineering
                </span>{" "}
                 roles.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Problem Solver", "Quick Learner", "Growth Mindset"].map(
                (skill, index) => (
                  <span key={index} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm">
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            className="h-full bg-zinc-950/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 shadow-2xl hover:border-zinc-700/60 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12 pb-6 border-l-2 border-emerald-500/30 last:border-l-0 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-950 border-2 border-emerald-500/50 flex items-center justify-center">
                    {edu.icon}
                  </div>

                  <h4 className="font-semibold text-white mb-1">{edu.degree}</h4>
                  <p className="text-emerald-400 text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-zinc-400 text-xs mb-2">
                    {edu.location} • {edu.duration}
                  </p>
                  <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-semibold">
                    {edu.grade}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMeSection;