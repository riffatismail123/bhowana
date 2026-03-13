"use client"

import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"

const skills = [
  { name: "Frontend", tech: "Next.js, React, Tailwind CSS" },
  { name: "Backend", tech: "Node.js, Prisma, PostgreSQL" },
  { name: "Design", tech: "Figma, Framer Motion, UI/UX" },
  { name: "Tools", tech: "Git, Docker, Turbopack" },
]

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />

      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto pt-40 px-6 pb-24">
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
              I build <span className="text-cyan-400">digital</span> experiences.
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              I’m Riffat Ismail, a Full Stack Developer passionate about crafting clean, 
              efficient, and user-centric applications. My journey started with a 
              curiosity for how things work on the web, which evolved into a 
              career building scalable solutions for modern problems.
            </p>
          </motion.div>

          {/* Fixed Profile Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group bg-neutral-900"
          >
            {/* Using standard img tag to bypass next.config restrictions */}
            <img
              src="/pic.jpg"
              alt="Profile"
              className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>

        {/* Skills Grid */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold mb-12 text-center">My Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-xl border border-white/10 shadow-xl"
              >
                <h3 className="text-cyan-400 font-bold mb-3">{skill.name}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {skill.tech}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 text-center p-12 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/10"
        >
          <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition-colors">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </main>
  )
}