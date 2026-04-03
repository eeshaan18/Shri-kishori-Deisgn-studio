"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Reviews from "./reviews";
import { getImagePrefix } from "@/utils/utils";

// --- TAB DATA ---
const dossierData = [
  {
    id: "vision",
    tab: "01 // Vision",
    color: "#F5D061",
    headline: "Guided by Vision.",
    text: "At the heart of Shri Kishori Design Studio is a founder driven by purpose — blending artistic intuition with strategic technical clarity. We don't just build websites; we architect digital realities that command attention and scale effortlessly."
  },
  {
    id: "values",
    tab: "02 // Values",
    color: "#38BDF8",
    headline: "Grounded in Values.",
    text: "Every project reflects a commitment to elevate brands through soulful design and thoughtful innovation. We operate on the absolute belief that creativity, when rooted in deep engineering precision and culture, can transform everything."
  },
  {
    id: "specs",
    tab: "03 // Specs",
    color: "#99E39E",
    headline: "System Architecture.",
    text: "Merging full-stack development with immersive UI/UX capabilities. From complex backend logic to fluid front-end motion, the focus is always on delivering high-performance, resilient, and visually devastating digital platforms."
  }
];

const Founder = () => {
  const [activeTab, setActiveTab] = useState(dossierData[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effect for the watermark
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  // Auto-Loop Logic
  useEffect(() => {
    const loopTabs = setInterval(() => {
      setActiveTab((currentId) => {
        const currentIndex = dossierData.findIndex(d => d.id === currentId);
        const nextIndex = (currentIndex + 1) % dossierData.length;
        return dossierData[nextIndex].id;
      });
    }, 8000); 

    return () => clearInterval(loopTabs);
  }, []);

  const activeContent = dossierData.find(d => d.id === activeTab);

  return (
    <section ref={containerRef} className="relative pt-24 md:pt-40 pb-24 overflow-hidden bg-[#030406] z-10" id="founder">
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none texture-noise" />

      {/* --- REFINED BACKGROUND WATERMARK WITH PARALLAX --- */}
      <motion.div 
        style={{ y: watermarkY }}
        className="absolute top-[10%] lg:top-[20%] left-1/2 -translate-x-1/2 w-full whitespace-nowrap text-center pointer-events-none select-none z-0 opacity-[0.04]"
      >
         <h1 className="text-[18vw] lg:text-[12vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent tracking-tighter leading-none">
            ARCHITECT
         </h1>
      </motion.div>

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-20">
        
        {/* --- THE ASYMMETRIC DOSSIER CARD --- */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-[#0A0C10]/80 backdrop-blur-3xl border border-white/5 rounded-[32px] lg:rounded-[40px] p-6 sm:p-8 lg:p-12 xl:p-16 gap-10 lg:gap-16 xl:gap-20 shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative mt-8 sm:mt-16 mb-24 md:mb-32 texture-noise">
          
          {/* --- LEFT: The "Containment Breach" Image --- */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[400px] xl:w-[420px] h-[380px] sm:h-[450px] lg:h-[600px] lg:-mt-24 lg:-mb-24 relative rounded-[24px] lg:rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] group flex-shrink-0 z-20 bg-black"
          >
             <Image
                src={`${getImagePrefix()}images/about/12.jpg`}
                alt="Eeshaan Aggarwal"
                fill
                className="object-cover transform transition-transform duration-[2s] group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
              />
              
              {/* Cinematic inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] pointer-events-none" />
              
              {/* Tactical HUD Corners */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/20 rounded-tl-lg z-10 transition-colors duration-500 group-hover:border-[#99E39E]/50" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/20 rounded-tr-lg z-10 transition-colors duration-500 group-hover:border-[#99E39E]/50" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/20 rounded-bl-lg z-10 transition-colors duration-500 group-hover:border-[#99E39E]/50" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/20 rounded-br-lg z-10 transition-colors duration-500 group-hover:border-[#99E39E]/50" />

              {/* Biometric Scanline Effect */}
              <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#F5D061]/20 to-transparent opacity-0 group-hover:opacity-100 blur-md -top-[50%] animate-[scan_3s_ease-in-out_infinite] pointer-events-none" />
              
              {/* Precision Image HUD Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 to-transparent p-4 -m-6 rounded-b-[24px] lg:rounded-b-[32px]">
                 <div className="flex flex-col">
                    <span className="text-[#99E39E] font-mono text-[9px] tracking-widest uppercase mb-1">Founder // Arch_01</span>
                    <span className="text-white font-bold tracking-tight text-lg">Eeshaan Aggarwal</span>
                 </div>
                 <div className="w-8 h-8 rounded-full border border-[#99E39E]/50 flex items-center justify-center bg-black/40 backdrop-blur-md">
                    <div className="w-2 h-2 bg-[#99E39E] rounded-full animate-pulse shadow-[0_0_8px_#99E39E]" />
                 </div>
              </div>
          </motion.div>

          {/* --- RIGHT: Interactive Narrative Terminal --- */}
          <div className="flex-1 flex flex-col justify-center relative z-10 py-2 lg:py-0">
             
             {/* Header */}
             <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="border-b border-white/10 pb-5 sm:pb-6 mb-6 sm:mb-8"
              >
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_#fff]" />
                   <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E] text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">Eeshaan Aggarwal</h4>
                </div>
                <p className="text-gray-500 font-mono text-[10px] tracking-[0.3em] uppercase ml-4">Founder & CEO</p>
             </motion.div>

             {/* --- MINIMALIZED TAB CONTROLS --- */}
             <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
                {dossierData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full overflow-hidden transition-all duration-300 group outline-none"
                  >
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === tab.id ? 'opacity-15' : 'opacity-0 group-hover:opacity-5'}`} style={{ backgroundColor: tab.color }} />
                    <div className={`absolute inset-0 border rounded-full transition-colors duration-300 ${activeTab === tab.id ? 'border-opacity-50' : 'border-opacity-10 border-white group-hover:border-opacity-30'}`} style={{ borderColor: activeTab === tab.id ? tab.color : '' }} />
                    <span className={`relative z-10 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase transition-colors duration-300 ${activeTab === tab.id ? 'font-bold' : 'text-gray-500 group-hover:text-gray-300'}`} style={{ color: activeTab === tab.id ? tab.color : '' }}>
                      {tab.tab}
                    </span>
                  </button>
                ))}
             </div>

             {/* Tab Content Display */}
             {/* 🚀 FIX: min-h increased to 220px on mobile to prevent layout shifts when text wraps heavily */}
             <div className="relative min-h-[220px] sm:min-h-[200px] lg:min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 sm:mb-6">
                        <span className="text-transparent bg-clip-text bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]" style={{ backgroundImage: `linear-gradient(to right, ${activeContent?.color}, #ffffff, ${activeContent?.color})` }}>
                          {activeContent?.headline}
                        </span>
                     </h2>
                     <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-xl">
                        {activeContent?.text}
                     </p>
                  </motion.div>
                </AnimatePresence>
             </div>

          </div>
        </div>

        {/* --- REVIEWS COMPONENT (Contextualized) --- */}
        <div className="relative z-20 mt-16 md:mt-24 border-t border-white/5 pt-16 md:pt-24">
            <Reviews />
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .texture-noise::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.05;
            z-index: 1;
            pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        @keyframes scan {
          0% { top: -20%; }
          50% { top: 100%; }
          100% { top: -20%; }
        }
        @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
        }
      `}} />
    </section>
  );
};

export default Founder;