"use client";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Optimized scroll event with 'passive: true' for better performance
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scrolling when the mobile menu is open
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
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ease-in-out ${
        sticky
          ? "py-4 bg-darkmode/90 backdrop-blur-md shadow-lg border-b border-white/5" // Glassmorphism + subtle border
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between">
        
        {/* ✅ Logo (Z-index ensures it stays above the mobile backdrop) */}
        <Link href="/" aria-label="Home" className="z-50 relative focus:outline-none">
          <Logo />
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow items-center gap-8 justify-end">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        {/* ✅ Animated Hamburger Menu Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="block lg:hidden p-2 rounded-lg z-50 relative group focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={navbarOpen}
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            {/* Animates into an X when clicked */}
            <span className={`block h-0.5 bg-white transition-all duration-300 ease-in-out ${navbarOpen ? "w-6 rotate-45 translate-y-2" : "w-6 group-hover:w-5"}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ease-in-out ${navbarOpen ? "opacity-0" : "w-5 group-hover:w-6"}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ease-in-out ${navbarOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6 group-hover:w-4"}`}></span>
          </div>
        </button>
      </div>

      {/* ✅ Clickable Backdrop with Fade Animation */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          navbarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ✅ Mobile Menu Drawer (Smoother Slide Animation) */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-darkmode shadow-2xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-start p-6 mt-16 border-b border-white/10">
          <span className="text-sm font-semibold uppercase text-gray-400 tracking-widest">Navigation</span>
        </div>
        
        {/* ✅ Corrected Mobile Navigation Mapping */}
        <nav className="flex flex-col items-start px-6 py-4 gap-2 overflow-y-auto">
          {headerData.map((item, index) => (
            <MobileHeaderLink 
              key={index} 
              item={item} 
              closeMenu={closeMenu} // Passed directly so the child handles the logic
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;