"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- CYPHER TEXT DECRYPTION HOOK ---
const useCypher = (text: string, isActive: boolean, speed = 30) => {
    const [displayText, setDisplayText] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>";

    useEffect(() => {
        if (!isActive) {
            setDisplayText(text); 
            return;
        }
        setDisplayText("");
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(text.split("").map((letter, index) => {
                if (index < iteration) return text[index];
                return chars[Math.floor(Math.random() * chars.length)];
            }).join(""));

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, speed);

        return () => clearInterval(interval);
    }, [text, isActive, speed]);

    return displayText;
};

// --- CUSTOM ANIMATED SCHEMATICS ---
const WebSchematic = ({ color }: { color: string }) => (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen" fill="none">
        <motion.path stroke={color} strokeWidth="1" strokeDasharray="4 4" d="M20,100 Q60,20 100,100 T180,100" animate={{ strokeDashoffset: [0, -100] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
        <motion.path stroke={color} strokeWidth="1" strokeDasharray="4 4" d="M20,100 Q60,180 100,100 T180,100" animate={{ strokeDashoffset: [0, 100] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
        <circle cx="100" cy="100" r="40" stroke={color} strokeWidth="0.5" />
        <circle cx="100" cy="100" r="4" fill={color} className="animate-pulse" />
    </svg>
);

const MobileSchematic = ({ color }: { color: string }) => (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen" fill="none">
        <motion.rect x="70" y="40" width="60" height="120" rx="10" stroke={color} strokeWidth="1.5" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
        <motion.rect x="50" y="60" width="60" height="120" rx="10" stroke={color} strokeWidth="0.5" opacity="0.5" animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.rect x="90" y="20" width="60" height="120" rx="10" stroke={color} strokeWidth="0.5" opacity="0.5" animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
    </svg>
);

const UISchematic = ({ color }: { color: string }) => (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen" fill="none">
        <path stroke={color} strokeWidth="0.5" d="M0,50 H200 M0,100 H200 M0,150 H200 M50,0 V200 M100,0 V200 M150,0 V200" opacity="0.3" />
        <motion.rect x="50" y="50" width="50" height="50" fill={color} opacity="0.2" animate={{ opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.rect x="100" y="100" width="50" height="50" fill={color} opacity="0.2" animate={{ opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
    </svg>
);

const BrandSchematic = ({ color }: { color: string }) => (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen" fill="none">
        <motion.polygon points="100,20 180,150 20,150" stroke={color} strokeWidth="1" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }} />
        <motion.polygon points="100,180 20,50 180,50" stroke={color} strokeWidth="0.5" opacity="0.5" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center' }} />
    </svg>
);

const SEOSchematic = ({ color }: { color: string }) => (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen" fill="none">
        <motion.path stroke={color} strokeWidth="1.5" d="M20,150 L60,100 L100,120 L180,40" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        <circle cx="180" cy="40" r="5" fill={color} className="animate-pulse" />
        <path stroke={color} strokeWidth="0.5" strokeDasharray="2 4" d="M20,180 H180 M20,20 V180" opacity="0.5" />
    </svg>
);

const MarketingSchematic = ({ color }: { color: string }) => (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen" fill="none">
        <circle cx="100" cy="100" r="80" stroke={color} strokeWidth="0.5" opacity="0.3" />
        <circle cx="100" cy="100" r="40" stroke={color} strokeWidth="0.5" opacity="0.5" />
        <motion.path stroke={color} strokeWidth="2" d="M100,100 L100,20" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: '100px 100px' }} />
    </svg>
);

// --- DATASET ---
const services = [
    { id: "01", title: "Web Architecture", description: "High-performance, scalable web platforms engineered for speed, security, and seamless user experiences across all devices. We build digital assets that dominate metrics.", color: "#F5D061", tags: ["REACT / NEXT.JS", "NODE.JS", "FULL-STACK"], schematic: WebSchematic, hex: "0x8A2F" },
    { id: "02", title: "Mobile Ecosystems", description: "Native and cross-platform mobile applications that live in your users' pockets. Fluid motion, deep integrations, and flawless logic designed for absolute retention.", color: "#99E39E", tags: ["REACT NATIVE", "IOS / ANDROID", "UX LOGIC"], schematic: MobileSchematic, hex: "0x9C4B" },
    { id: "03", title: "Immersive UI/UX", description: "Data-driven interface design that converts. We map user journeys and craft kinetic, interactive realities that feel physically satisfying to navigate.", color: "#F5D061", tags: ["WIREFRAMING", "PROTOTYPING", "MOTION"], schematic: UISchematic, hex: "0x1E7D" },
    { id: "04", title: "Brand Identity", description: "Visual languages that command authority. From pixel-perfect typography to comprehensive brand guidelines and stunning graphic assets that define markets.", color: "#99E39E", tags: ["BRAND DNA", "TYPOGRAPHY", "ASSETS"], schematic: BrandSchematic, hex: "0x3F9A" },
    { id: "05", title: "SEO Telemetry", description: "Algorithmic dominance. We optimize your digital architecture to capture high-intent search traffic and climb to the absolute top of the index globally.", color: "#F5D061", tags: ["TECHNICAL SEO", "WEB VITALS", "RANKING"], schematic: SEOSchematic, hex: "0x7B2C" },
    { id: "06", title: "Digital Marketing", description: "Precision-targeted growth engines. We deploy data-backed campaigns designed to maximize ROI, capture massive market share, and scale aggressively.", color: "#99E39E", tags: ["CONVERSION", "CAMPAIGNS", "ROI"], schematic: MarketingSchematic, hex: "0x5D8E" }
];

// --- STAGGER ANIMATIONS ---
const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

// --- MAIN COMPONENT ---
const ServicesSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="pt-24 lg:pt-32 pb-24 lg:pb-32 relative w-full bg-[#030406] min-h-screen" id="work">
            
            {/* Dynamic Background Ambient Glow */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[800px] pointer-events-none -z-10 transition-colors duration-1000"
                style={{ background: `radial-gradient(ellipse at center, ${activeIndex !== null ? services[activeIndex].color : '#ffffff'}15, transparent 70%)` }} 
            />
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-screen-2xl relative z-20">
                
                {/* Header */}
                <div className="flex flex-col items-start mb-16 lg:mb-24">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5D061] animate-pulse" />
                        <p className="text-gray-400 font-mono text-[10px] tracking-[0.3em] uppercase">System Capabilities</p>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-white text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[1] max-w-4xl">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E]">Digital Dominance.</span>
                    </motion.h1>
                </div>

                {/* THE BRUTALIST TYPOGRAPHY ACCORDION */}
                <motion.div layout className="w-full border-t border-white/20">
                    {services.map((service, index) => {
                        const isActive = activeIndex === index;
                        const ActiveSchematic = service.schematic;

                        return (
                            <motion.div layout key={service.id} className="w-full overflow-hidden group">
                                
                                {/* TOP ROW: CLICKABLE HEADER */}
                                <button 
                                    onClick={() => setActiveIndex(isActive ? null : index)}
                                    className="w-full py-8 lg:py-12 flex items-center justify-between outline-none text-left border-b border-white/20 transition-colors duration-500"
                                    style={{ borderBottomColor: isActive ? `${service.color}40` : 'rgba(255,255,255,0.2)' }}
                                >
                                    <div className="flex items-start lg:items-center gap-4 lg:gap-12 w-full pr-4">
                                        <span className={`font-mono text-sm lg:text-xl tracking-widest mt-2 lg:mt-0 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                                            {service.id}
                                        </span>
                                        
                                        {/* BUG FIXED: Liquid Typography logic replaced with strict CSS properties 
                                            Inactive: Hollow outline, transparent fill.
                                            Hover: Solid white fill.
                                            Active: Shimmering liquid gradient clip.
                                        */}
                                        <h2 
                                            className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter transition-all duration-700 leading-none break-words
                                                ${isActive 
                                                    ? 'text-transparent bg-clip-text bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]' 
                                                    : 'text-transparent group-hover:text-white group-hover:![text-shadow:0_0_20px_rgba(255,255,255,0.5)]'
                                                }
                                            `}
                                            style={{
                                                WebkitTextStroke: isActive ? '0px transparent' : '1px rgba(255,255,255,0.4)',
                                                backgroundImage: isActive 
                                                    ? `linear-gradient(90deg, ${service.color}, #ffffff, ${service.color})` 
                                                    : 'none',
                                            }}
                                        >
                                            {service.title}
                                        </h2>
                                    </div>

                                    {/* Mechanical Targeting Reticle */}
                                    <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-full border items-center justify-center transition-all duration-700 relative overflow-hidden bg-[#0A0C10]" style={{ borderColor: isActive ? service.color : 'rgba(255,255,255,0.2)' }}>
                                        <motion.div 
                                            className="absolute inset-0 border-2 border-dashed rounded-full"
                                            style={{ borderColor: isActive ? `${service.color}40` : 'transparent' }}
                                            animate={{ rotate: isActive ? 360 : 0 }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        />
                                        <div className="relative z-10 w-4 h-4 flex items-center justify-center">
                                            <motion.span 
                                                className="absolute w-full h-[2px] rounded-full transition-colors duration-500"
                                                style={{ backgroundColor: isActive ? service.color : 'white' }}
                                                animate={{ rotate: isActive ? 45 : 0 }}
                                            />
                                            <motion.span 
                                                className="absolute w-full h-[2px] rounded-full transition-colors duration-500"
                                                style={{ backgroundColor: isActive ? service.color : 'white' }}
                                                animate={{ rotate: isActive ? -45 : 90 }}
                                            />
                                        </div>
                                    </div>
                                </button>

                                {/* BOTTOM EXPANSION: THE DATA CORE */}
                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                            className="w-full overflow-hidden"
                                        >
                                            <div className="w-full mt-8 mb-12 lg:mb-16 rounded-[32px] bg-[#0A0C10]/80 backdrop-blur-xl border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col lg:flex-row relative" style={{ borderColor: `${service.color}30` }}>
                                                
                                                {/* Left: Content & Tags (Staggered Boot Sequence) */}
                                                <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-16 flex flex-col justify-between relative z-10">
                                                    <div>
                                                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                                                            <span className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_currentColor]" style={{ backgroundColor: service.color, color: service.color }} />
                                                            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                                                                Decrypted_Logistics // <DecryptedText text={service.hex} isActive={isActive} speed={10} />
                                                            </span>
                                                        </motion.div>
                                                        <motion.p variants={itemVariants} className="text-gray-300 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-10 max-w-lg">
                                                            <DecryptedText text={service.description} isActive={isActive} speed={10} />
                                                        </motion.p>
                                                    </div>

                                                    <motion.div variants={itemVariants}>
                                                        <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">Core Technologies</p>
                                                        <div className="flex flex-wrap gap-3">
                                                            {service.tags.map((tag, i) => (
                                                                <span 
                                                                    key={i}
                                                                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-[10px] sm:text-xs tracking-widest text-white uppercase shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-300 hover:bg-white/[0.08] hover:border-white/30"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                </motion.div>

                                                {/* Right: Immersive Schematic */}
                                                <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[400px] relative bg-[#030406] overflow-hidden flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/5">
                                                    <div className="absolute inset-0 opacity-40 mix-blend-screen" style={{ background: `radial-gradient(circle at center, ${service.color}40, transparent 70%)` }} />
                                                    
                                                    {/* Hardware Scanning Laser */}
                                                    <motion.div 
                                                        className="absolute top-0 left-0 w-full h-[2px] blur-[1px] z-20"
                                                        style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                                                        animate={{ top: ['0%', '100%', '0%'] }}
                                                        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                                                    />

                                                    <ActiveSchematic color={service.color} />
                                                    
                                                    {/* Tactical Watermark */}
                                                    <span className="absolute bottom-6 right-6 font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase border border-white/10 px-3 py-1 rounded bg-black/40 backdrop-blur-md">
                                                        Visual_Override_Active
                                                    </span>
                                                </div>

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
            
            {/* Global CSS Inject */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    0% { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
                `
            }} />
        </section>
    );
};

const DecryptedText = ({ text, isActive, speed }: { text: string, isActive: boolean, speed: number }) => {
    const cypherText = useCypher(text, isActive, speed);
    return <>{cypherText}</>;
};

export default ServicesSection;