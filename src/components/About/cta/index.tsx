"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 relative z-10 w-full bg-[#030406]">
      
      {/* --- Flawless Ambient Background Radial Glows --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[300px] sm:h-[400px] bg-[#F5D061] opacity-[0.03] sm:opacity-[0.04] blur-[100px] sm:blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[500px] h-[250px] sm:h-[300px] bg-[#99E39E] opacity-[0.02] sm:opacity-[0.03] blur-[100px] sm:blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-20">
        
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-gradient-to-b from-[#0A0C10]/95 to-[#030406]/95 backdrop-blur-3xl border border-white/5 rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-16 lg:p-20 overflow-hidden group shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_20px_60px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_30px_100px_rgba(0,0,0,0.9)] transition-all duration-700 texture-noise"
        >
          
          {/* --- The Kinetic Grid Substructure --- */}
          <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px] pointer-events-none animate-[pan_20s_linear_infinite]" />
          
          {/* Tactical Laser Scanline */}
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5D061]/30 to-transparent blur-[1px] animate-[scan_6s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Edge Glow Overlays */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#F5D061]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#99E39E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Micro-Telemetry Corners (Hidden on small mobile to avoid text overlap) */}
          <div className="hidden sm:flex absolute top-6 sm:top-8 left-6 sm:left-8 items-center gap-2 text-white/20 font-mono text-[9px] tracking-widest group-hover:text-white/40 transition-colors">
              <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-[#F5D061] transition-colors" /> SYS.01
          </div>
          <div className="hidden sm:block absolute top-6 sm:top-8 right-6 sm:right-8 text-white/20 font-mono text-[9px] tracking-widest group-hover:text-white/40 transition-colors">
              COORD // 8A
          </div>
          <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white/20 font-mono text-[9px] tracking-widest group-hover:text-white/40 transition-colors">
              LATENCY: 12ms
          </div>
          <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 right-6 sm:right-8 items-center gap-2 text-white/20 font-mono text-[9px] tracking-widest group-hover:text-white/40 transition-colors">
              UPLINK_STABLE <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-[#99E39E] transition-colors animate-pulse" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-20">
            
            {/* LEFT: The Narrative */}
            <div className="flex-1 w-full max-w-3xl text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 bg-white/5 mb-6 sm:mb-8 shadow-sm">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#F5D061] animate-pulse" />
                 <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-gray-300">System_Ready</span>
              </div>
              
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 sm:mb-6 leading-[1.1] max-w-2xl">
                Where Intent Becomes <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E] bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">Identity.</span>
              </h2>
              
              <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                At Shri Kishori Design Studio, every project begins with meaning, not just moodboards. We decode your brand’s core DNA and engineer it into high-performance digital architecture that resonates, dominates, and scales infinitely.
              </p>
            </div>

            {/* RIGHT: The Action Console */}
            <div className="flex-shrink-0 w-full lg:w-auto mt-4 lg:mt-0 flex flex-col items-center lg:items-end">
              <Link href="/contact" className="block w-full sm:w-auto">
                <div className="relative group/btn p-[2px] rounded-full overflow-hidden w-full sm:w-fit mx-auto lg:mx-0 shadow-[0_0_20px_rgba(245,208,97,0.05)] hover:shadow-[0_0_30px_rgba(245,208,97,0.2)] transition-shadow duration-500">
                  
                  {/* Rotating Gradient Border effect */}
                  <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] opacity-60 group-hover/btn:opacity-100 transition-opacity duration-500" 
                       style={{ background: 'conic-gradient(from 90deg at 50% 50%, #0A0C10 0%, #F5D061 50%, #0A0C10 100%)' }} />
                  
                  {/* Inner Button Core */}
                  <div className="relative flex items-center justify-center gap-4 sm:gap-5 bg-[#050608] px-6 sm:px-10 py-4 sm:py-5 rounded-full backdrop-blur-3xl transition-all duration-300 group-hover/btn:bg-[#0A0C10]">
                    <span className="font-mono text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-white uppercase font-bold group-hover/btn:tracking-[0.25em] sm:group-hover/btn:tracking-[0.3em] transition-all duration-300">
                        Initialize Build
                    </span>
                    
                    {/* Kinetic Arrow */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/btn:border-[#F5D061]/50 group-hover/btn:bg-[#F5D061]/10 group-hover/btn:shadow-[0_0_15px_rgba(245,208,97,0.4)] transition-all duration-300">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover/btn:text-[#F5D061] transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                  </div>

                </div>
              </Link>

              {/* Secure connection subtext */}
              <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <div className="relative flex items-center justify-center">
                    <span className="absolute inset-0 bg-[#99E39E] rounded-full blur-[4px] opacity-40 animate-pulse" />
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#99E39E] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-gray-400 uppercase">Encrypted Uplink</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Embedded High-End Premium CSS Details */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Architectural Noise Texture for Glass */
        .texture-noise::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.05;
            z-index: 1;
            pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        /* Grid Panning Animation */
        @keyframes pan {
            from { background-position: 0% 0%; }
            to { background-position: 100% 100%; }
        }

        /* Tactical Scanline Animation */
        @keyframes scan {
            0% { top: -10%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 110%; opacity: 0; }
        }
        
        /* Shimmer Animation */
        @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
        }
      `}} />
    </section>
  );
};

export default CTA;