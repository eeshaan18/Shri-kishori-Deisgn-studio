"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const path = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Prevent hydration mismatch for usePathname
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Add a slight delay before closing to prevent accidental closures when moving the mouse
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (item.submenu) setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSubmenuOpen(false);
    }, 150); // 150ms buffer
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
        className={`relative flex items-center gap-1 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
          isActive ? "text-primary" : "text-gray-300 hover:text-white"
        }`}
        aria-haspopup={!!item.submenu}
        aria-expanded={submenuOpen}
      >
        {item.label}
        
        {/* Animated Chevron */}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              submenuOpen ? "-rotate-180 text-primary" : "rotate-0 text-gray-400"
            }`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}

        {/* Animated Underline (Magnetic Effect) */}
        <span 
          className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ease-out ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>

      {/* Dropdown Menu */}
      {item.submenu && (
        <div
          className={`absolute left-0 top-full pt-4 w-56 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top-left ${
            submenuOpen 
              ? "opacity-100 translate-y-0 pointer-events-auto scale-100" 
              : "opacity-0 translate-y-2 pointer-events-none scale-95"
          }`}
        >
          <div className="bg-darkmode/95 backdrop-blur-lg border border-white/10 shadow-2xl rounded-xl overflow-hidden p-2">
            {item.submenu.map((subItem, index) => {
              const isSubActive = isMounted && path === subItem.href;
              return (
                <Link
                  key={index}
                  href={subItem.href}
                  className={`group relative flex items-center px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isSubActive
                      ? "text-primary bg-primary/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">
                    {subItem.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderLink;