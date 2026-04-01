"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// --- Minimalist, High-End Tech Icons ---
const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);


// --- Custom Animated Number Hook ---
interface AnimatedNumberProps {
  endValue: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber = ({ endValue, suffix = "", duration = 2.5 }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number; // Explicitly typed as a number
      const step = (timestamp: number) => { // Typed the timestamp parameter
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4); 
        setCount(Math.floor(easeProgress * endValue));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [inView, endValue, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};


const Work = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  const fadeUp = {
    initial: { y: 40, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  };

  const services = [
    { icon: <LayersIcon />, text: "Design That Stands Out" },
    { icon: <CpuIcon />, text: "Reliable & Detail-Oriented" },
    { icon: <ZapIcon />, text: "Cultural Elegance,\nModern Execution" },
  ];

  return (
    // 🚀 FIX 1: Restored bg-darkmode so it perfectly matches the section below it
    <section className="py-20 md:py-32 bg-darkmode relative overflow-hidden" id="work">
      
      {/* 🚀 FIX 2: Bumped noise opacity from 4% to 12% so it's clearly visible */}
      <div className="absolute inset-0 z-0 opacity-[0.12] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* 🚀 FIX 3: Cranked up the ambient glow opacity from /5 to /20 so the color pops */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         <motion.div 
           animate={{ x: [0, 80, -40, 0], y: [0, -60, 60, 0] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/4 -left-10 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#F5D061]/20 rounded-full blur-[100px] md:blur-[150px]" 
         />
         <motion.div 
           animate={{ x: [0, -80, 40, 0], y: [0, 60, -60, 0] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-1/4 -right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#99E39E]/20 rounded-full blur-[100px] md:blur-[150px]" 
         />
      </div>

      <div className="container mx-auto lg:max-w-screen-xl px-6 relative z-10">
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* --- LEFT SIDE --- */}
          <motion.div 
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
            className="col-span-1 lg:col-span-5 pr-0 lg:pr-4"
          >
            <motion.p variants={fadeUp} className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-[0.2em] mb-4">
              About <span className="text-[#F5D061]">Us</span>
            </motion.p>
            
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] tracking-tight font-extrabold text-white mb-10 md:mb-16">
              We Don’t Just Design.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E]">
                We Tell Stories.
              </span>
            </motion.h2>
            
            <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12">
              {services.map((service, index) => (
                <motion.div variants={fadeUp} key={index} className="relative group">
                  {/* Changed the dot background to match bg-darkmode */}
                  <div className="absolute -left-[30px] md:-left-[38px] top-1 w-4 h-4 rounded-full bg-darkmode border-[3px] border-white/20 group-hover:border-[#F5D061] transition-colors duration-500 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10" />
                  <div className="absolute -left-[25px] md:-left-[33px] top-4 w-[2px] h-full bg-gradient-to-b from-[#F5D061] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-gray-500 group-hover:text-[#F5D061] transition-colors duration-500 mt-0.5">
                      {service.icon}
                    </div>
                    <p className="text-base md:text-[18px] text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                      {service.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: RESPONSIVE ASYMMETRICAL BENTO GRID --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 lg:col-span-7 relative w-full"
          >
            {/* HUD Crosshairs (Hidden on very small screens to prevent overflow) */}
            <div className="hidden sm:block absolute -top-3 -left-3 text-white/20 z-20"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="1"/></svg></div>
            <div className="hidden sm:block absolute -top-3 -right-3 text-white/20 z-20"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="1"/></svg></div>
            <div className="hidden sm:block absolute -bottom-3 -left-3 text-white/20 z-20"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="1"/></svg></div>
            <div className="hidden sm:block absolute -bottom-3 -right-3 text-white/20 z-20"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="1"/></svg></div>

            {/* Main Glass Container */}
            <div className="relative p-2 md:p-3 rounded-[24px] md:rounded-[32px] bg-gradient-to-b from-white/10 to-transparent shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-0 bg-[#0A0C10]/90 backdrop-blur-3xl rounded-[24px] md:rounded-[32px] -z-10" />
              
              <div className="px-4 md:px-6 py-3 md:py-4 flex items-center justify-between mb-2">
                <h3 className="text-xs md:text-sm font-mono text-gray-400 tracking-[0.1em] uppercase">System_Metrics</h3>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#99E39E] animate-pulse shadow-[0_0_8px_#99E39E]" />
                </div>
              </div>

              {/* 🚀 UPGRADE 3: Fully Responsive Grid Columns & Padding */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                
                {/* Card 1: Premium Projects */}
                <div className="relative p-6 md:p-8 rounded-[16px] md:rounded-[24px] bg-[#12141C] border border-white/5 group hover:border-[#F5D061]/30 transition-colors overflow-hidden flex flex-col justify-between min-h-[160px] md:min-h-[220px]">
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10">
                    <p className="text-gray-400 text-xs md:text-sm font-medium mb-1 md:mb-2 uppercase tracking-wide">Premium Projects</p>
                    <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                      <AnimatedNumber endValue={15} suffix="+" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F5D061] group-hover:w-full transition-all duration-700 ease-out" />
                </div>

                {/* Card 2: Designs Created */}
                <div className="relative p-6 md:p-8 rounded-[16px] md:rounded-[24px] bg-[#12141C] border border-white/5 group hover:border-[#99E39E]/30 transition-colors overflow-hidden flex flex-col justify-between min-h-[160px] md:min-h-[220px]">
                  <div className="relative z-10">
                    <p className="text-gray-400 text-xs md:text-sm font-medium mb-1 md:mb-2 uppercase tracking-wide">Designs Created</p>
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-tighter">
                      <AnimatedNumber endValue={50} suffix="+" />
                    </div>
                  </div>
                  {/* Scaled down sparkline for mobile */}
                  <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-24 h-12 md:w-32 md:h-16 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                      <motion.polyline 
                        points="0,50 20,30 40,40 60,15 80,25 100,0" 
                        fill="none" 
                        stroke="#99E39E" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                      />
                      <path d="M0,50 L20,30 L40,40 L60,15 L80,25 L100,0 L100,50 L0,50 Z" fill="url(#sparkline-gradient)" opacity="0.2" />
                      <defs>
                        <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#99E39E" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Card 3: Happy Clients */}
                <div className="relative p-6 md:p-8 rounded-[16px] md:rounded-[24px] bg-[#12141C] border border-white/5 group hover:border-white/30 transition-colors overflow-hidden flex flex-col justify-between min-h-[160px] md:min-h-[220px]">
                  <div className="relative z-10">
                    <p className="text-gray-400 text-xs md:text-sm font-medium mb-1 md:mb-2 uppercase tracking-wide">Happy Clients</p>
                    <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                      <AnimatedNumber endValue={10} suffix="+" />
                    </div>
                  </div>
                  {/* Radar adjusted for mobile padding */}
                  <div className="absolute bottom-6 right-8 md:bottom-8 md:right-12 flex items-center justify-center">
                    <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 animate-ping opacity-50" style={{ animationDuration: '3s' }} />
                    <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/20 animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white shadow-[0_0_10px_#fff]" />
                  </div>
                </div>

                {/* Card 4: Singular Vision */}
                <div className="relative p-6 md:p-8 rounded-[16px] md:rounded-[24px] bg-gradient-to-br from-[#F5D061] to-[#E6B800] group hover:shadow-[0_15px_40px_rgba(245,208,97,0.3)] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[160px] md:min-h-[220px]">
                  <div className="relative z-10">
                    <p className="text-[#03050A]/70 text-xs md:text-sm font-bold mb-1 md:mb-2 uppercase tracking-wide">Singular Vision</p>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#03050A] tracking-tight leading-none mt-1 md:mt-2">
                      Design That<br />Inspires.
                    </div>
                  </div>
                  {/* Watermark scaled down on mobile to prevent clipping issues */}
                  <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-4 text-[100px] md:text-[180px] font-black leading-none text-[#03050A]/10 select-none group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700">
                    1
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Work;