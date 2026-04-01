"use client";
import { motion } from "framer-motion";

// --- CUSTOM INLINE TACTICAL ICONS ---
// (No changes here, these are still bestest for the nodes)
const CultureIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const DetailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const EmotionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l-4 4-2-2" />
  </svg>
);

const TimelessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ethosData = [
  { id: "01", title: "Culture-First Thinking", icon: <CultureIcon />, color: "#F5D061" },
  { id: "02", title: "Detail-Driven Craft", icon: <DetailIcon />, color: "#99E39E" },
  { id: "03", title: "Emotion-Led Interfaces", icon: <EmotionIcon />, color: "#F5D061" },
  { id: "04", title: "Timeless Visual Language", icon: <TimelessIcon />, color: "#99E39E" },
];

const Story = () => {
  return (
    <section className="py-24 md:py-32 relative z-10 w-full bg-[#030406] overflow-hidden" id="work">
      
      {/* --- Ambient Background Void --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_rgba(245,208,97,0.03),_transparent_60%)] pointer-events-none" />
      
      {/* --- FIX 2: "ORIGIN" watermark completely removed here --- */}

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* --- LEFT: The Narrative --- */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative z-20"
          >
            {/* Tactical Origin Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 shadow-sm">
               <span className="w-1.5 h-1.5 rounded-full bg-[#F5D061] animate-pulse" />
               <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase">
                  System_Origin // Story & Vision
               </p>
            </div>

            {/* --- FIX 1: Font sizes significantly reduced (from 4xl/5xl/6xl) for max-2 line look --- */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-8">
              Blending Roots with the <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E]">Rhythm of the Future.</span>
            </h1>
            
            {/* --- NOURISHMENT: Body text slightly rephrased for authority --- */}
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
              At Shri Kishori Design Studio, tradition isn't static — it is the absolute foundation of our innovation. We design with soul, fusing sacred cultural motifs with high-performance digital grids.
            </p>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10">
              The result is compelling digital architecture that reflects perfect balance, deep beauty, and bold, forward-thinking execution.
            </p>

            <div className="flex items-center gap-4 border-l-2 border-[#F5D061] pl-6">
                {/* --- NOURISHMENT: Footer line slightly rephrased for authority --- */}
                <p className="font-mono text-sm tracking-[0.1em] text-white uppercase font-bold leading-tight">
                    Every pixel engineered with precision. <br/> Every pattern made to matter profoundly.
                </p>
            </div>
          </motion.div>

          {/* --- RIGHT: The Live Orbital Ethos Engine --- */}
          <div className="lg:col-span-6 relative h-[600px] flex items-center justify-center">
            
            {/* The Concentric Background Rings */}
            {/* --- FIX 3: Opacity increased from 40% (opacity-40) to 100% (opacity-100) --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 mix-blend-screen">
                {/* Outer Ring */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute w-[500px] h-[500px] border border-white/10 rounded-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#F5D061] rounded-full shadow-[0_0_15px_#F5D061]" />
                </motion.div>
                {/* Middle Dashed Ring */}
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[400px] h-[400px] border border-white/10 border-dashed rounded-full">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#99E39E] rounded-full shadow-[0_0_10px_#99E39E]" />
                </motion.div>
                {/* Inner Ring */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-[300px] h-[300px] border border-white/5 rounded-full" />
            </div>

            {/* The Interactive Glass Terminal (No changes, User loved this design) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-[420px] bg-[#0A0C10]/60 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] texture-noise"
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                    <h3 className="text-white text-xl font-bold tracking-tight">Our Design Ethos</h3>
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F5D061] animate-pulse" />
                    </div>
                </div>

                {/* Ethos Interactive List */}
                <div className="flex flex-col gap-3">
                    {ethosData.map((item, index) => (
                        <div 
                            key={index}
                            className="group relative flex items-center gap-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden"
                        >
                            {/* Hover Scan Sweep */}
                            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

                            {/* Icon Container */}
                            <div 
                                className="relative w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center shrink-0 transition-colors duration-300 z-10"
                                style={{ backgroundColor: `${item.color}10` }}
                            >
                                {/* Glow behind icon on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300" style={{ backgroundColor: item.color }} />
                                
                                <div className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Text Container */}
                            <div className="flex-1 relative z-10">
                                <span className="block font-mono text-[9px] text-gray-600 mb-1 group-hover:text-gray-400 transition-colors">NODE_{item.id}</span>
                                <h4 className="text-white text-sm md:text-base font-semibold tracking-tight transition-colors duration-300" 
                                    style={{ color: "white" }}>
                                    {item.title}
                                    
                                </h4>
                            </div>

                            {/* Right Arrow indicator */}
                            <div className="relative z-10 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ backgroundColor: `${item.color}20`, borderColor: `${item.color}50` }}>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        /* Architectural Noise Texture for Glass */
        .texture-noise::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.04;
            z-index: 1;
            pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}} />
    </section>
  );
};

export default Story;