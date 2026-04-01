"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- CUSTOM TACTICAL ICONS ---
const PerformanceIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const ArchitectureIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const PrecisionIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const ScaleIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>;

const differentials = [
  {
    id: "ADV_01",
    title: "Zero-Latency Performance",
    short: "Performance",
    description: "We don't build bloated templates. Every line of code is optimized for micro-second load times, flawless kinetic motion, and A+ Core Web Vitals.",
    diagnostic: "SPEED // OPTIMIZED",
    icon: <PerformanceIcon />,
    color: "#F5D061", // Gold
  },
  {
    id: "ADV_02",
    title: "Bespoke Digital Architecture",
    short: "Architecture",
    description: "Your brand is unique; your system should be too. We engineer custom data structures and logical flows that perfectly match your specific operational needs.",
    diagnostic: "STRUCTURE // CUSTOM",
    icon: <ArchitectureIcon />,
    color: "#99E39E", // Green
  },
  {
    id: "ADV_03",
    title: "Pixel-Perfect Precision",
    short: "Precision",
    description: "Design without execution is just a concept. We translate high-end UI/UX into code with absolute mathematical precision, ensuring the live product matches the vision flawlessly.",
    diagnostic: "UI // CALIBRATED",
    icon: <PrecisionIcon />,
    color: "#F5D061", // Gold
  },
  {
    id: "ADV_04",
    title: "Infinite Scalability",
    short: "Scalability",
    description: "We build for tomorrow. Our system architectures are designed to handle exponential traffic growth and feature expansions without requiring complete rebuilds.",
    diagnostic: "SCALE // INFINITE",
    icon: <ScaleIcon />,
    color: "#99E39E", // Green
  }
];

const WhyChooseUs = () => {
  // Initialize with the first panel open
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 relative w-full bg-[#030406] overflow-hidden">
      
      {/* Ambient Floor Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_rgba(153,227,158,0.05),_transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-20">
        
        {/* --- Header --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm">
               <span className="w-1.5 h-1.5 rounded-full bg-[#99E39E] animate-pulse" />
               <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase">Core Differentials</p>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-white text-4xl sm:text-5xl font-black tracking-tight leading-[1.1]">
              Why Tier-1 Brands <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E]">Choose SK Studio.</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-400 text-lg font-light max-w-md lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-[#F5D061] pl-6 lg:pl-0 lg:pr-6 py-2">
            We don't compete on price; we compete on absolute engineering superiority and uncompromising aesthetic execution.
          </motion.p>
        </div>

        {/* --- THE KINETIC EXPANSION VAULT (Horizontal Accordion) --- */}
        <div className="flex flex-col lg:flex-row w-full h-[600px] lg:h-[500px] gap-4">
          {differentials.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={item.id}
                layout
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={`relative rounded-[32px] overflow-hidden cursor-pointer border transition-colors duration-500
                  ${isActive ? 'bg-[#0A0C10]/95 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] texture-noise' : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]'}
                `}
                style={{
                  // Flex basis handles the expansion physics smoothly
                  flex: isActive ? "1 1 60%" : "1 1 10%",
                }}
              >
                
                {/* Active Background FX */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      {/* Grid overlay when expanded */}
                      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:32px_32px]" />
                      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl blur-[80px] opacity-20" style={{ from: "transparent", to: item.color }} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* --- CONTENT CONTAINER --- */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  
                  {/* Top Header Section */}
                  <div className={`flex items-start ${isActive ? 'justify-between' : 'justify-center lg:justify-center'}`}>
                    
                    {/* Icon Container */}
                    <motion.div 
                      layout
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 z-10
                        ${isActive ? 'bg-white/10 text-white shadow-inner' : 'bg-black/50 text-gray-500 border border-white/10'}
                      `}
                      style={{ color: isActive ? item.color : '' }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Diagnostic Tag (Only visible when active) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.3 }}
                          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                        >
                          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: item.color }} />
                          <span className="font-mono text-[9px] tracking-[0.2em] text-gray-400 uppercase">{item.diagnostic}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Text Section */}
                  <div className="relative h-full w-full mt-6">
                    
                    {/* EXPANDED STATE CONTENT */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.1 }}
                          className="absolute bottom-0 left-0 w-full lg:w-[80%]"
                        >
                          <p className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-3">NODE // {item.id}</p>
                          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* COMPRESSED STATE CONTENT (Vertical Text on Desktop, Hidden on Mobile) */}
                    <AnimatePresence>
                      {!isActive && (
                        <motion.div 
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
                          className="absolute inset-0 flex items-end justify-center pb-4 lg:pb-0 lg:items-center"
                        >
                          {/* Visible on Mobile (Horizontal) */}
                          <p className="lg:hidden text-gray-400 font-semibold tracking-wide whitespace-nowrap text-sm">
                            {item.short}
                          </p>
                          
                          {/* Visible on Desktop (Vertical) */}
                          <div className="hidden lg:flex flex-col items-center justify-end h-full w-full">
                             <div className="flex-1 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent mb-6" />
                             <p className="text-gray-500 font-mono text-[11px] tracking-[0.3em] uppercase whitespace-nowrap -rotate-180" style={{ writingMode: "vertical-rl" }}>
                               {item.title}
                             </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Embedded Custom CSS */}
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
      `}} />
    </section>
  );
};

export default WhyChooseUs;