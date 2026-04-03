import React from "react";
import Story from "@/components/About/Story";
import CTA from "@/components/About/cta";
import Founder from "@/components/About/founder";
import { Metadata } from "next";

// 1. PAGE-SPECIFIC METADATA OVERRIDE (Syncs with Layout)
export const metadata: Metadata = {
  title: "The Architecture of Innovation | About SK Design Studio",
  description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Discover the engineering precision, soulful design, and the founder's vision driving Shri Kishori Design Studio.",
  alternates: {
    canonical: "https://skds.in/about", 
  },
  openGraph: {
    title: "The Architecture of Innovation | About SK Design Studio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Discover the vision and engineering precision driving our digital architecture.",
    url: "https://skds.in/about",
  }
};

export default function AboutPage() {
  
  // 2. THE JSON-LD SCHEMA GRAPH (The "AboutPage" Entity)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Shri Kishori Design Studio",
    "description": "Innovate, Transform, Grow – Advanced Tech Services redefined. The official background, story, and vision of SK Design Studio.",
    "url": "https://skds.in/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Shri Kishori Design Studio",
      "alternateName": "SK Design Studio",
      "url": "https://skds.in",
      "logo": "https://skds.in/images/logo1.png",
      "foundingDate": "2023", // You can update this to your actual founding year
      "founder": {
        "@type": "Person",
        "name": "Eeshaan Aggarwal",
        "jobTitle": "Founder & Full Stack Developer",
        "url": "https://skds.in/about#founder"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917018671028",
        "contactType": "customer service",
        "email": "hello@skds.in",
        "availableLanguage": ["English", "Hindi"]
      }
    }
  };

  return (
    <>
      {/* INJECTING THE SCHEMA GRAPH INVISIBLY INTO THE DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="w-full min-h-screen bg-[#030406] overflow-hidden">
        <Story />
        <CTA />
        <Founder />
      </main>
    </>
  );
}