"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HeaderItem } from "../../../../types/menu";

// --- ANIMATION VARIANTS ---
const dropdownVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30, 
        staggerChildren: 0.05,
        delayChildren: 0.05
    } 
  },
  exit: { 
    opacity: 0, 
    y: 10, 
    scale: 0.95, 
    filter: "blur(5px)", 
    transition: { duration: 0.2, ease: "easeIn" } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const path = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Tactical hover delay (prevents accidental closures)
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (item.submenu) setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSubmenuOpen(false);
    }, 150); 
  };

  const isActive = isMounted && (path === item.href || item.submenu?.some(sub => path === sub.href));

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`relative flex items-center gap-1.5 py-2 text-[11px] lg:text-xs font-mono tracking-[0.2em] uppercase transition-colors duration-300 ${
          isActive ? "text-white" : "text-gray-400 hover:text-white"
        }`}
        aria-haspopup={!!item.submenu}
        aria-expanded={submenuOpen}
      >
        {/* Blinking Active Dot */}
        <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-[#F5D061] shadow-[0_0_10px_#F5D061] animate-[ping_2s_infinite]' : 'bg-transparent'}`} />

        {item.label}
        
        {/* Animated Tactical Chevron */}
        {item.submenu && (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
            animate={{ rotate: submenuOpen ? -180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={submenuOpen ? "text-[#F5D061]" : "text-gray-500"}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </motion.svg>
        )}

        {/* Magnetic Center-Scale Underline */}
        <span 
          className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F5D061] to-transparent origin-center transition-transform duration-300 ease-out ${
            isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
          }`}
        />
      </Link>

      {/* --- DROPDOWN MENU (HOLOGRAPHIC DATA CORE) --- */}
      <AnimatePresence>
        {item.submenu && submenuOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 top-[calc(100%+0.5rem)] w-64 z-50 origin-top-left"
          >
            <div className="bg-[#0A0C10]/90 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden p-2 relative texture-noise">
              
              {/* Tactical Header inside Dropdown */}
              <div className="px-4 py-3 border-b border-white/5 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-white/30">
                  {item.label}_Protocols
                </span>
              </div>

              {item.submenu.map((subItem, index) => {
                const isSubActive = isMounted && path === subItem.href;
                return (
                  <motion.div variants={itemVariants} key={index}>
                    <Link
                      href={subItem.href}
                      className={`group relative flex items-center px-4 py-3 text-xs tracking-wider uppercase font-semibold transition-all duration-300 rounded-xl overflow-hidden ${
                        isSubActive
                          ? "text-[#F5D061] bg-white/[0.04] border border-white/[0.05]"
                          : "text-gray-400 hover:text-white hover:bg-white/[0.02] border border-transparent"
                      }`}
                    >
                      {/* Hover Gradient Sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" />

                      <div className="relative z-10 flex items-center w-full">
                        {/* Target-Lock Hover Arrow */}
                        <span className={`absolute left-0 transition-all duration-300 font-mono text-[#F5D061] ${
                          isSubActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}>
                          {'>'}
                        </span>
                        
                        {/* Text Shifts Right to make room for arrow */}
                        <span className={`transition-transform duration-300 ${
                          isSubActive ? "translate-x-4" : "translate-x-0 group-hover:translate-x-4"
                        }`}>
                          {subItem.label}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderLink;