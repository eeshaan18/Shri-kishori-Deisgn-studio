"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🚀 NOURISHED COPY: Authoritative, tech-forward, and outcome-driven.
const coreValues = [
  { 
    num: "01", 
    tag: "// THE FRONTIER",
    keyword: "Innovate", 
    description: "Pushing the boundaries of web and app capabilities with bleeding-edge technology.", 
    color: "text-primary", 
    border: "border-primary/40", 
    shadow: "shadow-[0_0_50px_rgba(var(--color-primary),0.15)] inset shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
    laser: "bg-primary shadow-[0_0_10px_var(--color-primary)]",
    indicator: "bg-primary"
  },
  { 
    num: "02", 
    tag: "// THE FOUNDATION",
    keyword: "Architect", 
    description: "Flawless, scalable system design meeting pixel-perfect front-end execution.", 
    color: "text-[#99E39E]", 
    border: "border-[#99E39E]/40", 
    shadow: "shadow-[0_0_50px_rgba(153,227,158,0.15)] inset shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
    laser: "bg-[#99E39E] shadow-[0_0_10px_#99E39E]",
    indicator: "bg-[#99E39E]"
  },
  { 
    num: "03", 
    tag: "// THE EXPERIENCE",
    keyword: "Captivate", 
    description: "Human-centric UX/UI that turns complex user journeys into effortless interactions.", 
    color: "text-primary", 
    border: "border-primary/40", 
    shadow: "shadow-[0_0_50px_rgba(var(--color-primary),0.15)] inset shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
    laser: "bg-primary shadow-[0_0_10px_var(--color-primary)]",
    indicator: "bg-primary"
  },
  { 
    num: "04", 
    tag: "// THE GROWTH",
    keyword: "Scale", 
    description: "Future-proof digital products engineered to evolve alongside your boldest ambitions.", 
    color: "text-[#99E39E]", 
    border: "border-[#99E39E]/40", 
    shadow: "shadow-[0_0_50px_rgba(153,227,158,0.15)] inset shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
    laser: "bg-[#99E39E] shadow-[0_0_10px_#99E39E]",
    indicator: "bg-[#99E39E]"
  },
  { 
    num: "05", 
    tag: "// THE IDENTITY",
    keyword: "Forge", 
    description: "Crafting unmistakable brand ecosystems that command authority in saturated markets.", 
    color: "text-primary", 
    border: "border-primary/40", 
    shadow: "shadow-[0_0_50px_rgba(var(--color-primary),0.15)] inset shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
    laser: "bg-primary shadow-[0_0_10px_var(--color-primary)]",
    indicator: "bg-primary"
  },
  { 
    num: "06", 
    tag: "// THE RESULT",
    keyword: "Elevate", 
    description: "Where breathtaking aesthetics converge with measurable, high-converting performance.", 
    color: "text-[#99E39E]", 
    border: "border-[#99E39E]/40", 
    shadow: "shadow-[0_0_50px_rgba(153,227,158,0.15)] inset shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
    laser: "bg-[#99E39E] shadow-[0_0_10px_#99E39E]",
    indicator: "bg-[#99E39E]"
  },
];

const RotatingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasSwiped, setHasSwiped] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % coreValues.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % coreValues.length);
    setHasSwiped(true);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + coreValues.length) % coreValues.length);
    setHasSwiped(true);
  };

  return (
    <div 
      className="w-full max-w-screen-xl mx-auto px-4 mt-12 sm:mt-20 relative z-20 flex flex-col items-center justify-center overflow-hidden [perspective:1200px] py-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      
      {/* Deep Space Anchor Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] sm:w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-[#99E39E]/10 to-primary/5 rounded-[100%] blur-[100px] -z-10 pointer-events-none" />

      {/* UX Affordance for Mobile */}
      <AnimatePresence>
          {isTouchDevice && !hasSwiped && (
              <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute top-0 z-50 flex items-center gap-2 bg-[#0A0C10]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full pointer-events-none shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              >
                  <svg className="w-4 h-4 text-[#F5D061] animate-[bounce_1s_infinite_horizontal]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gray-300">Swipe to rotate</span>
                  <svg className="w-4 h-4 text-[#F5D061] animate-[bounce_1s_infinite_horizontal_reverse]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
              </motion.div>
          )}
      </AnimatePresence>

      <div className="relative w-full h-[280px] sm:h-[300px] flex items-center justify-center">
        {coreValues.map((item, index) => {
          const offset = (index - currentIndex + coreValues.length) % coreValues.length;
          
          // 🚀 101/100 CONTINUOUS 3D SPATIAL MATH 
          let x: number | string = 0;
          let scale = 0.5;
          let opacity = 0;
          let zIndex = 1;
          let rotateY = 0;
          let blur = "blur(12px)";

          if (offset === 0) {
            x = 0;
            scale = 1;
            opacity = 1;
            zIndex = 10;
            rotateY = 0;
            blur = "blur(0px)";
          } else if (offset === 1) {
            x = "105%"; 
            scale = 0.75;
            opacity = 0.5; 
            zIndex = 5;
            rotateY = -15; 
            blur = "blur(4px)";
          } else if (offset === coreValues.length - 1) {
            x = "-105%";
            scale = 0.75;
            opacity = 0.5;
            zIndex = 5;
            rotateY = 15;
            blur = "blur(4px)";
          } else if (offset === 2) {
            x = "200%"; // Pushed off-screen right
            scale = 0.5;
            opacity = 0;
            zIndex = 1;
            rotateY = -25;
            blur = "blur(8px)";
          } else if (offset === coreValues.length - 2) {
            x = "-200%"; // Pushed off-screen left
            scale = 0.5;
            opacity = 0;
            zIndex = 1;
            rotateY = 25;
            blur = "blur(8px)";
          } else {
            // Any other items hidden perfectly in the back
            x = "0%";
            scale = 0.4;
            opacity = 0;
            zIndex = 0;
            rotateY = 0;
          }

          const isActive = offset === 0;

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{ x, scale, opacity, rotateY, zIndex, filter: blur }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} 
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              // 🚀 Upgraded Velocity Physics
              onDragEnd={(e, { offset: dragOffset, velocity }) => {
                const swipePower = Math.abs(dragOffset.x) * velocity.x;
                if (dragOffset.x < -40 || swipePower < -10000) handleNext();
                else if (dragOffset.x > 40 || swipePower > 10000) handlePrev();
              }}
              onClick={() => {
                if (offset === 1) handleNext();
                if (offset === coreValues.length - 1) handlePrev();
              }}
              className={`absolute w-[85vw] sm:w-[360px] md:w-[420px] h-[260px] sm:h-[280px] flex flex-col justify-between p-6 sm:p-8 rounded-[32px] group transition-colors duration-500 will-change-transform
                ${isActive ? `cursor-grab active:cursor-grabbing bg-[#0A0C10]/80 backdrop-blur-2xl border border-white/20 ${item.shadow} ${item.border} texture-noise` : "cursor-pointer bg-white/[0.02] backdrop-blur-md border border-white/5"}
              `}
              aria-hidden={!isActive}
            >
              {/* Top Light Glare Effect */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50 pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-50' : 'opacity-0'}`} />

              {/* Top Row: Tag & Number */}
              <div className="flex justify-between items-start relative z-10 pointer-events-none">
                <span className={`font-mono text-[10px] sm:text-xs tracking-[0.2em] transition-colors duration-500 ${isActive ? item.color : "text-gray-600"}`}>
                  {item.tag}
                </span>
                <div className={`text-5xl sm:text-6xl font-black transition-colors duration-700 leading-none ${isActive ? "text-white/10" : "text-white/5"}`}>
                  {item.num}
                </div>
              </div>

              {/* Content Area */}
              <div className="relative z-10 mb-4 pointer-events-none">
                <h3 className={`text-2xl sm:text-3xl font-extrabold mb-2 sm:mb-3 tracking-wide uppercase transition-colors duration-500 ${isActive ? "text-white" : "text-gray-500"}`}>
                  {item.keyword}
                </h3>
                <p className={`font-light text-xs sm:text-sm md:text-base leading-relaxed transition-colors duration-500 ${isActive ? "text-gray-300" : "text-gray-600"}`}>
                  {item.description}
                </p>
              </div>

              {/* Bottom Tech Line with Animated Scanning Laser */}
              <div className={`absolute bottom-0 left-8 right-8 h-[2px] overflow-hidden rounded-full pointer-events-none transition-colors duration-500 ${isActive ? 'bg-white/10' : 'bg-transparent'}`}>
                {isActive && (
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "400%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className={`w-1/4 h-full rounded-full ${item.laser}`}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 🚀 TACTICAL PAGINATION INDICATORS */}
      <div className="flex items-center justify-center gap-2 mt-12 sm:mt-16 z-20">
          {coreValues.map((item, index) => {
              const isActive = currentIndex === index;
              return (
                  <button 
                      key={index}
                      onClick={() => {
                          setCurrentIndex(index);
                          setHasSwiped(true);
                      }}
                      className="group p-2 outline-none"
                      aria-label={`Go to slide ${index + 1}`}
                  >
                      <motion.div 
                          initial={false}
                          animate={{ 
                              width: isActive ? 32 : 8,
                              backgroundColor: isActive ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.2)"
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 24 }}
                          className={`h-2 rounded-full transition-shadow duration-300 ${isActive ? `shadow-[0_0_10px_currentColor] ${item.color}` : ''}`}
                      />
                  </button>
              );
          })}
      </div>

      {/* Embedded High-End Premium CSS */}
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
        @keyframes bounce_1s_infinite_horizontal {
            0%, 100% { transform: translateX(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
            50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        @keyframes bounce_1s_infinite_horizontal_reverse {
            0%, 100% { transform: translateX(25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
            50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
      `}} />
    </div>
  );
};

export default RotatingCarousel;