"use client"

import { motion } from "framer-motion"
import { Project } from "@/data/project"
import { useState } from "react"

export default function ProjectCard({ 
  project, 
  index = 0,
  featured = false 
}: { 
  project: Project; 
  index?: number;
  featured?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -12 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
      
      {/* Main card */}
      <div className="relative h-full bg-neutral-900/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-transparent transition-all duration-500">
        
        {/* Image Container - Better proportions */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-90" />
          
          {/* Category tag */}
          {project.category && (
            <div className="absolute top-4 right-4 z-20">
              <span className="px-3 py-1.5 text-xs font-mono bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-cyan-400">
                {project.category}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative p-8">
          {/* Title with animated underline */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          
          {/* Tech stack */}
          {project.tech && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 text-xs font-mono bg-white/5 rounded-full text-neutral-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          {/* View project link */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="text-cyan-400">View Project</span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}