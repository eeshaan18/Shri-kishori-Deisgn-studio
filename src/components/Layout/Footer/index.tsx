"use client";
import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="relative bg-darkmode pt-24 md:pt-32 overflow-hidden z-10 border-t border-white/5">
      
      {/* --- SEAMLESS TRANSITION TOP BORDER --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#F5D061]/20 to-transparent" />

      {/* --- AMBIENT GLOWS --- */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-[#F5D061]/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto lg:max-w-screen-xl px-6 relative z-20">
        
        {/* --- THE BENTO BOX DASHBOARD --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-20">
          
          {/* 1. BRAND TERMINAL */}
          <div className="lg:col-span-4 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 hover:border-white/10 transition-colors duration-500 rounded-[32px] p-8 md:p-10 flex flex-col justify-between group backdrop-blur-sm">
            <div>
              <Logo />
              <p className="mt-8 text-gray-400 text-sm md:text-base leading-relaxed font-light max-w-sm">
                Engineering digital dominance through bespoke design and high-performance architecture. We don't just build websites; we build scalable digital realities.
              </p>
            </div>
            
            {/* Social Orbs */}
            <div className="flex gap-4 items-center mt-12">
              {[
                { icon: "fa6-brands:facebook-f", color: "hover:border-[#38BDF8] hover:text-[#38BDF8] hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]" },
                { icon: "fa6-brands:instagram", color: "hover:border-[#F5D061] hover:text-[#F5D061] hover:shadow-[0_0_20px_rgba(245,208,97,0.2)]" },
                { icon: "fa6-brands:linkedin", color: "hover:border-[#99E39E] hover:text-[#99E39E] hover:shadow-[0_0_20px_rgba(153,227,158,0.2)]" }
              ].map((social, index) => (
                <Link key={index} href="#" className={`group flex items-center justify-center w-12 h-12 rounded-full bg-black/40 border border-white/10 backdrop-blur-md transition-all duration-500 ${social.color}`}>
                  <Icon icon={social.icon} width="18" height="18" className="text-gray-500 transition-all duration-500" />
                </Link>
              ))}
            </div>
          </div>

          {/* 2. NAVIGATION TERMINAL */}
          <div className="lg:col-span-2 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 hover:border-white/10 transition-colors duration-500 rounded-[32px] p-8 md:p-10 backdrop-blur-sm">
            <h4 className="text-white mb-8 font-mono text-xs tracking-[0.2em] uppercase opacity-50">Navigation</h4>
            <ul className="flex flex-col gap-5">
              {headerData.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 w-fit font-mono text-sm">
                    <span className="text-[#F5D061] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">&gt;</span>
                    {/* FIXED: Added whitespace-nowrap so "About Us" never splits */}
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1 whitespace-nowrap">
                      {item.label}
                    </span>
                    <span className="text-[#F5D061] opacity-0 group-hover:opacity-100 animate-pulse">_</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. LEGAL TERMINAL */}
          <div className="lg:col-span-2 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 hover:border-white/10 transition-colors duration-500 rounded-[32px] p-8 md:p-10 backdrop-blur-sm">
            <h4 className="text-white mb-8 font-mono text-xs tracking-[0.2em] uppercase opacity-50">Legal</h4>
            <ul className="flex flex-col gap-5">
              {[
                { label: "Terms", href: "#" },
                { label: "Privacy", href: "#" },
                { label: "Support", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 w-fit font-mono text-sm">
                    <span className="text-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">&gt;</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1 whitespace-nowrap">
                      {item.label}
                    </span>
                    <span className="text-[#38BDF8] opacity-0 group-hover:opacity-100 animate-pulse">_</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. REFINED: PROJECT INITIATION TERMINAL */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#F5D061]/5 to-transparent border border-[#F5D061]/20 hover:border-[#F5D061]/40 transition-colors duration-500 rounded-[32px] p-8 md:p-10 flex flex-col justify-between backdrop-blur-sm relative overflow-hidden group">
             
             {/* Subtle internal gold glow */}
             <div className="absolute top-0 right-0 w-40 h-40 bg-[#F5D061]/10 blur-3xl rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100" />

             <div>
               <h4 className="text-[#F5D061] mb-8 font-mono text-xs tracking-[0.2em] uppercase opacity-80">Project_Terminal</h4>
               <div className="flex flex-col gap-5 font-mono text-sm relative z-10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                     <span className="text-gray-400">Availability</span>
                     <div className="flex items-center gap-2 text-[#99E39E] bg-[#99E39E]/10 px-2 py-1 rounded-md border border-[#99E39E]/20 text-[10px] sm:text-xs">
                        <div className="w-1.5 h-1.5 bg-[#99E39E] rounded-full animate-pulse shadow-[0_0_5px_#99E39E]" />
                        Accepting Clients
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <span className="text-gray-500 text-xs">Direct_Line</span>
                     <a href="mailto:hello@shrikishori.com" className="text-white hover:text-[#F5D061] transition-colors text-base md:text-lg tracking-tight">
                        hello@shrikishori.com
                     </a>
                  </div>
               </div>
             </div>

             {/* The Ultimate CTA Button */}
             <Link href="/contact" className="mt-8 relative z-10 w-full py-4 rounded-xl bg-[#F5D061] text-black font-bold text-center hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(245,208,97,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                INITIATE SEQUENCE &rarr;
             </Link>
          </div>

        </div>

        {/* --- BOTTOM COPYRIGHT STRIP --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-12 relative z-20">
          <p className="text-gray-500 text-xs md:text-sm font-light">
            © {new Date().getFullYear()} Shri Kishori Design Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5D061]/50" />
            <p className="text-gray-500 font-mono text-[10px] tracking-[0.2em] uppercase">
              Designed & Engineered for Dominance
            </p>
          </div>
        </div>

      </div>

      {/* --- REFINED: THE MASSIVE GOLDEN WATERMARK --- */}
      {/* Uses a vertical gradient so it fades beautifully into the dark background */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full whitespace-nowrap text-center pointer-events-none select-none z-0">
         <h1 className="text-[14vw] md:text-[140px] lg:text-[220px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#F5D061]/15 to-transparent">
            SHRI KISHORI
         </h1>
      </div>

    </footer>
  );
};

export default Footer;