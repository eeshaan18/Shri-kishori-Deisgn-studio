"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// Custom, crisp arrow for the CTA button
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Platform = () => {
  return (
    <section className="md:pt-44 sm:pt-24 pt-12 pb-12 relative z-10 bg-[#030406]">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative">
        
        {/* 🚀 UPGRADE: Tactical HUD Perimeter Brackets */}
        <div className="absolute top-0 left-4 sm:left-6 w-8 h-8 border-t-2 border-l-2 border-[#F5D061]/50 rounded-tl-3xl z-20 pointer-events-none" />
        <div className="absolute top-0 right-4 sm:right-6 w-8 h-8 border-t-2 border-r-2 border-[#F5D061]/50 rounded-tr-3xl z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-4 sm:left-6 w-8 h-8 border-b-2 border-l-2 border-[#99E39E]/50 rounded-bl-3xl z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-4 sm:right-6 w-8 h-8 border-b-2 border-r-2 border-[#99E39E]/50 rounded-br-3xl z-20 pointer-events-none" />

        {/* BACKGROUND UNTOUCHED: Kept your exact container classes, just added relative and overflow hidden for the laser */}
        <div className="bg-section bg-opacity-10 px-8 sm:px-10 lg:px-16 py-12 lg:py-16 rounded-[32px] md:rounded-[40px] border border-white/10 relative before:content-[''] before:absolute before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-11 overflow-hidden lg:before:right-48 before:-z-1 before:opacity-10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
          
          {/* 🚀 UPGRADE: Deep Space Glassmorphism & Noise */}
          <div className="absolute inset-0 bg-[#0A0C10]/80 backdrop-blur-3xl -z-10 texture-noise" />

          {/* 🚀 UPGRADE: Infinite Scanning Laser */}
          <motion.div
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F5D061]/30 to-transparent z-0 pointer-events-none"
          />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 relative z-10">
            
            {/* Left Content: Compact Typography & Tech-Forward Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-2/3 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              {/* Tactical Mini-Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#99E39E] animate-pulse shadow-[0_0_8px_#99E39E]" />
                <p className="text-gray-300 font-mono text-[10px] tracking-[0.2em] uppercase">
                  Initiate_Sequence
                </p>
              </div>

              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter mb-4 md:mb-6 max-w-2xl">
                Beyond Aesthetics. We Architect <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E] bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">Digital Growth.</span>
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
                From high-converting UI/UX to robust web and app development, we deliver the end-to-end technical firepower needed to scale your brand globally.
              </p>
            </motion.div>

            {/* Right Content: Compact Premium Interactive Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-1/3 flex justify-center lg:justify-end"
            >
              {/* 🚀 UPGRADE: Holographic Launch Button */}
              <div className="relative group">
                {/* Massive Glow that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5D061] to-[#99E39E] rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />
                
                <Link
                  href="#"
                  className="relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0A0C10] rounded-full text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-500 hover:bg-[#F5D061] hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10 font-mono">Start Your Project</span>
                  
                  {/* Animated Arrow */}
                  <span className="relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300">
                    <ArrowRight />
                  </span>

                  {/* Internal button shine effect */}
                  <div className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-out" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>

        {/* BACKGROUND UNTOUCHED: Your original absolute blur layer */}
        <div className="bg-gradient-to-br from-[#99E39E] to-[#0A0C10] sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-[150px] z-0 absolute sm:-left-48 opacity-20 pointer-events-none"></div>
      
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .texture-noise::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.05;
            z-index: 1;
            pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
        }
      `}} />
    </section>
  );
};

export default Platform;