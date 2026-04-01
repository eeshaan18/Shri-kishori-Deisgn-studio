"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "@/icons/User";

// --- VALIDATED CLIENT TELEMETRY (Strictly Gold & Green) ---
const testimonials = [
  {
    id: "COMMS_01",
    title: "Mr. Aarav Pandey",
    short: "Product Manager",
    color: "#F5D061", // Gold
    body: "The attention to detail in their UI work is simply unmatched. Our app not only looks stunning but feels intuitive at every touchpoint.",
  },
  {
    id: "COMMS_02",
    title: "Mrs. Sanaya Verma",
    short: "Co-Founder",
    color: "#99E39E", // Green
    body: "SK Design Studio built our website exactly how we envisioned — fast, smooth, and beautifully responsive.",
  },
  {
    id: "COMMS_03",
    title: "Mr. Rohit Mehta",
    short: "Chief Technical Officer",
    color: "#F5D061", // Gold
    body: "Clean structure, seamless integrations, and lightning-fast delivery — their API development made our backend rock solid.",
  },
  {
    id: "COMMS_04",
    title: "Ms. Priya Sharma",
    short: "Marketing Director",
    color: "#99E39E", // Green
    body: "Their digital architecture elevated our brand presence overnight. The kinetic UI elements immediately increased our user retention.",
  },
  {
    id: "COMMS_05",
    title: "Mr. Vikram Singh",
    short: "Startup Founder",
    color: "#F5D061", // Gold
    body: "They don't just write code; they engineer complete digital experiences. Truly a Tier-1 technical partner.",
  },
  {
    id: "COMMS_06",
    title: "Mrs. Anjali Desai",
    short: "Operations Head",
    color: "#99E39E", // Green
    body: "The transition from our old system to the new platform was flawless. Their full-stack capabilities are incredibly robust.",
  }
];

