"use client";
import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  variant?: "inline" | "fullscreen";
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ variant = "inline", text = "ESTABLISHING UPLINK..." }) => {
  
  // ==========================================
  // 1. THE INLINE BUTTON LOADER (Uplink Sync)
  // ==========================================
  if (variant === "inline") {
    return (
      <div className="ml-2 flex items-center justify-center relative w-5 h-5">
        <svg className="w-full h-full" viewBox="0 0 24 24">
          {/* Outer Gold Ring */}
          <motion.circle
            cx="12" cy="12" r="10"
            stroke="#F5D061" strokeWidth="2" fill="none" strokeDasharray="15 60" strokeLinecap="round"
            animate={{ rotate: 360 }} 
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="origin-center"
          />
          {/* Middle Sky Blue Ring */}
          <motion.circle
            cx="12" cy="12" r="6"
            stroke="#38BDF8" strokeWidth="2" fill="none" strokeDasharray="10 30" strokeLinecap="round"
            animate={{ rotate: -360 }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="origin-center"
          />
          {/* Inner Green Pulse */}
          <motion.circle 
            cx="12" cy="12" r="2" fill="#99E39E" 
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} 
            transition={{ duration: 0.8, repeat: Infinity }} 
            className="origin-center"
          />
        </svg>
      </div>
    );
  }

  // ==========================================
  // 2. THE FULLSCREEN LOADER (System Boot Core)
  // ==========================================
  return (
    <div className="fixed inset-0 z-[100] bg-[#050608] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Ambient Deep Space Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#F5D061]/10 to-[#38BDF8]/10 blur-[100px] rounded-full pointer-events-none" 
      />

      {/* The 3D Gyroscopic Core */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center" style={{ perspective: "800px" }}>
        
        {/* Ring 1 - Outer Gold (Spins on X/Y) */}
        <motion.div 
          animate={{ rotateX: 360, rotateY: 180 }} 
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
          style={{ transformStyle: "preserve-3d" }}
          className="absolute inset-0 border-[3px] border-t-[#F5D061] border-r-transparent border-b-[#F5D061]/20 border-l-transparent rounded-full shadow-[0_0_15px_rgba(245,208,97,0.2)]" 
        />
        
        {/* Ring 2 - Middle Sky Blue (Spins on Y/Z) */}
        <motion.div 
          animate={{ rotateY: 360, rotateZ: 180 }} 
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
          style={{ transformStyle: "preserve-3d" }}
          className="absolute inset-3 border-[3px] border-t-[#38BDF8] border-r-transparent border-b-[#38BDF8]/20 border-l-transparent rounded-full shadow-[0_0_15px_rgba(56,189,248,0.2)]" 
        />
        
        {/* Ring 3 - Inner Green (Spins on Z/X) */}
        <motion.div 
          animate={{ rotateZ: 360, rotateX: 180 }} 
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }} 
          style={{ transformStyle: "preserve-3d" }}
          className="absolute inset-6 border-[3px] border-t-[#99E39E] border-r-transparent border-b-[#99E39E]/20 border-l-transparent rounded-full shadow-[0_0_15px_rgba(153,227,158,0.2)]" 
        />
        
        {/* Central Quantum Spark */}
        <motion.div 
          animate={{ scale: [0.8, 1.5, 0.8], opacity: [0.6, 1, 0.6] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} 
          className="w-4 h-4 bg-white rounded-full shadow-[0_0_30px_#ffffff]" 
        />
      </div>

      {/* Terminal Readout HUD */}
      <div className="mt-12 flex flex-col items-center gap-3 relative z-10">
        <p className="text-[#F5D061] font-mono text-xs md:text-sm tracking-[0.4em] uppercase font-bold drop-shadow-md">
          Initializing Core System
        </p>
        <div className="flex items-center gap-2 px-4 py-1.5 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-[#99E39E] rounded-full animate-pulse shadow-[0_0_8px_#99E39E]" />
          <p className="text-gray-400 font-mono text-[10px] md:text-xs tracking-widest uppercase">
            {text}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Loader;