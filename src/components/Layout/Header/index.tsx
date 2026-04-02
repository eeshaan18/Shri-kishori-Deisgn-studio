"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // --- SCROLL PHYSICS & TELEMETRY ---
  const { scrollYProgress, scrollY } = useScroll();
  // Smooth out the scroll progress for the telemetry line
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- BODY LOCKING ---
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [navbarOpen]);

  const closeMenu = useCallback(() => setNavbarOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 z-[100] w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? "py-4 bg-[#0A0C10]/80 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-white/5 texture-noise"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        {/* --- GLOBAL SCROLL TELEMETRY LINE --- */}
        <motion.div 
            className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-[#F5D061] to-[#99E39E] origin-left z-50"
            style={{ scaleX, width: "100%", opacity: isScrolled ? 1 : 0 }}
        />

        <div className="container mx-auto px-4 lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between relative z-10">
          
          {/* --- LOGO --- */}
          <Link href="/" aria-label="Home" className="z-50 relative focus:outline-none group">
            <div className="transition-transform duration-500 group-hover:scale-105 group-active:scale-95">
                <Logo />
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex flex-grow items-center gap-8 xl:gap-10 justify-end">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* --- TACTICAL MOBILE MENU BUTTON --- */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block lg:hidden p-2 rounded-lg z-[110] relative group focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={navbarOpen}
          >
            <div className="w-6 flex flex-col items-end gap-1.5 relative z-10">
              <span className={`block h-[2px] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${navbarOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6 group-hover:w-5"}`} />
              <span className={`block h-[2px] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${navbarOpen ? "opacity-0 translate-x-2" : "w-5 group-hover:w-6 opacity-100"}`} />
              <span className={`block h-[2px] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${navbarOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-4 group-hover:w-5"}`} />
            </div>
            {/* Button Glow on Open */}
            <div className={`absolute inset-0 bg-white/10 rounded-full blur-md transition-opacity duration-300 ${navbarOpen ? "opacity-100" : "opacity-0"}`} />
          </button>
        </div>
      </header>

      {/* --- MOBILE NAVIGATION HUD --- */}
      <AnimatePresence>
        {navbarOpen && (
          <>
            {/* 1. Glass Backdrop */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-[#030406]/60 z-[90] lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* 2. Tactical Drawer */}
            <motion.div
              initial={{ x: "100%", borderLeftColor: "rgba(255,255,255,0)" }}
              animate={{ x: 0, borderLeftColor: "rgba(255,255,255,0.1)" }}
              exit={{ x: "100%", borderLeftColor: "rgba(255,255,255,0)" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0A0C10] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-[100] lg:hidden flex flex-col border-l texture-noise"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-start p-8 pt-24 border-b border-white/5 relative">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#F5D061] animate-pulse shadow-[0_0_10px_#F5D061]" />
                    <span className="font-mono text-[10px] tracking-[0.3em] text-gray-400 uppercase">Nav_Override</span>
                </div>
              </div>
              
              {/* Drawer Links (Mapped exactly as your original logic) */}
              <nav className="flex flex-col items-start px-6 py-8 gap-2 overflow-y-auto custom-scrollbar h-full">
                {headerData.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (index * 0.05), duration: 0.4 }}
                    className="w-full"
                  >
                    <MobileHeaderLink 
                      item={item} 
                      closeMenu={closeMenu} 
                    />
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer / System Status */}
              <div className="p-8 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-2 opacity-30">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="font-mono text-[9px] uppercase tracking-widest">System Secure</span>
                  </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

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
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.1); 
            border-radius: 10px;
        }
      `}} />
    </>
  );
};

export default Header;