const DURATION = 3000; 

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const listRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let startTime = Date.now();
    let animationFrameId: number;

    const updateProgress = () => {
      if (isHovered) {
        startTime = Date.now() - (progress / 100) * DURATION;
        animationFrameId = requestAnimationFrame(updateProgress);
        return;
      }

      const elapsedTime = Date.now() - startTime;
      const newProgress = (elapsedTime / DURATION) * 100;

      if (newProgress >= 100) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setProgress(0);
        startTime = Date.now();
      } else {
        setProgress(newProgress);
      }
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeIndex, isHovered, progress]);

  useEffect(() => {
    if (activeItemRef.current && listRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center", 
      });
    }
  }, [activeIndex]);

  const activeReview = testimonials[activeIndex];

  return (
    <section className="relative z-10 w-full bg-transparent py-24">
      
      <div className="w-full relative z-20 container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        
        {/* --- Header --- */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm relative overflow-hidden group">
             {/* Subtle button sweep effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
             <span className="w-1.5 h-1.5 rounded-full bg-[#99E39E] animate-pulse relative z-10" />
             <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase relative z-10">
                Client Transmissions
             </p>
          </div>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
            Voices of the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E]">Digital Frontier.</span>
          </h2>
        </div>

        {/* --- COMMAND CENTER LAYOUT --- */}
        <div 
            className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* LEFT COL: Directory Node */}
          <div 
            ref={listRef}
            className="lg:col-span-5 flex flex-col gap-4 relative z-10 order-2 lg:order-1 max-h-[500px] overflow-y-auto custom-scrollbar pr-2 md:pr-4 py-4 mask-vertical-fade"
          >
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  ref={isActive ? activeItemRef : null}
                  onClick={() => {
                    setActiveIndex(index);
                    setProgress(0);
                  }}
                  className={`relative w-full text-left p-6 rounded-2xl border transition-all duration-500 overflow-hidden group flex-shrink-0 origin-left ${
                    isActive 
                      ? "bg-white/[0.05] border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scale-[1.02] ml-2" 
                      : "bg-white/[0.01] border-white/5 hover:bg-white/[0.04] hover:border-white/20 hover:translate-x-2"
                  }`}
                >
                  {/* Premium Progress Bar with glowing leading edge */}
                  {isActive && (
                    <div 
                      className="absolute top-0 left-0 bottom-0 opacity-20 transition-none"
                      style={{ 
                          width: `${progress}%`, 
                          background: `linear-gradient(90deg, transparent, ${item.color})`,
                          boxShadow: `inset -4px 0 10px -2px ${item.color}`
                      }} 
                    />
                  )}
                  
                  {/* Left Accent Border */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}
                    style={{ backgroundColor: item.color, boxShadow: isActive ? `0 0 15px ${item.color}` : 'none' }}
                  />

                  <div className="relative z-10 flex items-center gap-5">
                    
                    {/* Sonar Ping Avatar */}
                    <div className="relative">
                        {isActive && (
                            <span 
                                className="absolute inset-0 rounded-xl animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" 
                                style={{ backgroundColor: item.color }} 
                            />
                        )}
                        <div className={`relative w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-500 z-10 ${isActive ? "border-transparent scale-110" : "border-white/10 group-hover:border-white/30"}`} style={{ backgroundColor: isActive ? `${item.color}20` : '#0A0C10' }}>
                           <User className={`w-5 h-5 transition-colors duration-500 ${isActive ? "" : "text-gray-500 group-hover:text-gray-300"}`} style={{ color: isActive ? item.color : '' }} />
                        </div>
                    </div>

                    <div>
                      <h4 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
                        {item.title}
                      </h4>
                      <p className={`font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 ${isActive ? "text-gray-300" : "text-gray-600 group-hover:text-gray-400"}`}>
                        {item.short}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COL: Active Transmission Decryption */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 h-full">
             <div className="relative bg-[#0A0C10]/60 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 lg:p-16 min-h-[450px] flex flex-col justify-center shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_120px_rgba(0,0,0,0.9)] hover:border-white/20 group/panel texture-noise">
                
                {/* Kinetic Scanline */}
                <div className="absolute inset-x-0 h-[2px] opacity-20 blur-[2px] z-20 pointer-events-none animate-[scan_4s_ease-in-out_infinite]" style={{ backgroundColor: activeReview.color, boxShadow: `0 0 20px 5px ${activeReview.color}` }} />

                {/* Massive Watermark Quote */}
                <div 
                    className="absolute -top-10 -right-10 text-[200px] leading-none font-serif italic opacity-[0.03] select-none pointer-events-none transition-all duration-1000 group-hover/panel:scale-110 group-hover/panel:opacity-[0.05]"
                    style={{ color: activeReview.color }}
                >
                    &ldquo;
                </div>

                {/* Tech Corner Brackets */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/20 rounded-tl-xl transition-colors duration-700 group-hover/panel:border-white/40" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/20 rounded-br-xl transition-colors duration-700 group-hover/panel:border-white/40" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeReview.id}
                    initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0, filter: "blur(10px)", y: -15 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10"
                  >
                    {/* Header Telemetry */}
                    <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6 transition-colors duration-700 group-hover/panel:border-white/20">
                        <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-white font-mono text-[9px] tracking-[0.2em] uppercase">
                            ID: {activeReview.id}
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent transition-colors duration-700 group-hover/panel:from-white/20" />
                        
                        {/* Live Signal Equalizer */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-end gap-[2px] h-3 w-3" style={{ color: activeReview.color }}>
                                <motion.div animate={{ height: ["40%", "100%", "40%"] }} transition={{ repeat: Infinity, duration: 1 }} className="w-[2px] bg-current" />
                                <motion.div animate={{ height: ["70%", "30%", "100%", "70%"] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-[2px] bg-current" />
                                <motion.div animate={{ height: ["100%", "60%", "100%"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[2px] bg-current" />
                            </div>
                           <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">Secure Link</span>
                        </div>
                    </div>

                    {/* The Body Text */}
                    <p className="text-white text-xl md:text-2xl lg:text-3xl font-light leading-relaxed tracking-tight mb-8">
                      <span style={{ color: activeReview.color, textShadow: `0 0 15px ${activeReview.color}40` }}>"</span>
                      {activeReview.body}
                      <span style={{ color: activeReview.color, textShadow: `0 0 15px ${activeReview.color}40` }}>"</span>
                    </p>

                    {/* Footer Auth */}
                    <div className="flex items-center gap-4 opacity-60 transition-opacity duration-700 group-hover/panel:opacity-100">
                       <div className="w-10 h-px bg-white/20" />
                       <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">Transmission Auth: Verified</span>
                    </div>

                  </motion.div>
                </AnimatePresence>

             </div>
          </div>

        </div>
      </div>

      {/* Embedded High-End Premium CSS Details */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(245,208,97,0.3); }
        
        /* Smooth vertical fade for the scrollable list */
        .mask-vertical-fade {
            mask-image: linear-gradient(to bottom, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 5%, black 95%, transparent);
        }

        /* Architectural Noise Texture for Glass */
        .texture-noise::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.03;
            z-index: 1;
            pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default Reviews;