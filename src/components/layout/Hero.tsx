"use client";

import React from "react";
import { ArrowRight, Brush } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = "Get Started",
  onCtaClick
}) => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-darkmode text-grey overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-primary/20 blur-220 rounded-full z-1" />

      <div className="relative z-2 max-w-screen-xl mx-auto px-4 text-center flex flex-col items-center">
        <div className="flex items-center justify-center p-4 bg-darklight rounded-full mb-8">
          <Brush className="text-primary w-8 h-8" />
        </div>

        <h1 className="text-54 md:text-76 font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6">
          {title}
        </h1>

        <p className="text-18 md:text-24 text-muted max-w-2xl mb-10">
          {subtitle}
        </p>

        <button
          onClick={onCtaClick}
          className="group flex items-center gap-2 bg-primary text-darkmode px-8 py-4 rounded-full text-18 font-bold hover:bg-secondary transition-all duration-150 hover:shadow-cause-shadow"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
