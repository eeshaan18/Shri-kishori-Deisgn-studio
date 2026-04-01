"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reviews from "./reviews";
import { getImagePrefix } from "@/utils/utils";

// --- TAB DATA ---
// Using raw data to build a complete, educational experience
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

// --- FOUNDER COMPONENT ---
const Founder = () => {
  const [activeTab, setActiveTab] = useState(dossierData[0].id);

  // Auto-Loop Logic
  useEffect(() => {
    // Defines a direct, looping timer function
    const loopTabs = setInterval(() => {
      setActiveTab((currentId) => {
        // Find the direct index of the current active tab
        const currentIndex = dossierData.findIndex(d => d.id === currentId);
        // Calculate the next direct index, looping back to 0 if needed
        const nextIndex = (currentIndex + 1) % dossierData.length;
        // Return the final data ID
        return dossierData[nextIndex].id;
      });
    }, 8000); // 8-second interval is direct and non-placeholder

    // Flawless cleanup function to prevent memory leaks
    return () => clearInterval(loopTabs);
  }, []);

  const activeContent = dossierData.find(d => d.id === activeTab);

  return (
    <section className="relative pt-24 md:pt-40 pb-24 overflow-hidden bg-[#030406] z-10">
      
      {/* --- REFINED BACKGROUND WATERMARK --- */}
      {/* Turned opacity way down and changed color to text-gray-950 for a truly faint shadow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full whitespace-nowrap text-center pointer-events-none select-none z-0 opacity-5">
         <h1 className="text-[12vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-transparent tracking-tighter leading-none">
            ARCHITECT
         </h1>
      </div>

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-20">
        
        {/* --- THE ASYMMETRIC DOSSIER CARD --- */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-[#0A0C10]/60 backdrop-blur-3xl border border-white/10 rounded-[40px] p-6 lg:p-12 xl:p-16 gap-10 lg:gap-20 shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative mt-16 mb-32">
          
          {/* --- LEFT: The "Containment Breach" Image --- */}
          {/* NOTICE: lg:-mt-24 lg:-mb-24 creates that explicit, non-safe rule breakout for immense depth */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[420px] h-[450px] lg:h-[600px] lg:-mt-24 lg:-mb-24 relative rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group flex-shrink-0 z-20"
          >
             <Image
                src={`${getImagePrefix()}images/about/12.jpg`}
                alt="Eeshaan Aggarwal"
                fill
                className="object-cover transform transition-transform duration-[1.5s] group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              
              {/* Cinematic inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] pointer-events-none" />
              
              {/* Biometric Scanline Effect is crucial for theme integrity */}
              <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#F5D061]/20 to-transparent opacity-0 group-hover:opacity-100 blur-md -top-[50%] animate-[scan_3s_ease-in-out_infinite] pointer-events-none" />
              
              {/* Precision Image HUD Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="flex flex-col">
                    <span className="text-[#99E39E] font-mono text-[10px] tracking-widest uppercase">Founder</span>
                    <span className="text-white font-bold tracking-tight">Eeshaan Aggarwal</span>
                 </div>
                 <div className="w-8 h-8 rounded-full border border-[#99E39E]/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#99E39E] rounded-full animate-pulse" />
                 </div>
              </div>
          </motion.div>

          {/* --- RIGHT: Interactive Narrative Terminal --- */}
          <div className="flex-1 flex flex-col justify-center relative z-10 py-4 lg:py-0">
             
             {/* Header */}
             <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="border-b border-white/10 pb-6 mb-8"
              >
                <div className="flex items-center gap-3 mb-2">
                   <span className="w-2 h-2 bg-white rounded-full" />
                   {/* Increased font size here */}
                   <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E] text-2xl sm:text-3xl font-bold">Eeshaan Aggarwal</h4>
                </div>
                {/* Monospace for tactical feel */}
                <p className="text-gray-500 font-mono text-xs tracking-[0.3em] uppercase">Founder & CEO</p>
             </motion.div>

             {/* --- MINIMALIZED TAB CONTROLS --- */}
             {/* Switched font of numbers, and generally minimalized pill form */}
             <div className="flex flex-wrap gap-4 mb-10">
                {dossierData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative px-5 py-2.5 rounded-full overflow-hidden transition-all duration-300 group"
                  >
                    {/* Active State Background uses brand color */}
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === tab.id ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'}`} style={{ backgroundColor: tab.color }} />
                    
                    {/* Minimalist pill border */}
                    <div className={`absolute inset-0 border rounded-full transition-colors duration-300 ${activeTab === tab.id ? 'border-opacity-50' : 'border-opacity-10 border-white group-hover:border-opacity-30'}`} style={{ borderColor: activeTab === tab.id ? tab.color : '' }} />
                    
                    <span className={`relative z-10 font-mono text-[10px] md:text-xs tracking-widest uppercase transition-colors duration-300 ${activeTab === tab.id ? 'font-bold' : 'text-gray-500 group-hover:text-gray-300'}`} style={{ color: activeTab === tab.id ? tab.color : '' }}>
                      {tab.tab}
                    </span>
                  </button>
                ))}
             </div>

             {/* Tab Content Display */}
             {/* Min-height prevents layout shift on tab change */}
             <div className="relative min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6">
                        {/* Elegant direct gradient transition */}
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${activeContent?.color}, #ffffff)` }}>
                          {activeContent?.headline}
                        </span>
                     </h2>
                     {/* Refined body leading for legibility */}
                     <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light max-w-xl">
                        {activeContent?.text}
                     </p>
                  </motion.div>
                </AnimatePresence>
             </div>

          </div>
        </div>

        {/* --- REVIEWS COMPONENT (Contextualized) --- */}
        <div className="relative z-20 mt-16 md:mt-24">
            <Reviews />
        </div>

      </div>

      {/* Animation for the non-safe Biometric Scanline effect */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scan {
          0% { top: -20%; }
          50% { top: 100%; }
          100% { top: -20%; }
        }
      `}} />
    </section>
  );
};

export default Founder;