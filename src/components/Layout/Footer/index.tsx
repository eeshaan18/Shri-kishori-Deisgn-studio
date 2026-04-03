"use client";
import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer: FC = () => {
  const { scrollYProgress } = useScroll();
  // Subtle parallax for the background watermark
  const watermarkY = useTransform(scrollYProgress, [0.9, 1], [50, 0]);

  return (
    <footer className="relative bg-[#030406] pt-24 md:pt-32 overflow-hidden z-10 border-t border-white/5">
      
      {/* Noise Texture Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none texture-noise" />

      {/* --- SEAMLESS TRANSITION TOP BORDER --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#F5D061]/30 to-transparent" />

      {/* --- AMBIENT GLOWS --- */}
      <div className="absolute top-20 left-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#F5D061]/5 rounded-full blur-[120px] md:blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#38BDF8]/5 rounded-full blur-[120px] md:blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-20">
        
        {/* --- THE BENTO BOX DASHBOARD --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 pb-20">
          
          {/* 1. BRAND TERMINAL */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="lg:col-span-4 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-500 rounded-[28px] md:rounded-[32px] p-8 md:p-10 flex flex-col justify-between group backdrop-blur-md shadow-2xl texture-noise"
          >
            <div>
              <div className="scale-90 origin-left">
                <Logo />
              </div>
              <p className="mt-8 text-gray-400 text-sm md:text-base leading-relaxed font-light max-w-sm">
                Engineering digital dominance through bespoke design and high-performance architecture. We build scalable digital realities that command market authority.
              </p>
            </div>
            
            {/* Social Orbs */}
            <div className="flex gap-3 sm:gap-4 items-center mt-12">
              {[
                { icon: "fa6-brands:facebook-f", color: "#38BDF8" },
                { icon: "fa6-brands:instagram", color: "#F5D061" },
                { icon: "fa6-brands:linkedin", color: "#99E39E" }
              ].map((social, index) => (
                <motion.a 
                    key={index} 
                    href="#" 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-300"
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                >
                  <Icon icon={social.icon} width="16" height="16" className="text-gray-500 transition-colors duration-300 group-hover:text-[var(--hover-color)]" />
                  <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: social.color }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 2. NAVIGATION TERMINAL */}
          <div className="lg:col-span-2 bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors duration-500 rounded-[28px] md:rounded-[32px] p-8 md:p-10 backdrop-blur-sm">
            <h4 className="text-white/40 mb-8 font-mono text-[10px] tracking-[0.3em] uppercase">Navigation</h4>
            <ul className="flex flex-col gap-5">
              {headerData.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 w-fit font-mono text-xs">
                    <span className="text-[#F5D061] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">{'>'}</span>
                    <span className="whitespace-nowrap">{item.label}</span>
                    <span className="text-[#F5D061] opacity-0 group-hover:opacity-100 animate-pulse">_</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. LEGAL TERMINAL */}
          <div className="lg:col-span-2 bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors duration-500 rounded-[28px] md:rounded-[32px] p-8 md:p-10 backdrop-blur-sm">
            <h4 className="text-white/40 mb-8 font-mono text-[10px] tracking-[0.3em] uppercase">Legal</h4>
            <ul className="flex flex-col gap-5">
              {[
                { label: "Terms", href: "#" },
                { label: "Privacy", href: "#" },
                { label: "Support", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 w-fit font-mono text-xs">
                    <span className="text-[#38BDF8] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">{'>'}</span>
                    <span className="whitespace-nowrap">{item.label}</span>
                    <span className="text-[#38BDF8] opacity-0 group-hover:opacity-100 animate-pulse">_</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. PROJECT INITIATION TERMINAL */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="lg:col-span-4 bg-gradient-to-br from-[#F5D061]/10 via-transparent to-transparent border border-[#F5D061]/20 hover:border-[#F5D061]/40 transition-all duration-500 rounded-[28px] md:rounded-[32px] p-8 md:p-10 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group shadow-2xl texture-noise"
          >
             <div className="absolute top-0 right-0 w-40 h-40 bg-[#F5D061]/10 blur-3xl rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100" />

             <div>
               <h4 className="text-[#F5D061] mb-8 font-mono text-[10px] tracking-[0.3em] uppercase">Project_Terminal</h4>
               <div className="flex flex-col gap-6 font-mono text-sm relative z-10">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                     <span className="text-gray-500 text-xs uppercase tracking-widest">Status</span>
                     <div className="flex items-center gap-2 text-[#99E39E] bg-[#99E39E]/5 px-2.5 py-1 rounded-full border border-[#99E39E]/20 text-[9px]">
                        <div className="w-1.5 h-1.5 bg-[#99E39E] rounded-full animate-pulse shadow-[0_0_8px_#99E39E]" />
                        AVAILABLE
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <span className="text-gray-600 text-[10px] uppercase tracking-widest">Direct_Link</span>
                     <a href="mailto:hello@shrikishori.com" className="text-white hover:text-[#F5D061] transition-colors text-lg tracking-tight font-bold">
                        hello@shrikishori.com
                     </a>
                  </div>
               </div>
             </div>

             <Link href="/contact" className="mt-10 relative z-10 w-full py-4 rounded-xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-[#F5D061] transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden group/btn">
                <span className="relative z-10">Initiate Sequence</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover/btn:animate-[shimmer_1.5s_infinite]" />
             </Link>
          </motion.div>

        </div>

        {/* --- BOTTOM COPYRIGHT STRIP --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 relative z-20 border-t border-white/5 pt-8">
          <p className="text-gray-500 text-[11px] font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} SK_Design_STUDIO // ALL_RIGHTS_RESERVED
          </p>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5D061] shadow-[0_0_8px_#F5D061] animate-pulse" />
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite] font-mono text-[9px] tracking-[0.3em] uppercase">
              Designed & Engineered for Dominance
            </p>
          </div>
        </div>

      </div>

      {/* --- THE MASSIVE GOLDEN WATERMARK --- */}
      <motion.div 
        style={{ y: watermarkY }}
        className="absolute bottom-[-5%] left-0 w-full whitespace-nowrap text-center pointer-events-none select-none z-0 flex justify-center"
      >
         <h1 className="text-[14vw] md:text-[140px] lg:text-[240px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent w-full">
            SHRI KISHORI
         </h1>
      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .texture-noise::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.05;
            z-index: -1;
            pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
        }
      `}} />
    </footer>
  );
};

export default Footer;