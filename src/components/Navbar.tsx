"use client"

import Link from "next/link"
import { motion } from "framer-motion"


const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-8 w-full flex justify-center z-50 px-4">
      <div className="backdrop-blur-xl bg-neutral-900/60 border border-white/10 px-2 py-2 rounded-full shadow-2xl flex items-center gap-1">
        {links.map((link) => (
          <Link key={link.name} href={link.href}>
            <motion.div
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="px-5 py-2 rounded-full text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {link.name}
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  
  )
}