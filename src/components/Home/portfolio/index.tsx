"use client";
import React, { useState } from "react";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";
import { motion, AnimatePresence } from "framer-motion";

// --- RAZOR SHARP LIST ICONS ---
const TargetIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const PenToolIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>;
const CpuIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" /><path d="M20 9h3" /><path d="M20 14h3" /><path d="M1 9h3" /><path d="M1 14h3" /></svg>;
const RocketIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>;
const MotionIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="5 3 19 12 5 21 5 3" /><path d="M19 12h-4" /><path d="M15 12a3 3 0 1 1-6 0" /></svg>;

const servicesData = [
  {
    id: "01",
    icon: TargetIcon,
    title: "UI/UX & Experience Design",
    desc: "Architecting frictionless user journeys. We engineer pixel-perfect, accessible interfaces that convert users into advocates.",
    color: "#F5D061"
  },
  {
    id: "02",
    icon: CpuIcon,
    title: "Web & Mobile Engineering",
    desc: "Deploying robust, high-performance digital infrastructure. From scalable Next.js platforms to fluid mobile applications.",
    color: "#99E39E"
  },
  {
    id: "03",
    icon: MotionIcon,
    title: "Motion & Interaction Design",
    desc: "Breathing life into the static. We craft cinematic micro-interactions and fluid motion graphics that capture immediate attention.",
    color: "#38BDF8"
  },
  {
    id: "04",
    icon: RocketIcon,
    title: "Growth Marketing & SEO",
    desc: "Data-driven dominance. We deploy algorithmic SEO and high-converting marketing funnels to scale your visibility globally.",
    color: "#FFFFFF"
  },
  {
    id: "05",
    icon: PenToolIcon,
    title: "Brand Architecture",
    desc: "Forging unforgettable identities. We build cohesive visual ecosystems that command absolute authority in saturated markets.",
    color: "#4ADE80"
  },
];

// --- COMPANY LOGO COMPONENT ---
const CompanyLogo = () => (
  <div className="flex items-center justify-center w-[150px] md:w-[200px]">
<Image 
  src="/images/logo1.png" 
  alt="Shri Kishori Design Studio" 
  width={200} 
  height={80}
  className="object-contain drop-shadow-[0_0_20px_rgba(245,208,97,0.2)]"
  priority
/>
  </div>
);

// --- THE TECH MANDALA (Idle State) ---
const TechMandala = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 md:scale-100">
    <motion.svg animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute w-[400px] h-[400px] opacity-40" viewBox="0 0 100 100">
       <polygon points="50,5 60,40 95,50 60,60 50,95 40,60 5,50 40,40" fill="none" stroke="#F5D061" strokeWidth="0.3" />
       <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff" strokeWidth="0.2" strokeDasharray="1 3" />
       <circle cx="50" cy="50" r="30" fill="none" stroke="#99E39E" strokeWidth="0.3" />
    </motion.svg>
    <motion.svg animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[260px] h-[260px] opacity-60" viewBox="0 0 100 100">
       <rect x="25" y="25" width="50" height="50" fill="none" stroke="#ffffff" strokeWidth="0.3" transform="rotate(45 50 50)" />
       <rect x="25" y="25" width="50" height="50" fill="none" stroke="#ffffff" strokeWidth="0.3" />
       <circle cx="50" cy="50" r="35" fill="none" stroke="#F5D061" strokeWidth="0.5" strokeDasharray="2 4" />
    </motion.svg>
    <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 shadow-[0_0_40px_rgba(245,208,97,0.15)] bg-black/40 backdrop-blur-sm" />
  </motion.div>
);

