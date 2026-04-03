import React from "react";
import PortfolioSection from "@/components/Portfolio/index"; 
import { Metadata } from "next";

// 1. PAGE-SPECIFIC METADATA OVERRIDE (Syncs with Layout)
export const metadata: Metadata = {
  title: "The Archive | Elite Digital Portfolio of SK Design Studio",
  description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Explore our curated archive of high-performance web applications, immersive UI/UX interfaces, and premium brand architectures.",
  alternates: {
    canonical: "https://skds.in/portfolio", 
  },
  openGraph: {
    title: "The Archive | Elite Digital Portfolio of SK Design Studio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Step into our gallery of high-performance digital architectures and brand identities.",
    url: "https://skds.in/portfolio",
  }
};

export default function PortfolioPage() {
  
  // 2. THE JSON-LD SCHEMA GRAPH (The "CollectionPage" & "CreativeWork" Entities)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "The Archive of Shri Kishori Design Studio",
    "description": "Innovate, Transform, Grow – Advanced Tech Services redefined. A curated portfolio of our elite web development, UI/UX design, and brand identity projects.",
    "url": "https://skds.in/portfolio",
    "publisher": {
      "@type": "Organization",
      "name": "Shri Kishori Design Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://skds.in/images/logo1.png"
      }
    },
    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "GroupIN Platform Engineering",
        "description": "High-performance UI/UX redesign and platform architecture engineered for a next-generation communication and business network."
      },
      {
        "@type": "CreativeWork",
        "name": "SnehSattva Digital Deployment",
        "description": "Custom web architecture, technical hosting resolution, and digital deployment for the SnehSattva brand platform."
      }
    ]
  };

  return (
    <>
      {/* INJECTING THE SCHEMA GRAPH INVISIBLY INTO THE DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="bg-[#030406] min-h-screen pt-20">
        <PortfolioSection />
      </main>
    </>
  );
}