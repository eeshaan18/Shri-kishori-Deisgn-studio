"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- BESPOKE TECH ICONS ---
const AtomIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)" />
  </svg>
);

const HandshakeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
    <path d="m18 15-2-2" /><path d="m15 18-2-2" />
  </svg>
);

const ChartLineIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
    <path d="M19 9h-4" /><path d="M19 9v4" />
  </svg>
);

// --- CORE DATA ---
const perksData = [
  {
    keyword: "Innovate",
    title: "Creative First",
    text: "We lead with originality and cultural elegance.",
    icon: AtomIcon,
    color: "#F5D061", 
    delay: 0,
  },
  {
    keyword: "Transform",
    title: "Client Centric",
    text: "Every pixel and line of code tailored to your vision.",
    icon: HandshakeIcon,
    color: "#38BDF8", 
    delay: 0.2,
  },
  {
    keyword: "Grow",
    title: "Scalable Solution",
    text: "Design to grow with your business.",
    icon: ChartLineIcon,
    color: "#99E39E", 
    delay: 0.4,
  },
];

// --- 🚀 THE ZERO-GRAVITY 3D DATA CUBE ---
const DataCube = ({ item }: { item: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  const transformZ = "140px"; 

  return (
    <div 
      style={{ perspective: "1500px" }} 
      className="w-[280px] h-[280px] group cursor-pointer z-10 scale-90 sm:scale-100" 
      onClick={() => setIsHovered(!isHovered)} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        
        {/* 🚀 FIX: The True 3D Volumetric Shadow (Doesn't break preserve-3d) */}
        <div className="absolute inset-0 translate-y-16 blur-[40px] bg-black/80 rounded-full z-0 transition-opacity duration-500 opacity-60 group-hover:opacity-100" />

        {/* The 3D Flipping Engine (REMOVED the drop-shadow class here!) */}
        <motion.div
          animate={{ 
            rotateX: isHovered ? 90 : 0, 
            scale: isHovered ? 1.05 : 1 
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full h-full z-10"
        >

          {/* --- INNER GLOWING CORE --- */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full blur-[60px] opacity-70 group-hover:opacity-100 transition-opacity duration-700"
            style={{ backgroundColor: item.color, transform: "translateZ(0px)" }}
          />

          {/* --- FRONT FACE --- */}
          <div
            className="absolute inset-0 bg-[#0A0C10]/80 backdrop-blur-3xl border border-white/10 rounded-3xl flex flex-col items-center justify-center p-6 overflow-hidden shadow-inner"
            style={{ transform: `rotateX(0deg) translateZ(${transformZ})`, backfaceVisibility: "hidden" }}
          >
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:15px_15px]" />

            {/* Targeting Brackets */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/10 group-hover:border-transparent transition-colors" style={{ borderTopColor: isHovered ? `${item.color}80` : '', borderLeftColor: isHovered ? `${item.color}80` : '' }} />
            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/10 group-hover:border-transparent transition-colors" style={{ borderTopColor: isHovered ? `${item.color}80` : '', borderRightColor: isHovered ? `${item.color}80` : '' }}/>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-white/10 group-hover:border-transparent transition-colors" style={{ borderBottomColor: isHovered ? `${item.color}80` : '', borderLeftColor: isHovered ? `${item.color}80` : '' }}/>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/10 group-hover:border-transparent transition-colors" style={{ borderBottomColor: isHovered ? `${item.color}80` : '', borderRightColor: isHovered ? `${item.color}80` : '' }}/>

            <div className="relative z-10 w-16 h-16 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 shadow-inner transition-colors duration-500 group-hover:border-transparent">
              <div className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500" style={{backgroundColor: item.color}} />
              <Icon className="relative z-10 w-8 h-8 transition-colors duration-500" style={{ color: item.color }} />
            </div>
            
            <h3 className="relative z-10 text-white text-3xl md:text-4xl font-black uppercase tracking-tighter drop-shadow-md transition-colors duration-300 group-hover:text-white">
              {item.keyword}<span className="text-white/30 font-mono">.</span>
            </h3>
            <p className="relative z-10 text-gray-500 text-xs font-mono tracking-widest uppercase mt-2 opacity-60">Architect_Node</p>
          </div>

          {/* --- BOTTOM FACE --- */}
          <div
            className="absolute inset-0 bg-[#0A0C10]/95 backdrop-blur-2xl border border-white/10 border-b-8 rounded-3xl flex flex-col items-start justify-center p-9 overflow-hidden shadow-inner"
            style={{ transform: `rotateX(-90deg) translateZ(${transformZ})`, backfaceVisibility: "hidden", borderBottomColor: item.color }}
          >
            <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] group-hover:animate-[sweep_3s_ease-in-out_infinite]" />
            
            <div className="absolute top-6 left-9 flex items-center gap-2 font-mono text-xs opacity-40">
               <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: item.color}} />
               <span className="text-white">SK_SYSTEM_BOOT // ACTIVE</span>
            </div>

            <AnimatePresence>
              {isHovered && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }} className="w-full relative z-10">
                    <h4 className="text-2xl font-bold mb-3 text-white tracking-tight">
                      {item.title}
                    </h4>
                    <div className="w-8 h-1 rounded-full mb-5" style={{ backgroundColor: item.color }} />
                    <p className="text-gray-400 text-base leading-relaxed font-light">
                      {item.text}
                    </p>
                  </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- COMPLETING THE CUBE --- */}
          {[
            { trans: `rotateX(90deg) translateZ(${transformZ})`, text: 'SK_STUDIO / SYSTEM // PERK //' },
            { trans: `rotateX(180deg) translateZ(${transformZ})`, text: 'REDEFINING_TECH_SERVICES // INNOVATE TRANSFORM GROW' },
            { trans: `rotateY(-90deg) translateZ(${transformZ})`, text: 'CLIENT_CENTRIC_ARCHITECTURE' },
            { trans: `rotateY(90deg) translateZ(${transformZ})`, text: 'CREATIVE_FIRST_ENGINEERING' }
          ].map((face, i) => (
            <div key={i} className="absolute inset-0 bg-[#08090C]/98 border border-white/5 rounded-3xl p-5 font-mono text-[7px] text-white/10 uppercase tracking-[0.3em] flex items-center justify-center overflow-hidden" style={{ transform: face.trans, backfaceVisibility: "hidden" }}>
               <div className="rotate-90 whitespace-nowrap opacity-30">{face.text}</div>
            </div>
          ))}

        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Perks() {
  return (
    <section className="py-24 md:py-40 relative bg-darkmode overflow-hidden border-t border-white/5">

      {/* Deep Space Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-tr from-[#99E39E]/10 to-transparent rounded-full blur-[180px] -z-10 pointer-events-none" />
      <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-bl from-[#38BDF8]/10 to-transparent rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto lg:max-w-screen-xl px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20 md:mb-32"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6">
             <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#F5D061]" />
             <p className="text-[#F5D061] font-mono text-sm tracking-[0.2em] uppercase font-bold">
               What Drives Us
             </p>
             <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#F5D061]" />
          </div>
          
          <h2 className="text-white text-3xl md:text-5xl lg:text-[50px] font-black leading-[1.2] tracking-tight">
            Innovate, Transform, Grow – <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E]">Advanced Tech Services Redefined.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 md:gap-20 lg:gap-12 xl:gap-20">
          {perksData.map((item, index) => (
            <DataCube key={index} item={item} />
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}} />
    </section>
  );
}