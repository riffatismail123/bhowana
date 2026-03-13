import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/project";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-purple-600/20 blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          {/* Hero Section - Full width */}
          <div className="mb-32">
            <Hero />
          </div>

          {/* Featured Projects Section */}
          <section className="mb-32">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-cyan-500/20 rounded-full bg-cyan-500/5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  <span className="text-xs font-mono text-cyan-400">FEATURED WORK</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Latest{' '}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500">
                    Projects
                  </span>
                </h2>
                <p className="text-neutral-400 text-lg mt-4 max-w-2xl">
                  Exploring the intersection of AI, design, and functionality — each project tells a unique story.
                </p>
              </div>
              <Link 
                href="/projects"
                className="group mt-6 md:mt-0 inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-xl hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <span className="font-medium">View All Projects</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Projects Grid - 3 cards with better proportions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project, index) => (
                <ProjectCard 
                  key={index} 
                  project={project} 
                  index={index}
                  featured={true}
                />
              ))}
            </div>

            {/* Stats Grid - More prominent */}
            <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Projects Delivered", value: "25+", icon: "🚀" },
                { label: "Happy Clients", value: "18+", icon: "🤝" },
                { label: "Coffee Consumed", value: "1.2K+", icon: "☕" },
                { label: "GitHub Commits", value: "3.5K+", icon: "💻" },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <span className="text-3xl mb-2 block">{stat.icon}</span>
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-sm text-neutral-400 mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
            
            <div className="relative p-12 md:p-16 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to build something{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
                  amazing?
                </span>
              </h3>
              <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's turn your ideas into reality with cutting-edge technology and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Start a Project
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link 
                  href="/projects" 
                  className="px-8 py-4 border border-white/10 rounded-xl font-semibold hover:bg-white/5 transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}