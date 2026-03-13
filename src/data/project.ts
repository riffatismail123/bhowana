export type Project = {
  title: string
  description: string
  image: string
  category?: string
  tech?: string[]
  gradient?: string
}

export const projects: Project[] = [
  {
    title: "AI-Powered E-Commerce Platform",
    description: "Revolutionary shopping experience with AI recommendations, voice search, and AR product previews. Processed 50K+ orders in first month.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2128&auto=format&fit=crop",
    category: "Full Stack • AI",
    tech: ["Next.js 14", "OpenAI", "Stripe", "Prisma"],
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "SmartMed Pharmacy Management",
    description: "AI-driven pharmacy system with prescription scanning, inventory prediction, and automated refills. Used by 50+ pharmacies across the country.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2070&auto=format&fit=crop",
    category: "Healthcare • AI",
    tech: ["React", "TensorFlow.js", "Node.js", "MongoDB"],
    gradient: "from-purple-600 to-pink-500"
  },
  {
    title: "Neural Analytics Dashboard",
    description: "Real-time business intelligence platform with predictive analytics, custom ML models, and interactive 3D data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "Analytics • ML",
    tech: ["Python", "D3.js", "TensorFlow", "FastAPI"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "SocialPulse Analytics Tool",
    description: "AI-powered social media monitoring platform that predicts trends, analyzes sentiment, and provides automated engagement strategies.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    category: "Social Media • AI",
    tech: ["Vue.js", "Node.js", "Redis", "AWS"],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "TaskFlow Pro",
    description: "Intelligent project management with AI task allocation, deadline prediction, and automated workflow optimization.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    category: "Productivity • AI",
    tech: ["React", "Django", "PostgreSQL", "Celery"],
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "WeatherAI Forecasting",
    description: "Hyper-local weather predictions using machine learning models trained on 10+ years of historical data.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
    category: "Weather • ML",
    tech: ["Python", "PyTorch", "FastAPI", "React"],
    gradient: "from-blue-500 to-indigo-500"
  }
]