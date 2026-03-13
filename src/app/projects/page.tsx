import Navbar from "@/components/Navbar"
import ProjectCard from "@/components/ProjectCard"
import { projects, Project } from "@/data/project"

export default function Projects() {
  // Group projects by category (for demo, we'll just split the array)
  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Background pattern */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto pt-44 px-6 pb-32">
        {/* Header with gradient animation */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-cyan-500/20 rounded-full bg-cyan-500/5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-400">RIFFAT ISMAIL</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight">
            Everything I've{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500">
              Built.
            </span>
          </h1>
          
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            A deep dive into my recent work, ranging from full-stack applications to AI-driven dashboards. 
            Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Projects Grid */}
        {featuredProjects.length > 0 && (
          <>
            <div className="mb-8 flex items-center gap-3">
              <h2 className="text-xl font-semibold text-cyan-400">Featured Work</h2>
              <div className="h-px flex-1 bg-linear-to-r from-cyan-500/50 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredProjects.map((p: Project, i: number) => (
                <ProjectCard key={i} project={p} index={i} featured />
              ))}
            </div>
          </>
        )}

        {otherProjects.length > 0 && (
          <>
            <div className="mb-8 flex items-center gap-3">
              <h2 className="text-xl font-semibold text-neutral-400">All Projects</h2>
              <div className="h-px flex-1 bg-linear-to-r from-neutral-600/50 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((p: Project, i: number) => (
                <ProjectCard key={i + 3} project={p} index={i + 3} />
              ))}
            </div>
          </>
        )}

        {/* Empty state if no projects */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-2xl font-bold text-neutral-300">Projects Coming Soon</h3>
            <p className="text-neutral-500 mt-2">I'm currently working on some exciting new projects!</p>
          </div>
        )}
      </div>
    </main>
  )
}