"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ULTRA-THIN PREMIUM ICONS (Stroke 1.2 for elegance) ---
const MailIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <rect width="20" height="16" x="2" y="4" rx="3" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const MapPinIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const PhoneIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const ChevronIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="m6 9 6 6 6-6" />
    </svg>
);

// --- STATIC DATA ---
const contactNodes = [
    { id: "NODE_01", title: "Direct E-mail", icon: MailIcon, details: ["shri.k.designs@gmail.com", "iam.eeshaan24@gmail.com"], color: "#F5D061" },
    { id: "NODE_02", title: "Headquarters", icon: MapPinIcon, details: ["Himachal Pradesh", "India"], color: "#38BDF8" },
    { id: "NODE_03", title: "Dedicated Lines", icon: PhoneIcon, details: ["+91 70186 71028", "+91 98821 58587"], color: "#99E39E" },
];

const serviceOptions = ["Web Development", "App Development", "UI/UX Design", "SEO & Marketing", "Other Tech Services"];
const budgetData = {
    USD: ["$500 - $2k (Standard)", "$2k - $5k (Premium)", "$5k+ (Enterprise)"],
    INR: ["₹20k - ₹50k (Basic)", "₹50k - ₹1.5L (Standard)", "₹1.5L - ₹4L (Premium)", "₹4L+ (Enterprise)"]
};

// --- SPRING ANIMATION CONFIG ---
const springConfig = { type: "spring", stiffness: 300, damping: 24 };

