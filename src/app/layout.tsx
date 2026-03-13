import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevPortfolio | riffat ismail",
    template: "%s | DevPortfolio"
  },
  description: "Modern portfolio built with Next.js, TypeScript, and Framer Motion. Showcasing full-stack development projects and creative solutions.",
  keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "Portfolio", "Web Development"],
  authors: [{ name: "Riffat Ismail" }],
  creator: "Riffat Ismail",
  publisher: "Riffat Ismail",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yourportfolio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevPortfolio | Full Stack Developer",
    description: "Modern portfolio built with Next.js, TypeScript, and Framer Motion",
    url: "https://yourportfolio.com",
    siteName: "DevPortfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "DevPortfolio - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevPortfolio | Full Stack Developer",
    description: "Modern portfolio built with Next.js, TypeScript, and Framer Motion",
    images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden relative min-h-screen`}
      >
        {/* Animated background grid - using Tailwind classes only */}
        <div className="fixed inset-0 z-0">
          {/* Base gradient - using standard gradient classes */}
          <div className="absolute inset-0 bg-linear-to-br from-black via-zinc-900 to-black" />
          
          {/* Grid pattern - using CSS in globals.css instead of inline styles */}
          <div className="absolute inset-0 opacity-20 bg-grid-pattern" />
          
          {/* Radial gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-125 bg-linear-to-b from-cyan-500/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-125 bg-linear-to-t from-purple-500/10 via-transparent to-transparent" />
          
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        </div>

        {/* Global grain texture - moved to globals.css */}
        <div className="fixed inset-0 z-1 pointer-events-none opacity-20 bg-grain-texture" />

        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Cursor glow effect - moved to globals.css with CSS variables */}
        <div className="fixed inset-0 z-50 pointer-events-none cursor-glow" />
        <Footer />
      </body>
    </html>
  );
}