// --- LIVE INSTALLATION COMPONENTS ---
const UiUxCanvas = () => (
  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="w-[280px] h-[180px] md:w-[320px] md:h-[220px] bg-[#0A0C10]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-3 shadow-[0_20px_50px_rgba(245,208,97,0.15)] overflow-hidden">
    <div className="flex gap-2 mb-2">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
    </div>
    <div className="flex gap-3 h-full">
      <motion.div animate={{ width: ["20%", "30%", "20%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="h-full bg-white/5 rounded-lg" />
      <div className="flex-1 flex flex-col gap-3">
        <motion.div animate={{ height: ["40%", "60%", "40%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full bg-[#F5D061]/20 border border-[#F5D061]/30 rounded-lg relative overflow-hidden">
           <motion.div animate={{ left: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
        </motion.div>
        <motion.div animate={{ height: ["60%", "40%", "60%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full bg-white/5 rounded-lg" />
      </div>
    </div>
  </motion.div>
);

const DevCanvas = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-[300px] h-[200px] md:w-[340px] md:h-[240px] bg-[#050505] border border-[#99E39E]/30 rounded-xl p-4 md:p-5 shadow-[0_20px_50px_rgba(153,227,158,0.1)] font-mono text-[9px] md:text-[11px] leading-relaxed overflow-hidden">
    <div className="text-[#99E39E] mb-3 flex items-center gap-2"><div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#99E39E] rounded-full animate-pulse" /> sk-studio@server:~$ npm run dev</div>
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
      <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="text-gray-400">ready - started server on 0.0.0.0:3000</motion.div>
      <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="text-gray-400">info  - loaded env from .env.local</motion.div>
      <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="text-blue-400 mt-2">event - compiled client and server successfully</motion.div>
      <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="text-white mt-2 flex justify-between"><span>Route (app)</span><span>Size</span></motion.div>
      <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="text-gray-500 flex justify-between"><span>┌ ○ /</span><span>5.2 kB</span></motion.div>
      <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="text-gray-500 flex justify-between"><span>├ ○ /services</span><span>3.1 kB</span></motion.div>
      <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="text-[#99E39E] mt-3 animate-pulse">✓ Done in 1.28s</motion.div>
    </motion.div>
  </motion.div>
);

const MotionCanvas = () => (
  <motion.div initial={{ opacity: 0, rotate: -10 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 10 }} className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
    <motion.div animate={{ rotate: 360, borderRadius: ["20%", "50%", "20%"], scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute w-24 h-24 md:w-32 md:h-32 border-2 border-[#38BDF8] shadow-[0_0_30px_rgba(56,189,248,0.3)] mix-blend-screen" />
    <motion.div animate={{ rotate: -360, scale: [1.2, 0.8, 1.2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute w-32 h-32 md:w-40 md:h-40 border border-[#38BDF8]/50 rounded-full mix-blend-screen" />
    <motion.div animate={{ x: [-40, 40, -40], y: [40, -40, 40] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute w-4 h-4 md:w-6 md:h-6 bg-white rounded-full shadow-[0_0_20px_#ffffff]" />
    <motion.div animate={{ x: [40, -40, 40], y: [40, -40, 40] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute w-3 h-3 md:w-4 md:h-4 bg-[#38BDF8] rounded-full shadow-[0_0_20px_#38BDF8]" />
  </motion.div>
);

const GrowthCanvas = () => (
  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} className="w-[280px] h-[180px] md:w-[320px] md:h-[220px] bg-gradient-to-t from-white/5 to-transparent border-b border-l border-white/20 p-4 flex items-end justify-between gap-2 relative">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <motion.div key={i} animate={{ height: [`${15 * i}%`, `${Math.random() * 40 + 50}%`, `${15 * i}%`] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }} className="w-8 md:w-10 bg-gradient-to-t from-white/10 to-white/40 rounded-t-sm relative">
         <div className="absolute top-0 left-0 w-full h-1 bg-white shadow-[0_0_10px_#ffffff]" />
      </motion.div>
    ))}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
       {/* 🚀 BUG FIXED: Removed the invalid md:strokeWidth attribute */}
       <motion.path 
         d="M 0 200 Q 50 150 100 180 T 200 100 T 320 20" 
         fill="none" 
         stroke="#FFFFFF" 
         strokeWidth="3" 
         initial={{ pathLength: 0 }} 
         animate={{ pathLength: 1 }} 
         transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} 
         style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' }} 
       />
    </svg>
  </motion.div>
);

const BrandCanvas = () => (
  <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <motion.path d="M 50 10 L 90 90 L 10 90 Z" fill="none" stroke="#4ADE80" strokeWidth="1" strokeDasharray="4 4" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "center" }} />
      <motion.circle cx="50" cy="65" r="25" fill="none" stroke="#4ADE80" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ filter: 'drop-shadow(0 0 10px rgba(74,222,128,0.5))' }} />
      <motion.circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
      <motion.circle cx="50" cy="50" r="10" fill="#4ADE80" initial={{ scale: 0 }} animate={{ scale: [0, 1, 0.8, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ filter: 'drop-shadow(0 0 15px rgba(74,222,128,1))' }} />
    </svg>
  </motion.div>
);

export default function Portfolio() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const activeColor = activeNode !== null ? servicesData[activeNode].color : "#ffffff";

  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-[#030406]" id="portfolio">
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay pointer-events-none texture-noise" />

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
          
          {/* 🚀 LEFT COLUMN: The "Live Capability Canvas" */}
          <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center order-2 lg:order-1 rounded-[32px] md:rounded-[40px] border border-white/5 bg-[#0A0C10]/80 backdrop-blur-3xl overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
            
            {/* Dynamic Ambient Background Glow */}
            <motion.div 
               animate={{ backgroundColor: `${activeColor}15` }} 
               transition={{ duration: 0.5 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full blur-[100px] md:blur-[120px] -z-10 pointer-events-none" 
            />

            {/* Tactical Crosshairs */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20 rounded-tl-sm opacity-50 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20 rounded-br-sm opacity-50 pointer-events-none" />

            {/* 🚀 THE INDEPENDENT FLOATING LOGO */}
            <motion.div
              animate={{
                top: activeNode === null ? "50%" : "32px",
                left: activeNode === null ? "50%" : "32px",
                x: activeNode === null ? "-50%" : "0%",
                y: activeNode === null ? "-50%" : "0%",
                scale: activeNode === null ? 1 : 0.6,
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute z-50 pointer-events-none"
            >
               <CompanyLogo />
            </motion.div>

            {/* The Live Rendered Installations */}
            <AnimatePresence mode="wait">
              {activeNode === null && <TechMandala key="idle" />}
              {activeNode === 0 && <UiUxCanvas key="uiux" />}
              {activeNode === 1 && <DevCanvas key="dev" />}
              {activeNode === 2 && <MotionCanvas key="motion" />}
              {activeNode === 3 && <GrowthCanvas key="growth" />}
              {activeNode === 4 && <BrandCanvas key="brand" />}
            </AnimatePresence>

            {/* Subtle overlay text indicating it's a live render */}
            <div className="absolute bottom-6 left-6 md:left-8 flex items-center gap-2 text-white/30 font-mono text-[9px] md:text-[10px] uppercase tracking-widest pointer-events-none bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[#99E39E] animate-pulse shadow-[0_0_8px_#99E39E]" /> Live Render Engine
            </div>
          </div>

          {/* 🚀 RIGHT COLUMN: Typography & Interactive List */}
          <div className="order-1 lg:order-2">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-5 shadow-sm">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F5D061] animate-pulse" />
                <p className="text-gray-300 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
                  Capabilities
                </p>
              </div>
              
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-3 md:mb-4">
                A technical powerhouse engineered to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E] bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">scale your dominance.</span>
              </h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-col gap-3 md:gap-4"
            >
              {servicesData.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeNode === index;
                const isDimmed = activeNode !== null && !isActive;
                
                return (
                  <motion.div
                    key={index}
                    // Wrap with layout for fluid shifting when hovered
                    layout
                    variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                    onMouseEnter={() => setActiveNode(index)}
                    onMouseLeave={() => setActiveNode(null)}
                    animate={{ 
                        scale: isActive ? 1.02 : 1,
                        opacity: isDimmed ? 0.4 : 1,
                        backgroundColor: isActive ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)",
                        borderColor: isActive ? `${item.color}40` : "rgba(255,255,255,0.05)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="group relative flex items-start sm:items-center gap-4 sm:gap-5 p-4 md:p-5 rounded-[20px] md:rounded-[24px] border cursor-pointer overflow-hidden"
                  >
                    {/* Hover Sweep Gradient */}
                    <div className={`absolute top-0 left-[-100%] w-[50%] h-full transition-all duration-1000 ease-out z-0 ${isActive ? 'left-[200%]' : ''}`} style={{ backgroundImage: `linear-gradient(to right, transparent, ${item.color}15, transparent)`, transform: "skewX(-20deg)" }} />
                    
                    <div className={`flex-shrink-0 relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0A0C10] border transition-colors duration-500 shadow-lg`} style={{ borderColor: isActive ? `${item.color}80` : 'rgba(255,255,255,0.1)' }}>
                      <div className={`absolute inset-0 blur-md rounded-xl transition-opacity duration-500 ${isActive ? 'opacity-30' : 'opacity-0'}`} style={{ backgroundColor: item.color }} />
                      <div className={`absolute inset-0 rounded-xl border transition-colors duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ borderColor: item.color }} />
                      <div className={`relative z-10 transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`} style={{ color: isActive ? item.color : item.color + '80' }}>
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                    </div>

                    <div className="flex flex-col pr-2 md:pr-4 relative z-10">
                      <h4 className={`text-base sm:text-lg md:text-xl font-bold tracking-tight mb-1 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {item.title}
                      </h4>
                      <p className="text-gray-400/80 text-[11px] sm:text-xs md:text-sm leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
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
        @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
        }
      `}} />
    </section>
  );
}