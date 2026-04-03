"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- RAZOR SHARP CUSTOM ICONS ---
const MailIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const MapPinIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const PhoneIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const ChevronIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
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

// --- CUSTOM TERMINAL DROPDOWN COMPONENT ---
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
                className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between shadow-inner ${isOpen ? 'bg-white/[0.08] border-white/20' : 'bg-white/[0.02] border-white/10 hover:border-white/20'}`}
                style={{ borderColor: isOpen ? `${colorCode}80` : '' }}
            >
                <span className={`text-sm sm:text-base font-medium transition-colors ${value ? "text-white" : "text-gray-600"}`}>{value || placeholder}</span>
                <ChevronIcon className={`w-4 h-4 transition-transform duration-500 ${isOpen ? "rotate-180" : "text-gray-500"}`} style={{ color: isOpen ? colorCode : '' }} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 5, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 w-full z-[100] bg-[#0A0C10]/98 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.9)] overflow-hidden mt-1 texture-noise"
                    >
                        <div className="flex flex-col max-h-60 overflow-y-auto custom-scrollbar">
                            {options.map((opt: string, i: number) => (
                                <div
                                    key={i}
                                    onClick={() => { onChange(opt); setIsOpen(false); }}
                                    className="px-5 py-4 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer border-b border-white/5 last:border-none relative group"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: colorCode }} />
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" style={{ color: colorCode }}>{'>'}</span>
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
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
    const [formData, setFormData] = useState({ name: "", email: "", category: "", budget: "", message: "" });
    
    // NEW STATES FOR SUBMISSION
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleDropdownChange = (name: string, value: string) => setFormData({ ...formData, [name]: value });
    
    // UPDATED SUBMIT HANDLER WITH LIVE URL
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // LIVE SKDS APPS SCRIPT ENDPOINT
        const scriptURL = "https://script.google.com/macros/s/AKfycbzN0sH49PfZ1pLuT54jRACP8OfJPYpQwc5IRzOcSuuiBVwOv5mvJ9K4VrNaa73o6SNm/exec"; 

        try {
            const formBody = new FormData();
            formBody.append("name", formData.name);
            formBody.append("email", formData.email);
            formBody.append("category", formData.category);
            formBody.append("budget", formData.budget);
            formBody.append("message", formData.message);

            await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors",
                body: formBody,
            });

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
        <section className="py-24 md:py-40 relative bg-[#030406] overflow-hidden z-10" id="contact">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#F5D061]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#99E39E]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0" />

            <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 relative z-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#99E39E] animate-pulse shadow-[0_0_8px_#99E39E]" />
                        <p className="text-gray-400 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase">Secure Transmission</p>
                    </div>
                    <h2 className="text-white text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.05] tracking-tight mb-6">
                        Let’s Build Something <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] to-[#99E39E] bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">Extraordinary.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Left: Info Nodes */}
                    <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
                        {contactNodes.map((node, index) => {
                            const Icon = node.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative bg-white/[0.02] border border-white/5 hover:border-white/15 rounded-[24px] p-6 sm:p-8 flex items-start gap-5 sm:gap-6 transition-all duration-500 overflow-hidden backdrop-blur-sm shadow-xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out pointer-events-none" />
                                    <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0A0C10] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-transparent transition-all">
                                        <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: node.color }} />
                                        <Icon className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 transition-colors" style={{ color: node.color }} />
                                    </div>
                                    <div className="flex flex-col relative z-10 w-full">
                                        <div className="flex items-center justify-between gap-2 mb-2">
                                            <h4 className="text-white text-lg sm:text-xl font-bold tracking-tight">{node.title}</h4>
                                            <span className="text-gray-600 font-mono text-[9px] tracking-widest uppercase border border-gray-700/50 rounded-full px-2 py-0.5">{node.id}</span>
                                        </div>
                                        {node.details.map((detail, idx) => (
                                            <p key={idx} className="text-gray-400 font-light text-sm sm:text-base group-hover:text-gray-200 transition-colors">{detail}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right: Terminal Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 relative"
                    >
                        <div className="p-1 sm:p-0">
                            <div className="bg-[#0A0C10]/80 border border-white/10 rounded-[32px] md:rounded-[40px] backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden texture-noise">
                                <div className="p-6 sm:p-8 md:p-12 relative min-h-[500px] flex flex-col justify-center">
                                    
                                    <AnimatePresence mode="wait">
                                        {!isSuccess ? (
                                            <motion.div
                                                key="form"
                                                initial={{ opacity: 0, filter: "blur(4px)" }}
                                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                                exit={{ opacity: 0, filter: "blur(4px)" }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                                            <MailIcon className="w-4 h-4 text-white" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <h3 className="text-white font-bold text-base sm:text-lg tracking-tight">Transmission Terminal</h3>
                                                            <p className="text-gray-600 font-mono text-[9px] tracking-widest uppercase">Protocol // V2.0.6</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#99E39E]/10 border border-[#99E39E]/20">
                                                        <div className={`w-1.5 h-1.5 bg-[#99E39E] rounded-full shadow-[0_0_8px_#99E39E] ${isSubmitting ? 'animate-ping' : 'animate-pulse'}`} />
                                                        <span className="text-[#99E39E] font-mono text-[9px] tracking-widest uppercase">
                                                            {isSubmitting ? 'Syncing_Data...' : 'Ready_To_Sync'}
                                                        </span>
                                                    </div>
                                                </div>

                                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-[60]">
                                                        <div className="flex flex-col gap-2 relative group">
                                                            <label htmlFor="name" className="text-gray-500 font-mono text-[9px] tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within:text-[#F5D061]">Initiator_Name</label>
                                                            <div className={`absolute inset-0 top-6 rounded-xl transition-opacity duration-500 blur-xl -z-10 ${focusedField === 'name' ? 'opacity-20' : 'opacity-0'}`} style={{ backgroundColor: '#F5D061' }} />
                                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} placeholder="Enter Alias..." required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#F5D061]/40 focus:bg-white/[0.05] transition-all disabled:opacity-50" />
                                                        </div>
                                                        <div className="flex flex-col gap-2 relative group">
                                                            <label htmlFor="email" className="text-gray-500 font-mono text-[9px] tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within:text-[#F5D061]">Return_Address</label>
                                                            <div className={`absolute inset-0 top-6 rounded-xl transition-opacity duration-500 blur-xl -z-10 ${focusedField === 'email' ? 'opacity-20' : 'opacity-0'}`} style={{ backgroundColor: '#F5D061' }} />
                                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} placeholder="name@domain.com" required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#F5D061]/40 focus:bg-white/[0.05] transition-all disabled:opacity-50" />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-[50]">
                                                        <div className="flex flex-col gap-2 relative">
                                                            <label className="text-gray-500 font-mono text-[9px] tracking-[0.2em] uppercase ml-1">Service_Category</label>
                                                            <div className={isSubmitting ? "opacity-50 pointer-events-none" : ""}>
                                                                <TerminalDropdown options={serviceOptions} value={formData.category} onChange={(val: string) => handleDropdownChange('category', val)} placeholder="Select Module..." colorCode="#F5D061" />
                                                            </div>
                                                            <input type="text" className="opacity-0 absolute bottom-0 left-1/2 w-0 h-0 -z-10" required value={formData.category} readOnly tabIndex={-1} />
                                                        </div>
                                                        <div className="flex flex-col gap-2 relative">
                                                            <div className="flex justify-between items-center mb-0.5">
                                                                <label className="text-gray-500 font-mono text-[9px] tracking-[0.2em] uppercase ml-1">Allocation</label>
                                                                <div className="flex bg-white/[0.05] p-0.5 rounded-full border border-white/5">
                                                                    {['USD', 'INR'].map((curr) => (
                                                                        <button key={curr} type="button" disabled={isSubmitting} onClick={() => setCurrency(curr as any)} className={`text-[8px] font-mono px-2.5 py-0.5 rounded-full transition-all ${currency === curr ? 'bg-[#F5D061] text-black font-bold' : 'text-gray-600 hover:text-white'}`}>{curr}</button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <div className={isSubmitting ? "opacity-50 pointer-events-none" : ""}>
                                                                <TerminalDropdown options={budgetData[currency]} value={formData.budget} onChange={(val: string) => handleDropdownChange('budget', val)} placeholder="Select Tier..." colorCode="#F5D061" />
                                                            </div>
                                                            <input type="text" className="opacity-0 absolute bottom-0 left-1/2 w-0 h-0 -z-10" required value={formData.budget} readOnly tabIndex={-1} />
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-2 relative group mt-2 z-[10]">
                                                        <label htmlFor="message" className="text-gray-500 font-mono text-[9px] tracking-[0.2em] uppercase ml-1 transition-colors group-focus-within:text-[#F5D061]">Encrypted_Payload</label>
                                                        <div className={`absolute inset-0 top-6 rounded-xl transition-opacity duration-500 blur-xl -z-10 ${focusedField === 'message' ? 'opacity-20' : 'opacity-0'}`} style={{ backgroundColor: '#F5D061' }} />
                                                        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} placeholder="Tell us about the digital reality you want to build..." required disabled={isSubmitting} className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#F5D061]/40 focus:bg-white/[0.05] transition-all h-28 md:h-36 resize-none custom-scrollbar disabled:opacity-50" />
                                                    </div>

                                                    <motion.button
                                                        whileHover={!isSubmitting ? { scale: 1.01, y: -2 } : {}}
                                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className={`mt-2 group relative w-full flex items-center justify-center gap-3 py-4 md:py-5 px-6 rounded-xl font-black text-xs md:text-sm tracking-[0.3em] uppercase overflow-hidden transition-all shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${isSubmitting ? 'bg-white/10 text-gray-400 cursor-not-allowed' : 'bg-white text-black hover:bg-[#F5D061]'}`}
                                                    >
                                                        {!isSubmitting && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" />}
                                                        <span className="relative z-10">{isSubmitting ? "Transmitting..." : "Transmit Data"}</span>
                                                        {!isSubmitting && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 relative z-10 transform transition-transform group-hover:translate-x-1.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>}
                                                    </motion.button>
                                                </form>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                                className="flex flex-col items-center justify-center text-center h-full py-10"
                                            >
                                                <div className="w-20 h-20 rounded-full bg-[#99E39E]/10 flex items-center justify-center mb-6 relative">
                                                    <div className="absolute inset-0 bg-[#99E39E]/20 blur-xl rounded-full animate-pulse" />
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#99E39E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 relative z-10">
                                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
                                                    </svg>
                                                </div>
                                                <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-tight">Transmission Received</h3>
                                                <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed mb-8">
                                                    Your data package has been successfully decrypted. Please check your secure email line; our team will revert to you within <span className="text-white font-medium">24-48 hours</span>.
                                                </p>
                                                <button 
                                                    onClick={() => setIsSuccess(false)}
                                                    className="text-gray-500 font-mono text-xs tracking-widest uppercase hover:text-[#F5D061] transition-colors border-b border-transparent hover:border-[#F5D061] pb-1"
                                                >
                                                    [ Initiate New Transmission ]
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .texture-noise::before { content: ""; position: absolute; inset: 0; opacity: 0.05; z-index: -1; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(245,208,97,0.5); }
                @keyframes shimmer { 100% { transform: translateX(100%); } }
            `}} />
        </section>
    );
}