"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useVelocity, useSpring, AnimatePresence, useMotionValue } from "framer-motion";

// --- CYPHER TEXT DECRYPTION HOOK ---
const useCypher = (text: string, isActive: boolean) => {
    const [displayText, setDisplayText] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

    useEffect(() => {
        if (!isActive) {
            setDisplayText("");
            return;
        }
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(text.split("").map((letter, index) => {
                if (index < iteration) return text[index];
                return chars[Math.floor(Math.random() * chars.length)];
            }).join(""));

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text, isActive]);

    return displayText;
};

// --- PROJECT SCHEMATIC BLUEPRINTS ---
const WebBlueprint = ({ color }: { color: string }) => (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-20 mix-blend-screen" fill="none">
        <path stroke={color} strokeWidth="0.5" strokeDasharray="2 4" d="M10,10 H190 V190 H10 Z" className="animate-[redraw_20s_linear_infinite]" />
        <circle cx="100" cy="100" r="60" stroke={color} strokeWidth="1" opacity="0.3" />
        <motion.circle cx="100" cy="100" r="30" stroke={color} strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
        <circle cx="100" cy="100" r="4" fill={color} className="animate-pulse" />
    </svg>
);

const UIBlueprint = ({ color }: { color: string }) => (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-20 mix-blend-screen" fill="none">
        <path stroke={color} strokeWidth="0.5" d="M20,20 L180,180 M180,20 L20,180" opacity="0.3" />
        <motion.rect x="50" y="50" width="100" height="100" stroke={color} strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <rect x="75" y="75" width="50" height="50" stroke={color} strokeWidth="0.5" opacity="0.5" className="animate-[spin_15s_linear_infinite]" style={{ transformOrigin: "center" }} />
    </svg>
);

const BrandBlueprint = ({ color }: { color: string }) => (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-20 mix-blend-screen" fill="none">
        <motion.ellipse cx="100" cy="100" rx="80" ry="30" stroke={color} strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: 'center', transform: 'rotate(45deg)' }} />
        <motion.ellipse cx="100" cy="100" rx="30" ry="80" stroke={color} strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }} style={{ transformOrigin: 'center', transform: 'rotate(45deg)' }} />
    </svg>
);

const blueprintMap: { [key: string]: React.FC<{ color: string }> } = {
    "Web Architecture": WebBlueprint,
    "Immersive UI/UX": UIBlueprint,
    "Brand DNA": BrandBlueprint
};

// --- MAGNETIC BUTTON COMPONENT ---
const MagneticButton = ({ children, onClick, color, isTouchDevice }: { children: React.ReactNode, onClick: () => void, color: string, isTouchDevice: boolean }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouse = (e: React.MouseEvent) => {
        if (isTouchDevice || !ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ x: isTouchDevice ? 0 : springX, y: isTouchDevice ? 0 : springY }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onClick={onClick}
            className="flex items-center gap-3 sm:gap-4 group/btn outline-none w-fit cursor-pointer p-4 -m-4"
        >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white/10 group-hover/btn:border-transparent group-hover/btn:shadow-[0_0_20px_currentColor]" style={{ color }}>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:-rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
            <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.3em] text-white/50 group-hover/btn:text-white transition-colors duration-300">
                {children}
            </span>
        </motion.div>
    );
};

