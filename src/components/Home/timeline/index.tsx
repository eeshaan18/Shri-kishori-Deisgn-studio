"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// 🚀 UPGRADE: Custom inline high-end SVGs perfectly matched to the copy.
// This also eliminates any missing import errors from `@/icons`.
const TargetIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const PenToolIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const CpuIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" />
    <path d="M20 9h3" /><path d="M20 14h3" /><path d="M1 9h3" /><path d="M1 14h3" />
  </svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const phases = [
  {
    id: "01",
    title: "Discovery & Strategy",
    tag: "// MAPPING_THE_DNA",
    description: "We don't just ask what you want; we uncover what you need. By analyzing market gaps and your core heritage, we engineer a blueprint for digital dominance.",
    deliverables: ["Brand Audit", "Competitor Analysis", "Technical Blueprint"],
    color: "#F5D061", 
    icon: TargetIcon 
  },
  {
    id: "02",
    title: "Visionary Design",
    tag: "// VISUAL_SYNTHESIS",
    description: "Where tradition meets the canvas. We craft breathtaking interfaces and unmistakable brand identities that command attention in saturated markets.",
    deliverables: ["High-Fidelity UI", "Brand Guidelines", "Motion Prototypes"],
    color: "#FFFFFF", 
    icon: PenToolIcon 
  },
  {
    id: "03",
    title: "Elite Engineering",
    tag: "// CORE_ARCHITECTURE",
    description: "Our developers translate design into pixel-perfect, scalable reality. We build robust, lightning-fast architectures optimized for seamless growth.",
    deliverables: ["Scalable Front-End", "API Integration", "Zero-Latency Code"],
    color: "#99E39E", 
    icon: CpuIcon 
  },
  {
    id: "04",
    title: "Launch & Evolution",
    tag: "// POST_LAUNCH_EXP",
    description: "Launch is just the beginning. We don't just ship; we scale. We provide continuous elite support to keep your studio ahead of the curve.",
    deliverables: ["Performance Tracking", "SEO Optimization", "Security Audits"],
    color: "#4ADE80", 
    icon: RocketIcon 
  }
];

const sentenceVariant = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const letterVariant = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 }
};

export default function TimeLine() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % phases.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const ActiveIcon = phases[activeTab].icon;

  return <div className="py-24 md:py-40 bg-darkmode overflow-hidden relative" id="process">
      
      <div ref={sectionRef} className="container mx-auto lg:max-w-screen-xl px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#99E39E] animate-pulse" />
            <p className="text-gray-300 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
              Our Creative Engine
            </p>
          </div>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            From the very first idea<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E]">to the final pixel.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-6 md:gap-8 bg-[#0A0C10]/80 backdrop-blur-2xl border border-white/10 p-4 md:p-6 rounded-[32px] md:rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
        >
          
          <div className="w-full lg:w-1/3 flex flex-col gap-4 lg:gap-5 justify-center">
            {phases.map((phase, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative flex flex-col items-start p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 text-left overflow-hidden ${
                    isActive ? "bg-white/5 border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]" : "hover:bg-white/[0.03] border border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    <div className="flex items-center gap-4">
                      <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'scale-100 opacity-100 shadow-[0_0_8px_currentColor]' : 'scale-0 opacity-0'}`} style={{ backgroundColor: phase.color, color: phase.color }} />
                      <span className={`font-mono text-xs md:text-sm ${isActive ? 'text-white' : 'text-gray-500'}`}>
                        {phase.id}
                      </span>
                      <h4 className={`text-base md:text-lg font-bold transition-colors ${isActive ? "text-white" : "text-gray-400"}`}>
                        {phase.title}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative z-10">
                    {isActive && (
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 6, ease: "linear" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: phase.color }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="w-full lg:w-2/3 relative bg-[#03050A] rounded-[24px] md:rounded-[32px] border border-white/5 overflow-hidden min-h-[450px] md:min-h-[500px] flex items-center p-6 md:p-12">
            
            {/* 🚀 UPGRADE: Lowered dot opacity to 7% for a subtle, premium texture */}
            <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

            <motion.div
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative z-10 w-full h-full flex flex-col justify-between"
              >
                
                <div 
                  className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.12] -z-10 pointer-events-none transition-colors duration-1000"
                  style={{ backgroundColor: phases[activeTab].color }}
                />

                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <motion.div 
                    variants={sentenceVariant}
                    initial="hidden"
                    animate="visible"
                    className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase flex" 
                    style={{ color: phases[activeTab].color }}
                  >
                    {phases[activeTab].tag.split("").map((char, index) => (
                      <motion.span key={index} variants={letterVariant}>
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                    <div className="absolute inset-1.5 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
                    <div 
                      className="absolute inset-0 opacity-20 blur-xl rounded-full transition-colors duration-500"
                      style={{ backgroundColor: phases[activeTab].color }} 
                    />
                    <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 bg-[#0A0C10] rounded-full border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden">
                      <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45" />
                      <div className="relative z-20 scale-100 md:scale-110 transition-colors duration-500" style={{ color: phases[activeTab].color, filter: `drop-shadow(0 0 5px ${phases[activeTab].color}60)` }}>
                        <ActiveIcon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="max-w-xl mb-8 md:mb-12 relative z-10">
                  <h3 className="text-white text-3xl md:text-5xl font-black mb-4 tracking-tight drop-shadow-md">
                    {phases[activeTab].title}
                  </h3>
                  <p className="text-gray-400/90 text-sm md:text-lg leading-[1.8] md:leading-loose font-light">
                    {phases[activeTab].description}
                  </p>
                </div>

                <div className="relative z-10">
                  <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mb-4">
                    Key_Deliverables
                  </p>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {phases[activeTab].deliverables.map((item, i) => (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1), duration: 0.4, type: "spring", stiffness: 200 }}
                        key={i}
                        className="group flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs md:text-sm whitespace-nowrap hover:bg-white/10 hover:border-white/30 transition-all cursor-default shadow-lg"
                      >
                        <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: phases[activeTab].color, color: phases[activeTab].color }} />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-6 text-[150px] md:text-[220px] font-black leading-none text-white/[0.03] select-none pointer-events-none tracking-tighter">
                  {phases[activeTab].id}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </div>;
}