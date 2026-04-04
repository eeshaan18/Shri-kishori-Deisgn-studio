"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "@/icons/User";

const DURATION = 3000; 

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // DYNAMIC STATES
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const listRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);

  // --- FETCH FROM GOOGLE SHEETS ---
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // The URL now targets the Testimonials tab specifically
        const API_URL = "https://script.google.com/macros/s/AKfycby7abOTP0vzMP-x13RwsC1fTKeZHpmSElq1sHxVQNqlRWsRHJ6wWhuPwmVZdPUSY4nT/exec?sheet=Testimonials";
        const response = await fetch(API_URL);
        const data = await response.json();
        
        if (!data.error && data.length > 0) {
            setTestimonials(data);
        }
      } catch (error) {
        console.error("Failed to sync transmissions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // --- AUTO-ADVANCE ANIMATION LOGIC ---
  useEffect(() => {
    if (testimonials.length === 0) return; // Don't run if empty

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
  }, [activeIndex, isHovered, progress, testimonials.length]);

  // --- SCROLL ALIGNMENT LOGIC ---
  useEffect(() => {
    if (testimonials.length === 0) return;

    if (activeItemRef.current && listRef.current) {
      const list = listRef.current;
      const item = activeItemRef.current;
      
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      if (isDesktop) {
          const scrollTop = item.offsetTop - (list.clientHeight / 2) + (item.clientHeight / 2);
          list.scrollTo({ top: scrollTop, behavior: "smooth" });
      } else {
          const scrollLeft = item.offsetLeft - (list.clientWidth / 2) + (item.clientWidth / 2);
          list.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activeIndex, testimonials.length]);


  // --- LOADING / EMPTY STATES ---
  if (isLoading) {
    return (
        <div className="w-full h-64 bg-transparent flex flex-col items-center justify-center font-mono text-[#99E39E] z-50">
            <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 bg-[#99E39E] rounded-full animate-ping" />
                <span className="text-xs sm:text-sm tracking-[0.3em] uppercase">Intercepting Transmissions</span>
            </div>
            <p className="text-white/50 text-[10px] tracking-widest animate-pulse">ESTABLISHING SECURE LINK...</p>
        </div>
    );
  }

  if (testimonials.length === 0) {
      return null; // Silently hide the section if no testimonials exist yet
  }

  const activeReview = testimonials[activeIndex];

  return (
    <section className="relative z-10 w-full bg-transparent py-16 md:py-24">
      
      <div className="w-full relative z-20 container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        
        {/* --- Header --- */}
        <div className="mb-12 md:mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
             <span className="w-1.5 h-1.5 rounded-full bg-[#99E39E] animate-pulse relative z-10" />
             <p className="text-gray-400 font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase relative z-10">
                Client Transmissions
             </p>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6 leading-[1.1] max-w-4xl mx-auto">
            Voices of the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E] bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">Digital Frontier.</span>
          </h2>
        </div>

        {/* --- COMMAND CENTER LAYOUT --- */}
        <div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* LEFT COL: Directory Node (Horizontal on Mobile, Vertical on Desktop) */}
          <div 
            ref={listRef}
            className="lg:col-span-5 flex flex-row lg:flex-col gap-4 relative z-10 order-2 lg:order-1 overflow-x-auto lg:overflow-x-visible overflow-y-hidden lg:overflow-y-auto max-h-none lg:max-h-[500px] custom-scrollbar pb-4 lg:pb-0 pr-0 lg:pr-4 mask-fade snap-x snap-mandatory w-full"
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
                  className={`relative w-[280px] sm:w-[320px] lg:w-full text-left p-5 sm:p-6 rounded-[20px] lg:rounded-2xl border transition-all duration-500 overflow-hidden group flex-shrink-0 snap-center lg:origin-left outline-none ${
                    isActive 
                      ? "bg-white/[0.05] border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scale-[1.02] lg:ml-2" 
                      : "bg-white/[0.01] border-white/5 hover:bg-white/[0.04] hover:border-white/20 lg:hover:translate-x-2"
                  }`}
                >
                  {/* Premium Progress Bar */}
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

                  <div className="relative z-10 flex items-center gap-4 sm:gap-5">
                    
                    {/* Sonar Ping Avatar */}
                    <div className="relative shrink-0">
                        {isActive && (
                            <span 
                                className="absolute inset-0 rounded-xl animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" 
                                style={{ backgroundColor: item.color }} 
                            />
                        )}
                        <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center transition-all duration-500 z-10 ${isActive ? "border-transparent scale-110" : "border-white/10 group-hover:border-white/30"}`} style={{ backgroundColor: isActive ? `${item.color}20` : '#0A0C10' }}>
                           <User className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500 ${isActive ? "" : "text-gray-500 group-hover:text-gray-300"}`} style={{ color: isActive ? item.color : '' }} />
                        </div>
                    </div>

                    <div className="min-w-0">
                      <h4 className={`text-base sm:text-lg font-bold tracking-tight truncate transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
                        {item.title}
                      </h4>
                      <p className={`font-mono text-[9px] sm:text-[10px] tracking-widest uppercase truncate transition-colors duration-300 ${isActive ? "text-gray-300" : "text-gray-600 group-hover:text-gray-400"}`}>
                        {item.short}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COL: Active Transmission Decryption */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 h-full w-full">
             <div className="relative bg-[#0A0C10]/60 backdrop-blur-2xl border border-white/10 rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12 lg:p-16 min-h-[350px] sm:min-h-[400px] md:min-h-[450px] flex flex-col justify-center shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_120px_rgba(0,0,0,0.9)] hover:border-white/20 group/panel texture-noise">
                
                {/* Kinetic Scanline */}
                <div className="absolute inset-x-0 h-[2px] opacity-20 blur-[2px] z-20 pointer-events-none animate-[scan_4s_ease-in-out_infinite]" style={{ backgroundColor: activeReview.color, boxShadow: `0 0 20px 5px ${activeReview.color}` }} />

                {/* Massive Watermark Quote */}
                <div 
                  className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 text-[150px] sm:text-[200px] leading-none font-serif italic opacity-[0.03] select-none pointer-events-none transition-all duration-1000 group-hover/panel:scale-110 group-hover/panel:opacity-[0.05]"
                  style={{ color: activeReview.color }}
                >
                  &ldquo;
                </div>

                {/* Tech Corner Brackets */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 border-t border-l border-white/20 rounded-tl-xl transition-colors duration-700 group-hover/panel:border-white/40" />
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 border-b border-r border-white/20 rounded-br-xl transition-colors duration-700 group-hover/panel:border-white/40" />

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
                    <div className="flex items-center gap-3 mb-6 sm:mb-10 border-b border-white/10 pb-4 sm:pb-6 transition-colors duration-700 group-hover/panel:border-white/20">
                        <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-white font-mono text-[8px] sm:text-[9px] tracking-[0.2em] uppercase shrink-0">
                            ID: {activeReview.id}
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent transition-colors duration-700 group-hover/panel:from-white/20" />
                        
                        {/* Live Signal Equalizer */}
                        <div className="flex items-center gap-2 shrink-0">
                            <div className="flex items-end gap-[2px] h-2.5 w-2.5 sm:h-3 sm:w-3" style={{ color: activeReview.color }}>
                                <motion.div animate={{ height: ["40%", "100%", "40%"] }} transition={{ repeat: Infinity, duration: 1 }} className="w-[1px] sm:w-[2px] bg-current" />
                                <motion.div animate={{ height: ["70%", "30%", "100%", "70%"] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-[1px] sm:w-[2px] bg-current" />
                                <motion.div animate={{ height: ["100%", "60%", "100%"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[1px] sm:w-[2px] bg-current" />
                            </div>
                           <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-gray-500 uppercase hidden sm:inline-block">Secure Link</span>
                        </div>
                    </div>

                    {/* The Body Text */}
                    <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed tracking-tight mb-6 sm:mb-8">
                      <span style={{ color: activeReview.color, textShadow: `0 0 15px ${activeReview.color}40` }}>"</span>
                      {activeReview.body}
                      <span style={{ color: activeReview.color, textShadow: `0 0 15px ${activeReview.color}40` }}>"</span>
                    </p>

                    {/* Footer Auth */}
                    <div className="flex items-center gap-3 sm:gap-4 opacity-60 transition-opacity duration-700 group-hover/panel:opacity-100">
                       <div className="w-8 sm:w-10 h-px bg-white/20" />
                       <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-gray-400 uppercase">Transmission Auth: Verified</span>
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
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(245,208,97,0.3); }
        
        /* Smooth fade based on screen size */
        @media (min-width: 1024px) {
            .mask-fade {
                mask-image: linear-gradient(to bottom, transparent, black 5%, black 95%, transparent);
                -webkit-mask-image: linear-gradient(to bottom, transparent, black 5%, black 95%, transparent);
            }
        }
        @media (max-width: 1023px) {
            .mask-fade {
                mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            }
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