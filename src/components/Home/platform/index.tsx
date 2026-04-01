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
    <section className="md:pt-44 sm:pt-24 pt-12 relative z-10">
      <div className="container mx-auto lg:max-w-screen-xl px-6">
        
        {/* BACKGROUND UNTOUCHED: Kept your exact container classes */}
        <div className="bg-section bg-opacity-10 px-8 lg:px-16 py-10 lg:py-12 rounded-[32px] md:rounded-[40px] border-2 border-opacity-20 border-section relative before:content-[''] before:absolute before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-11 overflow-hidden lg:before:right-48 before:-z-1 before:opacity-10">
          
          {/* Internal structure with smaller gap for better compactness */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Left Content: Compact Typography & Tech-Forward Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-2/3 text-center lg:text-left"
            >
              {/* 🚀 UPGRADE: Reduced font size to fit on two lines, tighter leading and tracking */}
              <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tighter mb-4">
                Beyond Aesthetics. We Architect <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E]">Digital Growth.</span>
              </h2>
              {/* 🚀 UPGRADE: Reduced body copy size slightly and removed explicit break */}
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                From high-converting UI/UX to robust web and app development, we deliver the end-to-end technical firepower needed to scale your brand.
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
              {/* 🚀 UPGRADE: Scaled-down button with matching text and padding, keeping its signature style */}
              <Link
                href="#"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 md:px-8 md:py-3.5 bg-[#F5D061] text-[#03050A] rounded-full text-base md:text-lg font-bold transition-all duration-500 hover:bg-[#99E39E] hover:shadow-[0_10px_40px_rgba(153,227,158,0.4)] hover:-translate-y-1 overflow-hidden"
              >
                {/* Button text */}
                <span className="relative z-10">Start Your Project</span>
                
                {/* Animated Arrow */}
                <span className="relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300">
                  <ArrowRight />
                </span>

                {/* Internal button shine effect */}
                <div className="absolute top-0 left-[-100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-out" />
              </Link>
            </motion.div>

          </div>
        </div>

        {/* BACKGROUND UNTOUCHED: Your original absolute blur layer */}
        <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
      
      </div>
    </section>
  );
};

export default Platform;