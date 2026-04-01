"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- CUSTOM TACTICAL ICONS ---
const WebIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
);
const AppIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
);
const UIIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
);
const GraphicIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
);
const SEOIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
);
const MarketingIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055zM20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
);

const services = [
    { id: "SRV_01", hex: "0x8A2F", title: "Web Architecture", description: "High-performance, scalable web platforms engineered for speed, security, and seamless user experiences across all devices.", icon: <WebIcon />, color: "#F5D061", tags: ["REACT / NEXT.JS", "NODE.JS", "FULL-STACK", "API DESIGN"] },
    { id: "SRV_02", hex: "0x9C4B", title: "Mobile Ecosystems", description: "Native and cross-platform mobile applications that live in your users' pockets. Fluid motion, deep integrations, and flawless logic.", icon: <AppIcon />, color: "#99E39E", tags: ["REACT NATIVE", "IOS / ANDROID", "UX LOGIC"] },
    { id: "SRV_03", hex: "0x1E7D", title: "Immersive UI/UX", description: "Data-driven interface design that converts. We map user journeys and craft kinetic, interactive realities that feel physically satisfying.", icon: <UIIcon />, color: "#F5D061", tags: ["WIREFRAMING", "PROTOTYPING", "KINETIC MOTION"] },
    { id: "SRV_04", hex: "0x3F9A", title: "Brand Identity", description: "Visual languages that command authority. From pixel-perfect typography to comprehensive brand guidelines and stunning graphic assets.", icon: <GraphicIcon />, color: "#99E39E", tags: ["BRAND DNA", "TYPOGRAPHY", "VISUAL ASSETS"] },
    { id: "SRV_05", hex: "0x7B2C", title: "SEO Telemetry", description: "Algorithmic dominance. We optimize your digital architecture to capture high-intent search traffic and climb to the absolute top of the index.", icon: <SEOIcon />, color: "#F5D061", tags: ["TECHNICAL SEO", "CORE WEB VITALS", "INDEX RANKING"] },
    { id: "SRV_06", hex: "0x5D8E", title: "Digital Marketing", description: "Precision-targeted growth engines. We deploy data-backed campaigns designed to maximize ROI, capture market share, and scale aggressively.", icon: <MarketingIcon />, color: "#99E39E", tags: ["CONVERSION RATE", "CAMPAIGN LOGIC", "MARKET CAPTURE"] }
];

const ServicesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = services[activeIndex];

    return (
        <section className="pt-32 pb-24 relative w-full bg-[#030406] overflow-hidden min-h-screen" id="work">

            {/* --- Ambient Background Void & Grid Matrix --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_rgba(245,208,97,0.03),_transparent_60%)] pointer-events-none -z-10" />
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none -z-10 animate-[pan_30s_linear_infinite]" />

            <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-20">

                {/* --- Header --- */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 shadow-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#99E39E] animate-pulse relative z-10" />
                        <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase relative z-10">System Capabilities</p>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-white text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.05]">
                        Engineering <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E]">Digital Dominance.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Interact with the server stack to decrypt our specialized high-performance system logistics.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* --- LEFT: THE 3D KINETIC SERVER STACK --- */}
                    <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end pr-0 lg:pr-8 [perspective:1200px]">

                        {/* The Vertical Targeting Rail */}
                        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/5 hidden lg:block rounded-full">
                            <motion.div
                                className="absolute w-[4px] h-12 -left-[1px] rounded-full shadow-[0_0_15px_currentColor]"
                                style={{ backgroundColor: activeService.color, color: activeService.color }}
                                animate={{ top: `calc(${(activeIndex / (services.length - 1)) * 100}% - 24px)` }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            />
                        </div>

                        <div className="flex flex-col gap-3 w-full max-w-[450px] relative z-10 py-8">
                            {services.map((service, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div
                                        key={service.id}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onClick={() => setActiveIndex(index)}
                                        className="relative cursor-pointer w-full transition-all duration-500 [transform-style:preserve-3d]"
                                        style={{
                                            // The 3D Snap Effect
                                            transform: isActive ? 'rotateX(0deg) scale(1.02) translateZ(20px)' : 'rotateX(15deg) scale(0.95) translateZ(0px)',
                                            opacity: isActive ? 1 : 0.4,
                                            zIndex: isActive ? 20 : 10
                                        }}
                                    >
                                        <div className={`relative w-full p-4 sm:p-5 rounded-2xl flex items-center justify-between transition-all duration-500 overflow-hidden border
                                    ${isActive ? 'bg-[#0A0C10]/95 border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.6)]' : 'bg-white/5 border-white/5'}
                                `}>
                                            {/* Active Sweep Background */}
                                            <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 blur-2xl ${isActive ? 'opacity-20' : ''}`} style={{ backgroundColor: service.color }} />

                                            {/* Left Content: Icon + Title */}
                                            <div className="relative z-10 flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-white/10 text-white shadow-inner' : 'bg-transparent text-gray-500'}`} style={{ color: isActive ? service.color : '' }}>
                                                    {service.icon}
                                                </div>
                                                <h3 className={`font-semibold text-lg tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                                    {service.title}
                                                </h3>
                                            </div>

                                            {/* Right Content: ID Tag */}
                                            <div className="relative z-10 hidden sm:block">
                                                <span className={`font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    {service.id}
                                                </span>
                                            </div>

                                            {/* Active Left-Edge Mechanical Lighting */}
                                            <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${isActive ? 'opacity-100 shadow-[0_0_20px_currentColor]' : 'opacity-0'}`} style={{ backgroundColor: service.color, color: service.color }} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* --- RIGHT: THE ACTIVE PROTOCOL TERMINAL --- */}
                    <div className="lg:col-span-7 relative flex items-center group/terminal">

                        <div className="w-full relative bg-gradient-to-b from-[#0A0C10]/95 to-[#030406]/95 backdrop-blur-3xl border border-white/5 rounded-[40px] p-8 sm:p-10 lg:p-14 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_30px_100px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover/terminal:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_40px_120px_rgba(0,0,0,0.95)] group-hover/terminal:border-white/10 texture-noise">

                            <div
                                className="absolute inset-x-0 h-[1px] blur-[1px] animate-[scan_5s_linear_infinite] pointer-events-none"
                                style={{ backgroundImage: `linear-gradient(to right, transparent, ${activeService.color}33, transparent)` }}
                            />

                            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 transition-colors duration-500" style={{ borderBottomColor: `${activeService.color}15` }}>
                                <div className="flex items-center gap-3 opacity-60">
                                    <span className="relative flex items-center justify-center">
                                        <span className="absolute inset-0 bg-current rounded-full blur-[6px] opacity-40 animate-pulse" />
                                        <span className="relative w-2 h-2 rounded-full" style={{ backgroundColor: activeService.color, color: activeService.color }} />
                                    </span>
                                    <span className="font-mono text-[10px] tracking-[0.2em] text-gray-400 uppercase">Active_Protocol</span>
                                </div>
                                <span className="font-mono text-[10px] tracking-widest text-white/20 transition-colors duration-500 group-hover/terminal:text-white/40">{activeService.id}</span>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, x: 15, filter: "blur(12px) contrast(150%)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px) contrast(100%)" }}
                                    exit={{ opacity: 0, x: -15, filter: "blur(12px) contrast(150%)" }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    {/* Live Hex-Code Telemetry Readout */}
                                    <div className="flex items-center gap-2 mb-4 opacity-70">
                                        <svg className="w-3 h-3 transition-colors duration-500" style={{ color: activeService.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <span className="font-mono text-[9px] tracking-widest uppercase transition-colors duration-500" style={{ color: activeService.color }}>
                                            MEM_ALLOC // {activeService.hex}.{activeService.id.split('_')[1]}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight transition-all duration-500" style={{ backgroundImage: `linear-gradient(to right, ${activeService.color}, #ffffff)`, WebkitBackgroundClip: "text", color: "transparent", textShadow: `0 0 20px ${activeService.color}30` }}>
                                        {activeService.title}
                                    </h2>
                                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light mb-12 min-h-[90px]">
                                        {activeService.description}
                                    </p>

                                    <div>
                                        <div className="flex items-center gap-2 opacity-50 mb-4">
                                            <div className="w-8 h-px bg-white/20" />
                                            <p className="font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase">System Logistics</p>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {activeService.tags.map((tag, i) => (
                                                <motion.div
                                                    key={`${activeService.id}-${i}`}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 + (i * 0.05), duration: 0.4 }}
                                                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-[10px] tracking-widest text-gray-300 uppercase shadow-[inset_0_0_10px_rgba(255,255,255,0.02)] transition-all duration-300 cursor-default hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/20 hover:text-white"
                                                    style={{ boxShadow: `inset 0 0 10px rgba(255,255,255,0.02), 0 5px 15px ${activeService.color}00` }}
                                                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = `inset 0 0 10px rgba(255,255,255,0.05), 0 5px 15px ${activeService.color}20`}
                                                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = `inset 0 0 10px rgba(255,255,255,0.02), 0 5px 15px ${activeService.color}00`}
                                                >
                                                    {tag}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Corner Accent Brackets (Expanding on hover) */}
                            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/10 rounded-tl-xl transition-all duration-500 group-hover/terminal:w-12 group-hover/terminal:h-12 group-hover/terminal:border-white/30" style={{ borderColor: `${activeService.color}15` }} />
                            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/10 rounded-br-xl transition-all duration-500 group-hover/terminal:w-12 group-hover/terminal:h-12 group-hover/terminal:border-white/30" style={{ borderColor: `${activeService.color}15` }} />

                        </div>
                    </div>

                </div>
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
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes pan {
            from { background-position: 0% 0%; }
            to { background-position: 100% 100%; }
        }
      `}} />
        </section>
    );
};

export default ServicesSection;