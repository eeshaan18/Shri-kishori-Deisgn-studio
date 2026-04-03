import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// 1. CRITICAL INITIAL LOAD (Loads instantly)
import Hero from "@/components/Home/Hero";

// 2. DYNAMIC LAZY LOADS (Only downloaded when the user scrolls near them)
const Work = dynamic(() => import("@/components/Home/work"));
const TimeLine = dynamic(() => import("@/components/Home/timeline"));
const Platform = dynamic(() => import("@/components/Home/platform"));
const Portfolio = dynamic(() => import("@/components/Home/portfolio"));
const Perks = dynamic(() => import("@/components/Home/perks"));

// 1. ELITE HOMEPAGE METADATA OVERRIDE
export const metadata: Metadata = {
  title: "Shri Kishori Design Studio",
  description: "Innovate, Transform, Grow – Advanced Tech Services Redefined.",
  alternates: {
    canonical: "https://skds.in", // Forces Google to prioritize this exact URL
  },
  openGraph: {
    title: "Shri Kishori Design Studio | Premier Web & UI/UX Agency",
    description: "Innovate, Transform, Grow – Advanced Tech Services Redefined.",
    url: "https://skds.in",
  }
};

export default function Home() {
  // 2. THE JSON-LD SCHEMA GRAPH (Google's Native Language)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Shri Kishori Design Studio",
    "alternateName": "SK Design Studio",
    "image": "https://skds.in/images/logo1.png",
    "@id": "https://skds.in",
    "url": "https://skds.in",
    "telephone": "+917018671028", 
    "email": "hello@skds.in", 
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nahan",
      "addressRegion": "Himachal Pradesh",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Eeshaan Aggarwal",
      "jobTitle": "Full Stack Developer & Founder"
    },
    "description": "A tech-based design agency providing elite web development, app development, UI/UX, and marketing services.",
    "knowsAbout": [
      "Web Development",
      "App Development",
      "UI/UX Design",
      "Graphic Design",
      "Next.js",
      "React",
      "SEO"
    ],
    "priceRange": "$$"
  };

  return (
    <>
      {/* INJECTING THE SCHEMA GRAPH INVISIBLY INTO THE DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="w-full min-h-screen bg-[#030406] overflow-hidden">
        <Hero />
        <Work />
        <TimeLine />
        <Platform />
        <Portfolio />
        <Perks />
      </main>
    </>
  );
}