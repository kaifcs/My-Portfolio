"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-zinc-950/40 backdrop-blur-xl border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700/60 transition-all duration-500"
    >
      {/* Project Image */}
      <div className="relative h-56 md:h-64 w-full overflow-hidden bg-zinc-900/50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Action Buttons Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5 text-white" />
            </Link>
          )}

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 flex items-center justify-center hover:bg-emerald-500/30 hover:scale-110 transition-all duration-300"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-5 h-5 text-emerald-400" />
            </Link>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        {project.tech && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-zinc-900/60 border border-zinc-800/60 rounded-md text-[10px] font-mono uppercase tracking-wider text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Footer with Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/50">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors duration-300"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="font-medium">Code</span>
            </Link>
          )}

          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-emerald-400 transition-colors duration-300"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="font-medium">Live Demo</span>
            </Link>
          )}
        </div>
      </div>

      {/* Subtle Glow Effect on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-emerald-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
    </motion.div>
  );
};

const ProjectSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "MERN To-Do List Application",
      description: "A Full-Stack Task Management application built using the MERN stack with Express.js backend, MongoDB database, and a modern glassmorphism UI. Features include persistent CRUD operations, animated progress tracking, and responsive design.",
      image: "/React_Task_Management_App_v2.png",
      github: "https://github.com/kaifcs/MERN-Project-TO_DO_List",
      demo: null,
      tech: ["MongoDB", "Express.js", "React", "Node.js", "REST API", "Glassmorphism UI"]
    }

  ];

  return (
    <section id="projects" className="py-12 lg:py-16 relative bg-transparent">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-zinc-300">
              Featured Work
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
              Projects
            </span>
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A collection of full-stack applications, tools, and clones showcasing my skills in modern web development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Section (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="https://github.com/kaifcs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 text-white font-medium"
          >
            <Github className="w-4 h-4" />
            <span>View More on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute w-96 h-96 bg-emerald-700/10 blur-[150px] rounded-full top-20 right-10 animate-pulse pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-600/10 blur-[180px] rounded-full bottom-10 left-20 animate-pulse pointer-events-none" />
    </section>
  );
};

export default ProjectSection;