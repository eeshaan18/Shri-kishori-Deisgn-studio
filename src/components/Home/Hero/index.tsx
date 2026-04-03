"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import RotatingCarousel from "./slider";
import React, { useState, useEffect } from "react";
import { getImagePrefix } from "@/utils/utils";

// --- SVG Icons for Services ---
const Icons = {
  UiUx: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#F5D061]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  ),
  Web: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#F5D061]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  App: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#F5D061]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Marketing: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#F5D061]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#0A0C10]/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-[#F5D061]/50 group-hover:bg-white/10 group-hover:shadow-[0_0_30px_rgba(245,208,97,0.3)] transition-all duration-300 z-10 relative">
      {icon}
    </div>

    {/* RESPONSIVE UX UPGRADE: Tooltips won't break the screen edges on mobile anymore */}
    <div className={`absolute ${tooltipPos} opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20`}>
      <div className="bg-[#0A0C10]/90 backdrop-blur-xl border border-white/10 text-white text-[10px] md:text-xs font-mono uppercase tracking-widest py-2 px-4 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.8)] whitespace-nowrap">
        {label}
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

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

  // 3D Tilt calculations
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden z-1 bg-[#030406]" id="main-banner">

      {/* Background Textures */}
      <div className="absolute inset-0 z-20 opacity-[0.04] mix-blend-overlay pointer-events-none texture-noise" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
        <motion.div animate={{ x: [0, 150, -50, 0], y: [0, -100, 100, 0], scale: [1, 1.2, 0.9, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-[#F5D061]/10 blur-[130px] rounded-[100%]" />
        <motion.div animate={{ x: [0, -100, 150, 0], y: [0, 150, -50, 0], scale: [1, 1.3, 1, 1] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute top-[10%] -right-[15%] w-[60vw] h-[60vw] bg-[#99E39E]/10 blur-[150px] rounded-[100%]" />
        <motion.div animate={{ x: [-50, 50, -50], y: [0, -50, 0], scale: [1, 1.1, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[40vw] bg-[#0F4C3A]/15 blur-[140px] rounded-[100%]" />
      </div>

      {/* Main Grid Container */}
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-30 flex flex-col justify-center min-h-[60vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* --- LEFT CONTENT --- */}
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="col-span-1 lg:col-span-7">

            {/* Tactical Pill */}
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5D061] to-[#99E39E] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <span className="relative inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/[0.03] border border-white/10 text-white text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase backdrop-blur-md shadow-inner">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#99E39E] shadow-[0_0_8px_#99E39E] animate-pulse" />
                  Welcome to the Next Level
                </span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-black leading-[1.05] text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] lg:text-start text-center text-white mb-6 tracking-tighter">
              Designs That Speak <br className="hidden md:block" />
              Tradition With a <br />
              {/* Liquid Shimmer Gradient Typography */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] via-[#FFF1BA] to-[#E6B800] bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">Modern</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99E39E] to-[#6BB570]">Voice.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-400 text-base sm:text-lg md:text-xl font-light mb-10 lg:text-start text-center max-w-xl leading-relaxed mx-auto lg:mx-0">
              Shri Kishori Design Studio is a full-stack digital agency delivering growth-driven web, app, and brand solutions. Rooted in creativity, powered by elite technology.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 sm:gap-6 w-full sm:w-auto">

              {/* Primary CTA (Magnetic Shimmer Glow) */}
              <button className="relative w-full sm:w-auto overflow-hidden rounded-xl bg-gradient-to-r from-[#F5D061] via-[#FFF1BA] to-[#E6B800] bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] text-gray-900 py-4 px-8 font-bold tracking-wide transition-transform hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(245,208,97,0.2)] hover:shadow-[0_0_40px_rgba(245,208,97,0.4)] group">
                <span className="relative z-10 flex items-center justify-center gap-3 uppercase text-xs tracking-widest font-mono">
                  Let’s Build Together
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>

              {/* Secondary CTA (Glassmorphic Light Sweep) */}
              <button className="group relative w-full sm:w-auto overflow-hidden text-white text-xs font-mono uppercase tracking-widest py-4 px-8 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all flex items-center justify-center gap-2 shadow-inner">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">View Portfolio</span>
              </button>

            </motion.div>
          </motion.div>

          {/* --- RIGHT CONTENT: 3D ALGORITHMIC MANDALA --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="col-span-1 lg:col-span-5 flex items-center justify-center relative w-full h-[350px] sm:h-[450px] lg:h-[500px] mt-8 lg:mt-0 [perspective:1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                rotateX: isTouchDevice ? 0 : rotateX,
                rotateY: isTouchDevice ? 0 : rotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-square flex items-center justify-center origin-center"
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
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute w-[80%] h-[80%] flex items-center justify-center drop-shadow-[0_0_8px_rgba(153,227,158,0.2)]" style={{ transform: "translateZ(10px)" }}>
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

              {/* Layer 3: Fixed Interactive Service Nodes (RESPONSIVE FIXES APPLIED) */}
              <div className="absolute inset-0" style={{ transform: "translateZ(50px)" }}>
                {/* Top Node */}
                <ServiceNode icon={Icons.Web} label="Web Architecture" position="top-0 sm:top-2 left-1/2 -translate-x-1/2" tooltipPos="bottom-full mb-2 sm:mb-3" />
                {/* Bottom Node */}
                <ServiceNode icon={Icons.App} label="App Ecosystems" position="bottom-0 sm:bottom-2 left-1/2 -translate-x-1/2" tooltipPos="top-full mt-2 sm:mt-3" />

                {/* Left Node: Tooltip moves below the icon on mobile to prevent left-screen overflow */}
                <ServiceNode icon={Icons.UiUx} label="UI/UX & Design" position="left-0 sm:left-2 top-1/2 -translate-y-1/2" tooltipPos="left-1/2 -translate-x-1/2 top-full mt-2 md:left-auto md:-translate-x-0 md:right-full md:mr-3 md:top-auto md:mt-0" />

                {/* Right Node: Tooltip moves below the icon on mobile to prevent right-screen overflow */}
                <ServiceNode icon={Icons.Marketing} label="SEO & Marketing" position="right-0 sm:right-2 top-1/2 -translate-y-1/2" tooltipPos="left-1/2 -translate-x-1/2 top-full mt-2 md:left-auto md:-translate-x-0 md:left-full md:ml-3 md:top-auto md:mt-0" />
              </div>

              {/* Layer 4: The Core */}
              <motion.div
                className="absolute w-[35%] h-[35%] sm:w-[40%] sm:h-[40%] max-w-[160px] max-h-[160px] rounded-full bg-[#0A0C10]/80 backdrop-blur-2xl border border-[#F5D061]/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.05),_0_0_50px_rgba(245,208,97,0.15)] flex items-center justify-center overflow-hidden group hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1),_0_0_80px_rgba(245,208,97,0.3)] hover:border-[#F5D061]/50 transition-all duration-500"
                style={{ transform: "translateZ(90px)" }}
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[150%] h-[150%] bg-[linear-gradient(to_right,#F5D06115_1px,transparent_1px),linear-gradient(to_bottom,#F5D06115_1px,transparent_1px)] bg-[size:15px_15px] opacity-50" />
                <div className="relative z-10 w-[60%] h-[60%] flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="SK Design Studio Logo"
                    fill
                    priority
                    className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>


              {/* Layer 5: Floating Nodes */}
              <motion.div style={{ x: useTransform(smoothMouseX, [-0.5, 0.5], [-40, 40]), y: useTransform(smoothMouseY, [-0.5, 0.5], [-40, 40]), transformStyle: "preserve-3d" }} className="absolute inset-0 pointer-events-none hidden sm:block">
                <div className="absolute top-[22%] left-[28%] w-1.5 h-1.5 rotate-45 bg-[#99E39E] shadow-[0_0_12px_#99E39E]" style={{ transform: "translateZ(150px)" }} />
                <div className="absolute bottom-[28%] right-[25%] w-2 h-2 rotate-45 bg-[#F5D061] shadow-[0_0_15px_#F5D061]" style={{ transform: "translateZ(70px)" }} />
                <div className="absolute top-[60%] left-[15%] w-1 h-1 rotate-45 bg-white shadow-[0_0_8px_white]" style={{ transform: "translateZ(110px)" }} />
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM FOLD: 3D Rotating Carousel */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: "easeOut" }} className="w-full mt-12 lg:mt-16 relative z-20">
        <RotatingCarousel />
      </motion.div>

      {/* Ambient Floor Lighting */}
      <div className="absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[radial-gradient(circle_at_center,_rgba(153,227,158,0.1),_transparent_70%)] rounded-full -bottom-32 -right-10 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030406] to-transparent pointer-events-none z-30" />

      {/* Required for shimmer effects and noise texture */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
        }
        .texture-noise::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.05;
            z-index: 1;
            pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}} />
    </section>
  );
};

export default Hero;