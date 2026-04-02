"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem; closeMenu?: () => void }> = ({ item, closeMenu }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch for usePathname
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault(); // Prevent navigation if it's a dropdown trigger
      setSubmenuOpen(!submenuOpen);
    } else if (closeMenu) {
      closeMenu(); // Close mobile menu if it's a direct link
    }
  };

  const isActive = isMounted && (path === item.href || item.submenu?.some((sub) => path === sub.href));

  return (
    <div className="relative w-full border-b border-white/5 last:border-none overflow-hidden">
      
      {/* --- MAIN CATEGORY LINK / BUTTON --- */}
      <Link
        href={item.submenu ? "#" : item.href}
        onClick={handleToggle}
        className={`flex items-center justify-between w-full py-5 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase transition-colors duration-300 focus:outline-none ${
          isActive ? "text-white" : "text-gray-400"
        }`}
        aria-expanded={submenuOpen}
      >
        <div className="flex items-center gap-3">
            {/* Blinking Active Dot */}
            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-[#F5D061] shadow-[0_0_10px_#F5D061] animate-[ping_2s_infinite]' : 'bg-transparent'}`} />
            <span className={isActive ? "text-white" : "group-hover:text-white transition-colors"}>
                {item.label}
            </span>
        </div>
        
        {/* Animated Tactical Chevron */}
        {item.submenu && (
          <motion.div 
            animate={{ rotate: submenuOpen ? -180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`p-1.5 rounded-md border transition-colors duration-300 ${
              submenuOpen ? "bg-[#F5D061]/10 border-[#F5D061]/30 text-[#F5D061]" : "bg-white/5 border-white/10 text-gray-500"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m7 10l5 5l5-5"
              />
            </svg>
          </motion.div>
        )}
      </Link>

      {/* --- FLUID ACCORDION SUBMENU --- */}
      <AnimatePresence initial={false}>
        {item.submenu && submenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {/* Inner Submenu Container */}
            <div className="flex flex-col gap-1 pb-6 pt-2 pl-6 ml-1 border-l border-white/10 relative">
                
                {/* Active Line Overlay */}
                <div className="absolute left-[-1px] top-2 bottom-6 w-[2px] bg-gradient-to-b from-[#F5D061]/0 via-[#F5D061]/20 to-[#F5D061]/0" />

                {item.submenu.map((subItem, index) => {
                    const isSubActive = isMounted && path === subItem.href;
                    
                    return (
                        <Link
                            key={index}
                            href={subItem.href}
                            onClick={closeMenu}
                            className={`group relative flex items-center px-4 py-3 text-[10px] tracking-widest font-mono uppercase transition-all duration-300 rounded-xl overflow-hidden ${
                                isSubActive
                                ? "text-[#F5D061] bg-white/[0.04] border border-white/[0.05]"
                                : "text-gray-500 hover:text-gray-300 border border-transparent"
                            }`}
                        >
                            {/* Hover Gradient Sweep */}
                            {isSubActive && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] animate-[shimmer_2s_infinite]" />
                            )}

                            <div className="relative z-10 flex items-center w-full">
                                {/* Target-Lock Arrow */}
                                <span className={`absolute left-0 transition-all duration-300 font-mono text-[#F5D061] ${
                                    isSubActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                                }`}>
                                    {'>'}
                                </span>
                                
                                {/* Text Shifts Right */}
                                <span className={`transition-transform duration-300 ${
                                    isSubActive ? "translate-x-4" : "translate-x-0"
                                }`}>
                                    {subItem.label}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Required for shimmer effect */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default MobileHeaderLink;