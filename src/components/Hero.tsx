"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Floating elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"
      />

      <div className="relative text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-cyan-500/20 rounded-full bg-cyan-500/5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-sm font-mono text-cyan-400">RIFFAT ISMAIL </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6"
        >
          <span className="block">Building</span>
          <span className="block mt-2">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">
              Digital Experiences
            </span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Full-stack developer crafting innovative solutions with AI, 
          modern web technologies, and creative design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            href="/projects" 
            className="group relative px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold overflow-hidden hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.div 
              className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          
          <Link 
            href="/contact" 
            className="px-8 py-4 border border-white/10 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
          >
            Let's Talk
          </Link>
        </motion.div>

        {/* Tech stack icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap gap-4 justify-center text-sm text-neutral-500"
        >
          {["Next.js", "TypeScript", "React", "Node.js", "Python", "AI/ML"].map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-white/5 rounded-full border border-white/5">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}