// --- REFINED DROPDOWN COMPONENT ---
const TerminalDropdown = ({ options, value, onChange, placeholder, colorCode }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-5 py-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${isOpen ? 'bg-[#12141A] border-white/20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]' : 'bg-[#0D0F14] border-white/5 hover:border-white/15 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)]'}`}
                style={{ boxShadow: isOpen ? `0 0 0 1px ${colorCode}40, inset 0 2px 10px rgba(0,0,0,0.5)` : '' }}
            >
                <span className={`text-sm sm:text-base font-medium transition-colors ${value ? "text-zinc-200" : "text-zinc-600"}`}>{value || placeholder}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={springConfig}>
                    <ChevronIcon className="w-4 h-4 text-zinc-500" style={{ color: isOpen ? colorCode : '' }} />
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 4, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 8, scale: 0.98, filter: "blur(4px)" }}
                        transition={springConfig}
                        className="absolute top-full left-0 w-full z-[100] bg-[#12141A]/90 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden mt-1 texture-noise-premium"
                    >
                        <div className="flex flex-col max-h-64 overflow-y-auto custom-scrollbar p-1">
                            {options.map((opt: string, i: number) => (
                                <div
                                    key={i}
                                    onClick={() => { onChange(opt); setIsOpen(false); }}
                                    className="px-4 py-3 text-sm text-zinc-400 hover:text-white transition-all cursor-pointer rounded-xl relative group flex items-center gap-3 overflow-hidden"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300" style={{ backgroundColor: colorCode }} />
                                    <span className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100" style={{ backgroundColor: colorCode, boxShadow: `0 0 8px ${colorCode}` }} />
                                    <span className="relative z-10 font-medium tracking-wide -translate-x-3 group-hover:translate-x-0 transition-transform duration-300">
                                        {opt}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function Contact() {
    const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
    const [formData, setFormData] = useState({ name: "", email: "", category: "", budget: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleDropdownChange = (name: string, value: string) => setFormData({ ...formData, [name]: value });
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const scriptURL = "https://script.google.com/macros/s/AKfycby7abOTP0vzMP-x13RwsC1fTKeZHpmSElq1sHxVQNqlRWsRHJ6wWhuPwmVZdPUSY4nT/exec"; 
        try {
            const formBody = new FormData();
            Object.entries(formData).forEach(([key, value]) => formBody.append(key, value));
            await fetch(scriptURL, { method: "POST", mode: "no-cors", body: formBody });
            setIsSuccess(true);
            setFormData({ name: "", email: "", category: "", budget: "", message: "" });
        } catch (error) {
            console.error("Transmission failed:", error);
            alert("Error sending transmission. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => { setFormData(prev => ({ ...prev, budget: "" })); }, [currency]);

    return (
        <section className="py-24 md:py-40 relative bg-[#010103] overflow-hidden z-10" id="contact">
            {/* Ultra-Smooth Background Radiance */}
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(245,208,97,0.06)_0%,transparent_70%)] -z-10 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(153,227,158,0.04)_0%,transparent_70%)] -z-10 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

            <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-20">
                
                {/* Refined Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-4xl mx-auto mb-20 md:mb-32"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-md shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#99E39E] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#99E39E]"></span>
                        </span>
                        <p className="text-zinc-300 font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium">Secure Transmission</p>
                    </div>
                    <h2 className="text-white text-5xl sm:text-6xl lg:text-[72px] font-black leading-[1.02] tracking-tighter mb-6">
                        Let’s Build Something <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-[#F5D061] to-[#D4A017]">Extraordinary.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    
                    {/* Left: Info Nodes */}
                    <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
                        {contactNodes.map((node, index) => {
                            const Icon = node.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="group relative bg-[#0D0F14]/40 border border-white/[0.05] hover:border-white/[0.12] hover:bg-[#12141A]/60 rounded-[28px] p-7 flex items-center gap-6 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                                >
                                    <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.05] flex items-center justify-center shadow-inner transition-transform duration-500 group-hover:scale-105 group-hover:border-white/10">
                                        <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundColor: node.color }} />
                                        <Icon className="relative z-10 w-6 h-6 transition-colors" style={{ color: node.color }} />
                                    </div>
                                    <div className="flex flex-col relative z-10 w-full">
                                        <h4 className="text-zinc-100 text-lg sm:text-xl font-bold tracking-tight mb-1">{node.title}</h4>
                                        <div className="space-y-0.5">
                                            {node.details.map((detail, idx) => (
                                                <p key={idx} className="text-zinc-500 font-medium text-sm sm:text-base group-hover:text-zinc-300 transition-colors duration-300">{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right: Premium Terminal Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 relative"
                    >
                        <div className="relative bg-[#0A0C12]/90 border border-white/[0.08] rounded-[36px] md:rounded-[48px] backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden">
                            {/* Inner ambient glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#F5D061]/5 blur-[80px] pointer-events-none" />
                            
                            <div className="p-8 sm:p-10 md:p-14 relative min-h-[550px] flex flex-col justify-center">
                                
                                <AnimatePresence mode="wait">
                                    {!isSuccess ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0, filter: "blur(8px)" }}
                                            animate={{ opacity: 1, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, filter: "blur(8px)" }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-8 mb-10">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/[0.08] shadow-inner">
                                                        <svg className="w-5 h-5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight">System Initialization</h3>
                                                        <p className="text-zinc-500 font-mono text-[10px] tracking-[0.25em] uppercase mt-0.5">Gateway // Online</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                                    <div className="flex flex-col gap-2.5 group">
                                                        <label htmlFor="name" className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within:text-[#F5D061]">Initiator Name</label>
                                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Alias..." required disabled={isSubmitting} 
                                                            className="w-full px-5 py-4 rounded-2xl bg-[#0D0F14] border border-white/5 text-zinc-100 placeholder:text-zinc-700 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] focus:outline-none focus:border-[#F5D061]/30 focus:ring-1 focus:ring-[#F5D061]/30 focus:bg-[#12141A] transition-all duration-300 disabled:opacity-50" />
                                                    </div>
                                                    <div className="flex flex-col gap-2.5 group">
                                                        <label htmlFor="email" className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within:text-[#F5D061]">Return Address</label>
                                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="name@domain.com" required disabled={isSubmitting} 
                                                            className="w-full px-5 py-4 rounded-2xl bg-[#0D0F14] border border-white/5 text-zinc-100 placeholder:text-zinc-700 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] focus:outline-none focus:border-[#F5D061]/30 focus:ring-1 focus:ring-[#F5D061]/30 focus:bg-[#12141A] transition-all duration-300 disabled:opacity-50" />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 relative z-[50]">
                                                    <div className="flex flex-col gap-2.5">
                                                        <label className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase ml-1">Service Directive</label>
                                                        <div className={isSubmitting ? "opacity-50 pointer-events-none" : ""}>
                                                            <TerminalDropdown options={serviceOptions} value={formData.category} onChange={(val: string) => handleDropdownChange('category', val)} placeholder="Select Module..." colorCode="#F5D061" />
                                                        </div>
                                                        <input type="text" className="opacity-0 absolute bottom-0 left-1/2 w-0 h-0 -z-10" required value={formData.category} readOnly tabIndex={-1} />
                                                    </div>
                                                    
                                                    <div className="flex flex-col gap-2.5">
                                                        <div className="flex justify-between items-center h-[18px]">
                                                            <label className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase ml-1">Resource Allocation</label>
                                                            {/* Custom Segmented Control */}
                                                            <div className="relative flex bg-[#0D0F14] p-1 rounded-lg border border-white/[0.05] shadow-inner">
                                                                <div className={`absolute top-1 bottom-1 w-[45%] bg-white/10 rounded-md transition-all duration-300 ease-out shadow-sm ${currency === 'USD' ? 'left-1' : 'left-[50%]'}`} />
                                                                {['USD', 'INR'].map((curr) => (
                                                                    <button key={curr} type="button" disabled={isSubmitting} onClick={() => setCurrency(curr as any)} 
                                                                        className={`relative z-10 w-10 text-[9px] font-mono tracking-wider transition-colors duration-300 ${currency === curr ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}>
                                                                        {curr}
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className={isSubmitting ? "opacity-50 pointer-events-none" : ""}>
                                                            <TerminalDropdown options={budgetData[currency]} value={formData.budget} onChange={(val: string) => handleDropdownChange('budget', val)} placeholder="Select Tier..." colorCode="#F5D061" />
                                                        </div>
                                                        <input type="text" className="opacity-0 absolute bottom-0 left-1/2 w-0 h-0 -z-10" required value={formData.budget} readOnly tabIndex={-1} />
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-2.5 group relative z-[10]">
                                                    <label htmlFor="message" className="text-zinc-500 font-mono text-[10px] tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within:text-[#F5D061]">Encrypted Payload</label>
                                                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Detail the architecture of your vision..." required disabled={isSubmitting} 
                                                        className="w-full px-5 py-5 rounded-2xl bg-[#0D0F14] border border-white/5 text-zinc-100 placeholder:text-zinc-700 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] focus:outline-none focus:border-[#F5D061]/30 focus:ring-1 focus:ring-[#F5D061]/30 focus:bg-[#12141A] transition-all duration-300 h-32 md:h-40 resize-none custom-scrollbar disabled:opacity-50" />
                                                </div>

                                                <motion.button
                                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                                    transition={springConfig}
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={`mt-4 relative w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-xs sm:text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 ${isSubmitting ? 'bg-white/5 text-zinc-600 cursor-not-allowed border border-white/5' : 'bg-gradient-to-r from-zinc-100 to-zinc-300 text-black hover:from-white hover:to-white shadow-[0_0_40px_rgba(245,208,97,0.15)] hover:shadow-[0_0_60px_rgba(245,208,97,0.3)]'}`}
                                                >
                                                    <span className="relative z-10">{isSubmitting ? "Transmitting..." : "Initiate Protocol"}</span>
                                                    {!isSubmitting && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 relative z-10"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>}
                                                </motion.button>
                                            </form>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="flex flex-col items-center justify-center text-center h-full py-16"
                                        >
                                            <div className="w-24 h-24 rounded-full bg-gradient-to-b from-[#99E39E]/20 to-transparent border border-[#99E39E]/30 flex items-center justify-center mb-8 relative shadow-[0_0_60px_rgba(153,227,158,0.2)]">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#99E39E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 relative z-10">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
                                                </svg>
                                            </div>
                                            <h3 className="text-white text-3xl font-black mb-4 tracking-tight">Sequence Confirmed</h3>
                                            <p className="text-zinc-400 text-sm md:text-base max-w-sm leading-relaxed mb-10 font-medium">
                                                Your data matrix has been successfully parsed. Our engineering team will synchronize with you within <span className="text-zinc-200">24-48 hours</span>.
                                            </p>
                                            <button 
                                                onClick={() => setIsSuccess(false)}
                                                className="text-zinc-500 font-mono text-xs tracking-[0.2em] uppercase hover:text-white transition-colors duration-300"
                                            >
                                                [ Reboot Terminal ]
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .texture-noise-premium::before { content: ""; position: absolute; inset: 0; opacity: 0.03; z-index: -1; pointer-events: none; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 4px; transition: all 0.3s ease;}
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(245,208,97,0.3); }
            `}} />
        </section>
    );
}
