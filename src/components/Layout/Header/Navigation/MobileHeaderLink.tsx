"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      e.preventDefault(); // Prevent navigation if it's just a dropdown trigger
      setSubmenuOpen(!submenuOpen);
    } else if (closeMenu) {
      closeMenu(); // Close the whole mobile menu if it's a direct link
    }
  };

  const isActive = isMounted && (path === item.href || item.submenu?.some((sub) => path === sub.href));

  return (
    <div className="relative w-full border-b border-white/5 last:border-none">
      <Link
        href={item.submenu ? "#" : item.href}
        onClick={handleToggle}
        className={`flex items-center justify-between w-full py-4 text-lg font-medium tracking-wide uppercase transition-colors duration-300 focus:outline-none ${
          isActive ? "text-primary" : "text-gray-300 hover:text-white"
        }`}
        aria-expanded={submenuOpen}
      >
        <span>{item.label}</span>
        
        {/* Animated Chevron */}
        {item.submenu && (
          <span className={`p-1 bg-white/5 rounded-md transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            submenuOpen ? "-rotate-180 bg-primary/20 text-primary" : "rotate-0 text-gray-400"
          }`}>
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
                strokeWidth="2"
                d="m7 10l5 5l5-5"
              />
            </svg>
          </span>
        )}
      </Link>

      {/* Smooth Accordion Submenu */}
      {item.submenu && (
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            submenuOpen ? "grid-rows-[1fr] opacity-100 mb-4" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden flex flex-col gap-1 pl-4 border-l-2 border-white/10 ml-2">
            {item.submenu.map((subItem, index) => {
              const isSubActive = isMounted && path === subItem.href;
              return (
                <Link
                  key={index}
                  href={subItem.href}
                  onClick={closeMenu}
                  className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isSubActive
                      ? "text-primary bg-primary/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {subItem.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;