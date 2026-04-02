"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-darkmode relative flex items-center justify-center overflow-hidden z-10 pt-20 pb-20">
      {/* Subtle Noise Overlay for Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.12] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Floating Ambient Glows using Theme Colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         <motion.div 
           animate={{ x: [0, 60, -30, 0], y: [0, -50, 50, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px]" 
         />
         <motion.div 
           animate={{ x: [0, -60, 30, 0], y: [0, 50, -50, 0] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-secondary/10 rounded-full blur-[100px] md:blur-[150px]" 
         />
      </div>

      {/* Main 404 Content Container */}
      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Animated 404 Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <h1 className="text-[120px] sm:text-[160px] md:text-[220px] lg:text-[280px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 select-none tracking-tighter">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            <span className="bg-[#0A0C10]/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 text-primary uppercase tracking-[0.3em] text-xs md:text-sm font-bold shadow-xl whitespace-nowrap">
              System Disconnect
            </span>
          </div>
        </motion.div>

        {/* Message & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-12 max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Page Not Found.
          </h2>
          <p className="text-gray-400 text-base md:text-xl mb-10 leading-relaxed">
            The story you are looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get your journey back on track.
          </p>
          
          <Link href="/" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-white hover:text-darkmode transition-all duration-300 group shadow-[0_0_20px_rgba(247,147,26,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] relative overflow-hidden">
            <span className="relative z-10 uppercase tracking-widest text-sm">Return Home</span>
            <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}