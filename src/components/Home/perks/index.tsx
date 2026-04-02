"use client";
import React, { useState, useEffect } from "react";
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
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const Icon = item.icon;

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  // Responsive Z-depth so cubes don't look weird on mobile
  const transformZ = isTouchDevice ? "120px" : "140px"; 

  const handleInteraction = () => {
    if (isTouchDevice) {
        setIsHovered(!isHovered);
    }
  };

  return (
    <div 
      style={{ perspective: "1500px" }} 
      // Adjusted container size to scale perfectly on mobile without leaving giant gaps
      className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] group cursor-pointer z-10" 
      onClick={handleInteraction} 
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)} 
      onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
    >
      
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        
        {/* 🚀 True 3D Volumetric Shadow */}
        <div className={`absolute inset-0 translate-y-12 sm:translate-y-16 blur-[30px] sm:blur-[40px] bg-black/80 rounded-full z-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-60'}`} />

        {/* The 3D Flipping Engine */}
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
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full blur-[50px] sm:blur-[60px] transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-50'}`}
            style={{ backgroundColor: item.color, transform: "translateZ(0px)" }}
          />

          {/* --- FRONT FACE --- */}
          <div
            className="absolute inset-0 bg-[#0A0C10]/80 backdrop-blur-3xl border border-white/10 rounded-[24px] sm:rounded-[32px] flex flex-col items-center justify-center p-6 overflow-hidden shadow-inner texture-noise"
            style={{ transform: `rotateX(0deg) translateZ(${transformZ})`, backfaceVisibility: "hidden" }}
          >
            {/* Subtle scanning laser on the front face */}
            <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] animate-[sweep_4s_ease-in-out_infinite]" />

            {/* Targeting Brackets */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-white/10 transition-colors duration-500" style={{ borderTopColor: isHovered ? `${item.color}80` : '', borderLeftColor: isHovered ? `${item.color}80` : '' }} />
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-white/10 transition-colors duration-500" style={{ borderTopColor: isHovered ? `${item.color}80` : '', borderRightColor: isHovered ? `${item.color}80` : '' }}/>
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-white/10 transition-colors duration-500" style={{ borderBottomColor: isHovered ? `${item.color}80` : '', borderLeftColor: isHovered ? `${item.color}80` : '' }}/>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-white/10 transition-colors duration-500" style={{ borderBottomColor: isHovered ? `${item.color}80` : '', borderRightColor: isHovered ? `${item.color}80` : '' }}/>

            <div className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/[0.04] border transition-colors duration-500 flex items-center justify-center mb-4 sm:mb-6 shadow-inner ${isHovered ? 'border-transparent' : 'border-white/10'}`}>
              <div className={`absolute inset-0 blur-sm rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-0'}`} style={{backgroundColor: item.color}} />
              <Icon className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-500" style={{ color: item.color }} />
            </div>
            
            <h3 className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter drop-shadow-md">
              {item.keyword}<span className="text-white/30 font-mono">.</span>
            </h3>
            <p className="relative z-10 text-gray-500 text-[10px] sm:text-xs font-mono tracking-widest uppercase mt-2 opacity-60">Architect_Node</p>
            
            {/* Mobile UX hint: Only show "Tap to open" on touch devices when not hovered */}
            {isTouchDevice && !isHovered && (
                <p className="absolute bottom-6 font-mono text-[9px] uppercase tracking-widest text-[#F5D061] animate-pulse">Tap to decrypt</p>
            )}
          </div>

          {/* --- BOTTOM FACE (The Details) --- */}
          <div
            className="absolute inset-0 bg-[#0A0C10]/95 backdrop-blur-2xl border border-white/10 border-b-8 rounded-[24px] sm:rounded-[32px] flex flex-col items-start justify-center p-6 sm:p-9 overflow-hidden shadow-inner texture-noise"
            style={{ transform: `rotateX(-90deg) translateZ(${transformZ})`, backfaceVisibility: "hidden", borderBottomColor: item.color }}
          >
            <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-45deg] group-hover:animate-[sweep_3s_ease-in-out_infinite]" />
            
            <div className="absolute top-4 left-6 sm:top-6 sm:left-9 flex items-center gap-2 font-mono text-[10px] sm:text-xs opacity-40">
               <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]" style={{backgroundColor: item.color, color: item.color}} />
               <span className="text-white uppercase tracking-widest">Sys_Boot // Active</span>
            </div>

            <AnimatePresence>
              {isHovered && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }} className="w-full relative z-10 mt-4 sm:mt-0">
                    <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white tracking-tight">
                      {item.title}
                    </h4>
                    <div className="w-8 h-1 rounded-full mb-3 sm:mb-5 shadow-[0_0_10px_currentColor]" style={{ backgroundColor: item.color, color: item.color }} />
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                      {item.text}
                    </p>
                  </motion.div>
              )}
            </AnimatePresence>
            
            {/* Mobile UX Hint to close */}
            {isTouchDevice && isHovered && (
                <p className="absolute bottom-6 right-6 font-mono text-[9px] uppercase tracking-widest text-gray-500">Tap to close</p>
            )}
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
    <section className="py-24 md:py-40 relative bg-[#030406] overflow-hidden border-t border-white/5">

      {/* Deep Space Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-200px] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-[#99E39E]/10 to-transparent rounded-full blur-[150px] sm:blur-[180px] -z-10 pointer-events-none" />
      <div className="absolute top-[-150px] right-[-100px] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-bl from-[#38BDF8]/10 to-transparent rounded-full blur-[120px] sm:blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-32"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6">
             <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-[#F5D061]" />
             <p className="text-[#F5D061] font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_10px_rgba(245,208,97,0.5)]">
               What Drives Us
             </p>
             <div className="w-6 sm:w-8 h-px bg-gradient-to-l from-transparent to-[#F5D061]" />
          </div>
          
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black leading-[1.1] tracking-tight">
            Innovate, Transform, Grow – <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E] bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">Advanced Tech Services Redefined.</span>
          </h2>
        </motion.div>

        {/* 🚀 UPGRADE: Stack vertically on mobile, row on large screens */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-12 xl:gap-20">
          {perksData.map((item, index) => (
            <DataCube key={index} item={item} />
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .texture-noise::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.05;
            z-index: -1;
            pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
        }
      `}} />
    </section>
  );
}