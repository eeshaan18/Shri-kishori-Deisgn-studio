"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- RAZOR SHARP CUSTOM ICON ---
const AscendIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m18 15-6-6-6 6"/>
  </svg>
);

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Handle Initial Route Mount (Your original logic)
  useEffect(() => {
    window.document.scrollingElement?.scrollTo(0, 0);
  }, []);

  // 2. Handle Scroll Telemetry & Visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll depth percentage
      if (scrollHeight > 0) {
        setScrollProgress((currentScrollY / scrollHeight) * 100);
      }

      // Show HUD only after scrolling down 300px
      if (currentScrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. The Smooth Ascend Execution
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circle calculations for the telemetry ring
  const circleRadius = 22;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (scrollProgress / 100) * circleCircumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group"
        >
          <button
            onClick={scrollToTop}
            className="relative flex items-center justify-center p-3 rounded-full bg-[#0A0C10]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 ease-out hover:pr-6"
            aria-label="Scroll to top"
          >
            {/* The Outer Telemetry Progress Ring */}
            <div className="absolute inset-0 pointer-events-none transform -rotate-90 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 52 52">
                <circle
                  cx="26" cy="26" r={circleRadius}
                  stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none"
                />
                <circle
                  cx="26" cy="26" r={circleRadius}
                  stroke="#F5D061" strokeWidth="2" fill="none"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-300 ease-out"
                />
              </svg>
            </div>

            {/* Background Hover Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

            {/* Icon & Expanding Text */}
            <div className="relative z-10 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F5D061] transition-colors duration-300">
                <AscendIcon className="w-4 h-4 text-[#F5D061] group-hover:text-black transition-colors duration-300" />
              </div>
              
              {/* This text is hidden by default and smoothly slides open on hover */}
              <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out font-mono text-[10px] tracking-widest uppercase text-[#F5D061] whitespace-nowrap">
                Ascend
              </span>
            </div>
            
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}