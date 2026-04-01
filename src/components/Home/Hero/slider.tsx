"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    laser: "bg-primary shadow-[0_0_10px_var(--color-primary)]"
  },
  { 
    num: "02", 
    tag: "// THE FOUNDATION",
    keyword: "Architect", 
    description: "Flawless, scalable system design meeting pixel-perfect front-end execution.", 
    color: "text-[#99E39E]", 
    border: "border-[#99E39E]/40", 
    shadow: "shadow-[0_0_50px_rgba(153,227,158,0.15)] inset shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
    laser: "bg-[#99E39E] shadow-[0_0_10px_#99E39E]"
  },
  { 
    num: "03", 
    tag: "// THE EXPERIENCE",
    keyword: "Captivate", 
    description: "Human-centric UX/UI that turns complex user journeys into effortless interactions.", 
    color: "text-primary", 
    border: "border-primary/40", 
    shadow: "shadow-[0_0_50px_rgba(var(--color-primary),0.15)] inset shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
    laser: "bg-primary shadow-[0_0_10px_var(--color-primary)]"
  },
  { 
    num: "04", 
    tag: "// THE GROWTH",
    keyword: "Scale", 
    description: "Future-proof digital products engineered to evolve alongside your boldest ambitions.", 
    color: "text-[#99E39E]", 
    border: "border-[#99E39E]/40", 
    shadow: "shadow-[0_0_50px_rgba(153,227,158,0.15)] inset shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
    laser: "bg-[#99E39E] shadow-[0_0_10px_#99E39E]"
  },
  { 
    num: "05", 
    tag: "// THE IDENTITY",
    keyword: "Forge", 
    description: "Crafting unmistakable brand ecosystems that command authority in saturated markets.", 
    color: "text-primary", 
    border: "border-primary/40", 
    shadow: "shadow-[0_0_50px_rgba(var(--color-primary),0.15)] inset shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
    laser: "bg-primary shadow-[0_0_10px_var(--color-primary)]"
  },
  { 
    num: "06", 
    tag: "// THE RESULT",
    keyword: "Elevate", 
    description: "Where breathtaking aesthetics converge with measurable, high-converting performance.", 
    color: "text-[#99E39E]", 
    border: "border-[#99E39E]/40", 
    shadow: "shadow-[0_0_50px_rgba(153,227,158,0.15)] inset shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
    laser: "bg-[#99E39E] shadow-[0_0_10px_#99E39E]"
  },
];

const RotatingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % coreValues.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % coreValues.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + coreValues.length) % coreValues.length);

  return (
    <div 
      className="w-full max-w-screen-xl mx-auto px-4 mt-20 relative z-20 h-[450px] flex items-center justify-center overflow-hidden [perspective:1200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Optional: Pause on touch for mobile users reading the card
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      
      {/* Deep Space Anchor Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-[#99E39E]/5 to-primary/5 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />

      {coreValues.map((item, index) => {
        const offset = (index - currentIndex + coreValues.length) % coreValues.length;
        
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
          x = "115%"; 
          scale = 0.75;
          opacity = 0.4; 
          zIndex = 5;
          rotateY = -20; 
          blur = "blur(3px)";
        } else if (offset === coreValues.length - 1) {
          x = "-115%";
          scale = 0.75;
          opacity = 0.4;
          zIndex = 5;
          rotateY = 20;
          blur = "blur(3px)";
        }

        const isActive = offset === 0;

        return (
          <motion.div
            key={index}
            initial={false}
            animate={{ x, scale, opacity, rotateY, zIndex, filter: blur }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} 
            // 🚀 Added: Mobile Swipe Gestures
            drag={isActive ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset: dragOffset }) => {
              if (dragOffset.x > 50) handlePrev();
              else if (dragOffset.x < -50) handleNext();
            }}
            onClick={() => {
              if (offset === 1) handleNext();
              if (offset === coreValues.length - 1) handlePrev();
            }}
            // 🚀 Added: Fluid mobile width (w-[85vw]) and Hardware Acceleration (will-change-transform)
            className={`absolute w-[85vw] sm:w-[340px] md:w-[420px] h-[260px] flex flex-col justify-between p-8 rounded-3xl group transition-colors duration-500 will-change-transform
              ${isActive ? `cursor-grab active:cursor-grabbing bg-white/10 backdrop-blur-2xl border border-white/20 ${item.shadow} ${item.border}` : "cursor-pointer bg-white/5 backdrop-blur-md border border-white/5"}
            `}
            // 🚀 Added: Screen reader accessibility so hidden slides don't get read aloud
            aria-hidden={!isActive}
          >
            {/* Top Light Glare Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50 pointer-events-none" />

            {/* Top Row: Tag & Number */}
            <div className="flex justify-between items-start relative z-10 pointer-events-none">
              <span className={`font-mono text-xs tracking-[0.2em] transition-colors duration-500 ${isActive ? item.color : "text-gray-500"}`}>
                {item.tag}
              </span>
              <div className={`text-6xl font-black transition-colors duration-700 ${isActive ? "text-white/10" : "text-white/5"}`}>
                {item.num}
              </div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 mb-4 pointer-events-none">
              <h3 className={`text-3xl font-extrabold mb-3 tracking-wide uppercase transition-colors duration-500 ${isActive ? "text-white" : "text-gray-500"}`}>
                {item.keyword}
              </h3>
              <p className={`font-light text-sm md:text-base leading-relaxed transition-colors duration-500 ${isActive ? "text-gray-300" : "text-gray-600"}`}>
                {item.description}
              </p>
            </div>

            {/* Bottom Tech Line with Animated Scanning Laser */}
            <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-white/10 overflow-hidden rounded-full pointer-events-none">
              {isActive && (
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "400%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  // 🚀 Added: Uses the exact laser color mapped in the object array for perfect synchronization
                  className={`w-1/4 h-full rounded-full ${item.laser}`}
                />
              )}
            </div>
          </motion.div>
        );
      })}

    </div>
  );
};

export default RotatingCarousel;