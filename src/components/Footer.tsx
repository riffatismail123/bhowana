"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Mail size={18} />, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/50 backdrop-blur-md">
      {/* Subtle Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand/Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tighter text-white mb-2">
              RIFFAT<span className="text-cyan-400">ISMAIL</span>
            </h2>
            <p className="text-white/50 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -3, color: "#22d3ee" }} // cyan-400
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  )
}