// --- THE DECRYPTION MODAL ---
const CaseStudyModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'auto'; };
    }, []);

    const Blueprint = blueprintMap[project.category] || WebBlueprint; 
    const cypherTitle = useCypher(project.title, true);

    return (
        <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-12 bg-black/80"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full h-full max-h-[90dvh] lg:max-h-full max-w-7xl bg-[#0A0C10] border border-white/10 rounded-[24px] lg:rounded-[32px] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.8)] texture-noise"
            >
                <div className="flex-shrink-0 p-5 sm:p-8 lg:p-12 flex items-start justify-between bg-gradient-to-b from-white/[0.02] to-transparent border-b border-white/5 lg:border-none">
                    <div>
                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/50 border border-white/10 px-2 sm:px-3 py-1 rounded bg-white/5">DECRYPTED_FILE // {project.id}</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none" style={{ textShadow: `0 0 40px ${project.color}30` }}>
                            {cypherTitle}
                        </h2>
                    </div>
                    <button onClick={onClose} className="group flex items-center gap-3 outline-none shrink-0 ml-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors hidden sm:block">Close_Connection</span>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-all group-hover:bg-red-500/20 group-hover:border-red-500/50 group-hover:text-red-400">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </button>
                </div>

                <div className="w-full h-[2px] relative overflow-hidden hidden lg:block">
                    <div className="absolute inset-0 opacity-20 bg-white/10" />
                    <motion.div
                        className="absolute top-0 left-0 h-full w-1/3"
                        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
                        animate={{ left: ['-50%', '150%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div className="flex-1 overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row custom-scrollbar">
                    <div className="w-full lg:w-2/3 h-auto lg:h-full p-5 sm:p-8 lg:p-12 lg:overflow-y-auto custom-scrollbar">
                        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-base sm:text-lg lg:text-xl text-gray-300 font-light leading-relaxed mb-10 lg:mb-12">
                            {project.fullDescription}
                        </motion.p>
                        <div className="space-y-6 lg:space-y-8">
                            {[1, 2].map((num) => (
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + (num * 0.1) }} key={num} className="relative w-full aspect-video bg-[#030406] border border-white/10 rounded-[16px] lg:rounded-2xl overflow-hidden flex items-center justify-center group">
                                    <div className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40" style={{ background: `radial-gradient(circle at center, ${project.color}40, transparent 70%)` }} />
                                    {Blueprint && <Blueprint color={project.color} />}
                                    <div className="relative z-10 border border-white/10 bg-black/60 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex flex-col items-center">
                                        <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1">Classified_Asset_{num}</span>
                                        <span className="font-mono text-xs sm:text-sm tracking-widest text-white/80">Awaiting Media</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 h-auto lg:h-full bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/5 p-5 sm:p-8 lg:p-12 flex flex-col gap-8 lg:gap-10">
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                            <p className="font-mono text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 sm:mb-3">Client Entity</p>
                            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">{project.client}</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                            <p className="font-mono text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 sm:mb-3">Domain Category</p>
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: project.color, color: project.color }} />
                                <p className="text-lg sm:text-xl font-light text-gray-300">{project.category}</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                            <p className="font-mono text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-3 sm:mb-4">System Logistics</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech && project.tech.map((t: string, i: number) => (
                                    <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-black/40 border border-white/10 font-mono text-[9px] sm:text-[10px] tracking-widest text-white/70 uppercase shadow-inner">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- HORIZONTAL CARD COMPONENT ---
// Notice trackScaleProp added here to scale the inner card cleanly
const HorizontalProject = ({ project, xOffset, onDecrypt, numParallax, isTouchDevice, trackScaleProp }: { project: any, xOffset: any, onDecrypt: () => void, numParallax: any, isTouchDevice: boolean, trackScaleProp: any }) => {
    const Blueprint = blueprintMap[project.category] || WebBlueprint;
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div className="w-screen h-[100dvh] flex-shrink-0 flex items-center justify-center relative p-4 sm:p-8 lg:p-24 overflow-hidden pt-24 lg:pt-24">
            
            <motion.span style={{ x: numParallax }} className="absolute top-1/2 left-1/2 -translate-y-1/2 text-[30vh] lg:text-[40vh] font-black opacity-[0.03] text-white tracking-tighter select-none pointer-events-none z-0 whitespace-nowrap">
                {project.num}
            </motion.span>

            {/* Scale is now applied directly to the card container to prevent alignment drift */}
            <motion.div 
                style={{ scale: isTouchDevice ? 1 : trackScaleProp }} 
                className="w-full max-w-7xl h-full max-h-[85dvh] lg:max-h-[800px] flex flex-col lg:flex-row rounded-[24px] lg:rounded-[40px] bg-[#0A0C10]/60 backdrop-blur-3xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden relative z-10 texture-noise group"
            >
                <div className="w-full lg:w-5/12 p-6 sm:p-10 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 relative z-20 flex-1 overflow-y-auto custom-scrollbar">
                    <div>
                        <div className="flex items-center gap-3 mb-6 lg:mb-8 mt-2 lg:mt-0">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ backgroundColor: project.color }} />
                                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: project.color }} />
                            </span>
                            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/40">{project.category}</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] mb-4 lg:mb-6 drop-shadow-lg">
                            {project.title}
                        </h2>
                        <p className="text-white/60 text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-6 lg:mb-8">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech && project.tech.map((t: string, i: number) => (
                                <span key={i} className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-[8px] sm:text-[9px] tracking-widest text-white/50 uppercase shadow-inner">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0 mb-2 lg:mb-0">
                        <MagneticButton onClick={onDecrypt} color={project.color} isTouchDevice={isTouchDevice}>
                            Decrypt_Case_Study
                        </MagneticButton>
                    </div>
                </div>

                <div className="w-full lg:w-7/12 h-[35vh] min-h-[250px] lg:min-h-0 lg:h-full relative bg-[#030406] overflow-hidden shrink-0">
                    <motion.div style={{ x: isTouchDevice ? 0 : xOffset }} className="absolute inset-0 w-full lg:w-[120%] h-full lg:-left-[10%] flex items-center justify-center">
                        <div className="absolute inset-0 opacity-30 mix-blend-screen transition-opacity duration-700 group-hover:opacity-50" style={{ background: `radial-gradient(circle at center, ${project.color}40, transparent 60%)` }} />
                        {Blueprint && <Blueprint color={project.color} />}

                        {project.imageUrl ? (
                            <div className="relative w-3/4 sm:w-2/3 aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 group-hover:border-white/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className={`object-cover transition-all duration-1000 ease-out ${imgLoaded ? 'opacity-100 group-hover:scale-105' : 'opacity-0 scale-95 blur-sm'}`}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    onLoad={() => setImgLoaded(true)}
                                />
                            </div>
                        ) : (
                            <div className="relative w-3/4 sm:w-2/3 aspect-video border border-white/10 rounded-xl bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-white/30 rounded-tl-sm -translate-x-1 -translate-y-1" />
                                <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-white/30 rounded-tr-sm translate-x-1 -translate-y-1" />
                                <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-white/30 rounded-bl-sm -translate-x-1 translate-y-1" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-white/30 rounded-br-sm translate-x-1 translate-y-1" />
                                <span className="font-mono text-[8px] sm:text-[10px] tracking-widest text-white/30 mb-2">PORTAL // {project.id}</span>
                                <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-white/50 uppercase border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded bg-black/50 backdrop-blur-md">Awaiting_Media</span>
                            </div>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

// --- MAIN PORTFOLIO COMPONENT ---
const PortfolioSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [activeModalProject, setActiveModalProject] = useState<any | null>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const [projects, setProjects] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);

        const fetchProjects = async () => {
            try {
                const API_URL = "https://script.google.com/macros/s/AKfycbwzMUOGS2b2VnPPvNXWoks6WMBqTSR82u8oWxnJwtcPSu5iLCywpjL2enjRNkgN1z_m/exec";
                const response = await fetch(API_URL);
                const data = await response.json();

                if (!data.error && data.length > 0) {
                    setProjects(data);
                }
            } catch (error) {
                console.error("Failed to sync archives:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const scrollVelocity = useVelocity(scrollYProgress);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const trackScale = useTransform(smoothVelocity, [-0.5, 0.5], [0.98, 0.98], { clamp: false });
    const springTrackScale = useSpring(useTransform(scrollYProgress, v => v === 0 || v === 1 ? 1 : trackScale.get()), { stiffness: 100, damping: 30 });

    // --- THE MAGIC FIX: PERFECT TIMING & NO DRIFT ---
    const numProjects = projects.length || 1;
    
    // We create a timeline with 'numProjects + 1' total screens of scrolling.
    const totalScreens = numProjects + 1; 
    
    // The exact fractions of the scroll where the locking happens
    const startLock = 1 / totalScreens;
    const endLock = numProjects / totalScreens;
    
    // Calculate the percentage to shift the entire row container
    const maxScrollPercent = numProjects > 1 ? -((numProjects - 1) / numProjects) * 100 : 0;
    
    // Timeline: Start Pause -> Scroll Data -> End Pause
    const x = useTransform(
        scrollYProgress, 
        [0, startLock, endLock, 1], 
        ["0%", "0%", `${maxScrollPercent}%`, `${maxScrollPercent}%`]
    );
    
    const internalParallax = useTransform(
        scrollYProgress, 
        [0, startLock, endLock, 1], 
        ["5%", "5%", "-5%", "-5%"]
    );
    
    const numParallax = useTransform(
        scrollYProgress, 
        [0, startLock, endLock, 1], 
        ["0%", "0%", "100%", "100%"]
    );

    if (isLoading) {
        return (
            <div className="w-full h-screen bg-[#030406] flex flex-col items-center justify-center font-mono text-[#F5D061] z-50">
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 bg-[#F5D061] rounded-full animate-ping" />
                    <span className="text-xs sm:text-sm tracking-[0.3em] uppercase">Syncing with Master Server</span>
                </div>
                <p className="text-white/50 text-[10px] tracking-widest animate-pulse">DECRYPTING ARCHIVES...</p>
            </div>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="w-full h-screen bg-[#030406] flex flex-col items-center justify-center font-mono text-white/50 z-50">
                <p className="tracking-[0.2em] uppercase">No projects found in database.</p>
            </div>
        );
    }

    return (
        <>
            <div className="w-full bg-[#030406]">
                <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center pt-32 pb-16 sm:pb-20 z-10 bg-[#030406]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] bg-[radial-gradient(ellipse_at_top,_rgba(245,208,97,0.04),_transparent_70%)] pointer-events-none -z-10" />
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none -z-10" />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-screen-xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#99E39E] animate-pulse" />
                            <p className="text-gray-400 font-mono text-[9px] tracking-[0.3em] uppercase">Archive_Schematics</p>
                        </motion.div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
                                Proof of <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E]">Dominance.</span>
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-gray-400 text-sm sm:text-base md:text-lg font-light max-w-md md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#F5D061] pl-4 md:pl-0 md:pr-4 py-1">
                                An archived ledger of engineered systems, immersive interfaces, and absolute market advantages.
                            </motion.p>
                        </div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="mt-16 sm:mt-20 flex flex-col items-center gap-4 text-white/30 mx-auto md:mx-0 w-fit">
                            <span className="font-mono text-[9px] uppercase tracking-widest hidden sm:block">Scroll to Access</span>
                            <span className="font-mono text-[9px] uppercase tracking-widest sm:hidden animate-pulse text-[#F5D061]">Scroll Down</span>
                            <div className="w-px h-8 sm:h-12 bg-white/10 relative overflow-hidden">
                                <motion.div animate={{ y: [0, 50, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-full h-1/3 bg-[#F5D061]" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* HORIZONTAL SCROLL GALLERY */}
                {/* Section height exactly matches the mathematically locked timeline! */}
                <section ref={targetRef} className="relative w-full" style={{ height: `${totalScreens * 100}vh` }}>
                    <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center bg-[#030406]">
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none -z-10" />

                        {/* Notice 'scale' is REMOVED from this wrapper to prevent cropping drift */}
                        <motion.div
                            style={{ x, width: `${numProjects * 100}vw` }}
                            className="flex h-full origin-left"
                        >
                            {projects.map((project) => (
                                <HorizontalProject
                                    key={project.id}
                                    project={project}
                                    xOffset={internalParallax}
                                    numParallax={numParallax}
                                    onDecrypt={() => setActiveModalProject(project)}
                                    isTouchDevice={isTouchDevice}
                                    trackScaleProp={springTrackScale}
                                />
                            ))}
                        </motion.div>

                        <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-12 lg:left-24 z-50 flex items-center gap-3 sm:gap-4 w-32 sm:w-48 pointer-events-none bg-black/40 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full sm:rounded-none backdrop-blur-md sm:backdrop-blur-none">
                            <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-white/40 uppercase">Progress</span>
                            <div className="h-px flex-1 bg-white/10 relative overflow-hidden rounded-full">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-[#F5D061]"
                                    style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

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
          @keyframes redraw {
              0% { stroke-dashoffset: 800; }
              100% { stroke-dashoffset: 0; }
          }
          .custom-scrollbar::-webkit-scrollbar {
              width: 2px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent; 
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(255,255,255,0.05); 
              border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(255,255,255,0.15); 
          }
        `}} />
            </div>

            <AnimatePresence>
                {activeModalProject && (
                    <CaseStudyModal
                        project={activeModalProject}
                        onClose={() => setActiveModalProject(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default PortfolioSection;