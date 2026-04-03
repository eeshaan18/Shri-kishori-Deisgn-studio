"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

// --- KINETIC BACKGROUND COMPONENTS ---

const LightspeedBackground = ({ color }: { color: string }) => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.15] pointer-events-none mix-blend-screen [transform:translateZ(-10px)]">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-[2px] w-1/2 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          top: `${15 + i * 15}%`,
          left: '-50%',
          boxShadow: `0 0 15px ${color}`
        }}
        animate={{ left: ['-50%', '150%'] }}
        transition={{ duration: 1 + Math.random() * 1.5, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
      />
    ))}
  </div>
);

const IsometricGridBackground = ({ color }: { color: string }) => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.08] pointer-events-none flex items-center justify-center mix-blend-screen [transform:translateZ(-20px)]">
    <motion.div 
      animate={{ rotateX: 60, rotateZ: [0, 360] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="w-[250%] h-[250%]"
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        transformOrigin: 'center center'
      }}
    />
  </div>
);

const TacticalCrosshairBackground = ({ color }: { color: string }) => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.1] pointer-events-none mix-blend-screen [transform:translateZ(-15px)]">
    <motion.div 
      animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed rounded-full"
      style={{ borderColor: color }}
    >
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current opacity-50" style={{ color }} />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-current opacity-50" style={{ color }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-current rounded-full" style={{ color }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-current rounded-full" style={{ color }} />
    </motion.div>
  </div>
);

const PulseRingBackground = ({ color }: { color: string }) => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.15] pointer-events-none flex items-center justify-center mix-blend-screen [transform:translateZ(-10px)]">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-current"
        style={{ color: color }}
        initial={{ width: 0, height: 0, opacity: 1 }}
        animate={{ width: "500px", height: "500px", opacity: 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: i * 1 }}
      />
    ))}
  </div>
);

// --- MAIN DATA ---

const differentials = [
  {
    id: "ADV_01",
    title: "Zero-Latency Performance",
    description: "Every line of code is optimized for micro-second load times and absolute Core Web Vitals dominance.",
    tag: "SPEED_OPT",
    color: "#F5D061", // Gold
    colSpan: "lg:col-span-8", 
    bgAnim: LightspeedBackground,
  },
  {
    id: "ADV_02",
    title: "Bespoke Architecture",
    description: "Custom data structures and logical flows engineered to perfectly match your specific operational scale.",
    tag: "SYS_CUSTOM",
    color: "#99E39E", // Green
    colSpan: "lg:col-span-4", 
    bgAnim: IsometricGridBackground,
  },
  {
    id: "ADV_03",
    title: "Pixel-Perfect Precision",
    description: "We translate high-end UI/UX into code with mathematical precision, ensuring flawless live execution.",
    tag: "UI_CALIBRATED",
    color: "#F5D061", // Gold
    colSpan: "lg:col-span-5", 
    bgAnim: TacticalCrosshairBackground,
  },
  {
    id: "ADV_04",
    title: "Infinite Scalability",
    description: "System architectures designed to handle exponential traffic growth without requiring complete rebuilds.",
    tag: "SCALE_INF",
    color: "#99E39E", // Green
    colSpan: "lg:col-span-7", 
    bgAnim: PulseRingBackground,
  }
];

// --- MIND-BLOWING 3D BENTO CARD COMPONENT ---

const BentoCard = ({ data, index }: { data: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Advanced 3D Tilt Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    setMousePosition({ x: mouseX, y: mouseY });
    
    // Calculate tilt coordinates (-0.5 to 0.5)
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const BackgroundComponent = data.bgAnim;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`${data.colSpan} relative group [perspective:1200px] h-full`}
    >
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full min-h-[320px] w-full bg-[#0A0C10]/80 backdrop-blur-2xl rounded-[32px] border border-white/5 overflow-hidden transition-colors duration-500 ease-out hover:border-white/20 texture-noise"
      >
        
        {/* Tactical HUD Corner Brackets (Snaps in on hover) */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg opacity-0 -translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 z-30" style={{ borderColor: data.color }} />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg opacity-0 translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 z-30" style={{ borderColor: data.color }} />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 rounded-bl-lg opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 z-30" style={{ borderColor: data.color }} />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 rounded-br-lg opacity-0 translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 z-30" style={{ borderColor: data.color }} />

        {/* Dynamic Physical Glare / Spotlight */}
        <div 
          className="absolute inset-0 z-20 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`,
            transform: "translateZ(30px)"
          }}
        />

        {/* Live Internal Animation Background */}
        <BackgroundComponent color={data.color} />

        {/* Card Content Container (Pushed forward in 3D Space) */}
        <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full justify-between [transform:translateZ(40px)]">
            
            {/* Top Section */}
            <div className="flex items-center justify-between mb-12">
                <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-2" style={{ color: isHovered ? data.color : '#9ca3af' }}>
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isHovered ? 'animate-pulse' : ''}`} style={{ backgroundColor: isHovered ? data.color : '#4b5563' }} />
                        {data.tag}
                    </span>
                </div>
                <span className="font-mono text-white/20 text-[10px] tracking-widest">{data.id}</span>
            </div>

            {/* Bottom Section */}
            <div className="relative z-10">
                <h3 
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight transition-all duration-500 bg-clip-text" 
                    style={{ 
                        backgroundImage: isHovered ? `linear-gradient(to right, ${data.color}, #ffffff)` : 'linear-gradient(to right, #ffffff, #ffffff)',
                        color: isHovered ? 'transparent' : 'white',
                        textShadow: isHovered ? `0 0 40px ${data.color}40` : 'none'
                    }}
                >
                    {data.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light max-w-[90%] transition-colors duration-500 group-hover:text-gray-300">
                    {data.description}
                </p>
            </div>
            
        </div>
      </motion.div>
    </motion.div>
  );
};


// --- MAIN SECTION COMPONENT ---

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative w-full bg-[#030406] overflow-hidden">
      
      {/* Ambient Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_top,_rgba(245,208,97,0.04),_transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,_rgba(153,227,158,0.03),_transparent_70%)] pointer-events-none -z-10" />

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-20">
        
        {/* --- Header --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm">
               <span className="w-1.5 h-1.5 rounded-full bg-[#F5D061] animate-pulse" />
               <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase">System_Differentials</p>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              The Architecture of <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E]">Absolute Advantage.</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-400 text-lg font-light max-w-md lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-[#F5D061] pl-6 lg:pl-0 lg:pr-6 py-2">
            We don't build websites; we engineer high-performance digital assets designed to dominate markets and scale infinitely.
          </motion.p>
        </div>

        {/* --- THE KINETIC BENTO MATRIX --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {differentials.map((item, index) => (
            <BentoCard key={item.id} data={item} index={index} />
          ))}
        </div>

      </div>

      {/* Embedded Custom CSS */}
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
      `}} />
    </section>
  );
};

export default WhyChooseUs;