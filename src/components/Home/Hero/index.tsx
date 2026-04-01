"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import RotatingCarousel from "./slider"; 
import React from "react"; // Ensure React is imported at the top of your file if it isn't already
import { getImagePrefix } from "@/utils/utils"; 

// --- SVG Icons for Services ---
const Icons = {
  UiUx: (
    <svg className="w-6 h-6 text-[#F5D061]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  ),
  Web: (
    <svg className="w-6 h-6 text-[#F5D061]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  App: (
    <svg className="w-6 h-6 text-[#F5D061]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Marketing: (
    <svg className="w-6 h-6 text-[#F5D061]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
};


// --- TypeScript Interface for Props ---
interface ServiceNodeProps {
  icon: React.ReactNode;
  label: string;
  position: string;
  tooltipPos: string;
}

// --- Interactive Node Component ---
const ServiceNode = ({ icon, label, position, tooltipPos }: ServiceNodeProps) => (
  <motion.div
    className={`absolute ${position} group cursor-pointer flex items-center justify-center`}
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:border-[#F5D061]/50 group-hover:bg-white/10 transition-all duration-300 z-10 relative">
      {icon}
    </div>
    <div className={`absolute ${tooltipPos} opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20`}>
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs md:text-sm font-semibold tracking-wide py-2 px-4 md:px-5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {label}
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 25 } },
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100, mass: 2 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden z-1 bg-[#03050A]" id="main-banner">
      {/* Background Textures */}
      <div className="absolute inset-0 z-20 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
         <motion.div animate={{ x: [0, 150, -50, 0], y: [0, -100, 100, 0], scale: [1, 1.2, 0.9, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-[#F5D061]/15 blur-[130px] rounded-[100%]" />
         <motion.div animate={{ x: [0, -100, 150, 0], y: [0, 150, -50, 0], scale: [1, 1.3, 1, 1] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute top-[10%] -right-[15%] w-[60vw] h-[60vw] bg-[#99E39E]/15 blur-[150px] rounded-[100%]" />
         <motion.div animate={{ x: [-50, 50, -50], y: [0, -50, 0], scale: [1, 1.1, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[40vw] bg-[#0F4C3A]/20 blur-[140px] rounded-[100%]" />
      </div>

      {/* Main Grid Container */}
      <div className="container mx-auto lg:max-w-screen-xl px-6 relative z-30 flex flex-col justify-center min-h-[60vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="col-span-1 lg:col-span-7">
            <motion.div variants={itemVariants} className="mb-8 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5D061] to-[#99E39E] rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <span className="relative inline-flex items-center gap-2 py-2 px-5 rounded-full bg-darkmode border border-white/10 text-white text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#99E39E] shadow-[0_0_8px_#99E39E] animate-pulse"></span>
                  Welcome to the Next Level
                </span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-extrabold leading-[1.05] lg:text-[56px] md:text-[46px] text-[36px] lg:text-start text-center text-white mb-6 tracking-tight">
              Designs That Speak <br className="hidden md:block" />
              Tradition With a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] via-[#FFF1BA] to-[#E6B800]">Modern</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99E39E] to-[#6BB570]">Voice</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl font-light mb-10 lg:text-start text-center max-w-xl leading-relaxed mx-auto lg:mx-0">
              Shri Kishori Design Studio is a full-stack digital agency delivering growth-driven web, app, and brand solutions. Rooted in creativity, powered by elite technology.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center md:justify-start justify-center gap-6">
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#F5D061] to-[#E6B800] rounded-xl text-base font-bold text-gray-900 py-4 px-8 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(245,208,97,0.3)] hover:shadow-[0_0_50px_rgba(245,208,97,0.5)]">
                <span className="relative z-10 flex items-center gap-2">
                  Let’s Build Together
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              
              <button className="group text-white text-base font-medium py-4 px-8 rounded-xl border border-white/10 hover:border-[#99E39E]/60 hover:bg-[#99E39E]/10 transition-all flex items-center gap-2">
                View Our Portfolio
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content: Fluid Algorithm Mandala */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="col-span-1 lg:col-span-5 flex items-center justify-center relative w-full h-[400px] lg:h-[500px] mt-12 lg:mt-0 [perspective:1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Fluid wrapper that never breaks grid width */}
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[400px] aspect-square flex items-center justify-center origin-center"
            >
              
              {/* Layer 1: Traditional Rings */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(-40px)" }}>
                <svg viewBox="0 0 200 200" className="w-full h-full text-white/10" fill="none" stroke="currentColor">
                  <circle cx="100" cy="100" r="98" strokeWidth="0.5" strokeDasharray="4 6" />
                  <circle cx="100" cy="100" r="85" strokeWidth="1" strokeDasharray="1 8" strokeLinecap="round" />
                  <circle cx="100" cy="100" r="70" strokeWidth="0.2" opacity="0.5" />
                </svg>
              </motion.div>

              {/* Layer 2: Algorithmic Tech Lattice */}
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute w-[80%] h-[80%] flex items-center justify-center" style={{ transform: "translateZ(10px)" }}>
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#99E39E]/30" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <polygon points="50,5 89,27 89,72 50,95 11,72 11,27" strokeDasharray="2 2" />
                  <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" opacity="0.5" />
                  <line x1="50" y1="5" x2="50" y2="15" />
                  <line x1="89" y1="27" x2="80" y2="32" />
                  <line x1="89" y1="72" x2="80" y2="68" />
                  <line x1="50" y1="95" x2="50" y2="85" />
                  <line x1="11" y1="72" x2="20" y2="68" />
                  <line x1="11" y1="27" x2="20" y2="32" />
                </svg>
              </motion.div>

              {/* Layer 3: Fixed Interactive Service Nodes */}
              <div className="absolute inset-0" style={{ transform: "translateZ(50px)" }}>
                <ServiceNode icon={Icons.Web} label="Web Development" position="top-2 left-1/2 -translate-x-1/2" tooltipPos="bottom-full mb-3" />
                <ServiceNode icon={Icons.App} label="App Development" position="bottom-2 left-1/2 -translate-x-1/2" tooltipPos="top-full mt-3" />
                <ServiceNode icon={Icons.UiUx} label="UI/UX & Design" position="left-2 top-1/2 -translate-y-1/2" tooltipPos="right-full mr-3" />
                <ServiceNode icon={Icons.Marketing} label="SEO & Marketing" position="right-2 top-1/2 -translate-y-1/2" tooltipPos="left-full ml-3" />
              </div>

              {/* Layer 4: The Core */}
              <motion.div 
                className="absolute w-[40%] h-[40%] max-w-[160px] max-h-[160px] rounded-full bg-[#03050A]/80 backdrop-blur-2xl border border-[#F5D061]/30 shadow-[0_0_60px_rgba(245,208,97,0.15)] flex items-center justify-center overflow-hidden group hover:shadow-[0_0_80px_rgba(245,208,97,0.35)] hover:border-[#F5D061]/60 transition-all duration-500"
                style={{ transform: "translateZ(90px)" }} 
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[150%] h-[150%] bg-[linear-gradient(to_right,#F5D06115_1px,transparent_1px),linear-gradient(to_bottom,#F5D06115_1px,transparent_1px)] bg-[size:15px_15px] opacity-50" />
                <div className="relative z-10 w-[60%] h-[60%] flex items-center justify-center">
                  <Image src={`${getImagePrefix()}images/logo.png`} alt="SK Design Studio Logo" fill className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>

              {/* Layer 5: Floating Nodes */}
              <motion.div style={{ x: useTransform(smoothMouseX, [-0.5, 0.5], [-40, 40]), y: useTransform(smoothMouseY, [-0.5, 0.5], [-40, 40]), transformStyle: "preserve-3d" }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[22%] left-[28%] w-1.5 h-1.5 rotate-45 bg-[#99E39E] shadow-[0_0_12px_#99E39E]" style={{ transform: "translateZ(150px)" }} />
                <div className="absolute bottom-[28%] right-[25%] w-2 h-2 rotate-45 bg-[#F5D061] shadow-[0_0_15px_#F5D061]" style={{ transform: "translateZ(70px)" }} />
                <div className="absolute top-[60%] left-[15%] w-1 h-1 rotate-45 bg-white shadow-[0_0_8px_white]" style={{ transform: "translateZ(110px)" }} />
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
        
      {/* BOTTOM FOLD: 3D Rotating Carousel */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: "easeOut" }} className="w-full mt-8 lg:mt-9 relative z-20">
        <RotatingCarousel />
      </motion.div>
      
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-bl from-[#99E39E]/10 to-transparent blur-[120px] rounded-full -top-56 -right-10 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-darkmode to-transparent pointer-events-none z-30" />
    </section>
  );
};

export default Hero;