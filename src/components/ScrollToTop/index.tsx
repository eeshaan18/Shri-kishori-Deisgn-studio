"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// --- CUSTOM UPWARD ARROW ---
const AscendArrow = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m18 15-6-6-6 6"/>
    <path d="M12 9v11" />
  </svg>
);

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  // 1. Framer Motion Scroll Telemetry
  const { scrollY, scrollYProgress } = useScroll();

  // 2. Drive the rotation of the inner rings
  const innerRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const outerRotation = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 3. Handle Visibility (Hide/Show at threshold)
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  // SVG Progress Ring calculations for a 56px container
  const circleRadius = 24; 
  const circleCircumference = 2 * Math.PI * circleRadius;
  const progressOffset = useTransform(scrollYProgress, [0, 1], [circleCircumference, 0]);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999]">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={scrollToTop}
              aria-label="Ascend to top"
              // Perfected Flex layout: Button is exactly 64px tall with 4px inner padding
              className="group flex items-center p-1 h-16 rounded-full bg-[#0A0C10]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#0e1015] hover:border-[#F5D061]/50 active:scale-95"
            >
              
              {/* --- LEFT SIDE: The 56x56 Fixed Core (Ensures arrow never moves) --- */}
              <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-white/[0.02] overflow-hidden group-hover:bg-[#F5D061]/10 transition-colors duration-500">
                
                {/* 1. The Dynamic Scroll Progress Ring */}
                <div className="absolute inset-0 transform -rotate-90 flex items-center justify-center">
                  <svg className="w-14 h-14" viewBox="0 0 56 56">
                    <circle
                      cx="28" cy="28" r={circleRadius}
                      stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none"
                    />
                    <motion.circle
                      cx="28" cy="28" r={circleRadius}
                      stroke="#F5D061" strokeWidth="2.5" fill="none"
                      strokeDasharray={circleCircumference}
                      style={{ strokeDashoffset: progressOffset }}
                      strokeLinecap="round"
                      className="transition-colors duration-500 group-hover:stroke-[#F5D061]"
                    />
                  </svg>
                </div>

                {/* 2. The Kinetic Gyroscope (Fades OUT on hover) */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0" style={{ perspective: "800px" }}>
                  <motion.div 
                    style={{ rotateX: outerRotation, rotateY: innerRotation, transformStyle: "preserve-3d" }}
                    animate={{ rotateZ: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-3 border border-[#F5D061]/30 rounded-full" 
                  />
                  <motion.div 
                    style={{ rotateY: innerRotation, rotateZ: outerRotation, transformStyle: "preserve-3d" }}
                    animate={{ rotateX: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-[#99E39E]/30 rounded-full" 
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                    className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_#fff]" 
                  />
                </div>

                {/* 3. The UX Arrow (Fades IN on hover, perfectly centered) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <AscendArrow className="w-5 h-5 text-[#F5D061]" />
                </div>

              </div>

              {/* --- RIGHT SIDE: The Expanding Text Container --- */}
              {/* Uses exact width control for flawless, jitter-free expansion */}
              <div className="flex items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] w-0 group-hover:w-[90px]">
                <span className="pl-3 font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#F5D061] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  ASCEND
                </span>
              </div>
              
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}