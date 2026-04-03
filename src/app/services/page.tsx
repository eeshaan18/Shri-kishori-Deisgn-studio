import React from "react";
import ServicesSection from "@/components/Services/services/index"; 
import WhyChooseUs from "@/components/Services/whyChooseUs/index";
import { Metadata } from "next";

// 1. PAGE-SPECIFIC METADATA OVERRIDE (Syncs with Layout)
export const metadata: Metadata = {
  title: "Elite Digital Capabilities | Services at SK Design Studio",
  description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Explore our capabilities in high-performance web architecture, app ecosystems, UI/UX design, and brand identity.",
  alternates: {
    canonical: "https://skds.in/services", 
  },
  openGraph: {
    title: "Elite Digital Capabilities | Services at SK Design Studio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Architecting scalable tech solutions, from immersive UI/UX to full-stack applications.",
    url: "https://skds.in/services",
  }
};

export default function ServicesPage() {
  
  // 2. THE JSON-LD SCHEMA GRAPH (The "ItemList" of "Service" Entities)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Core Services at SK Design Studio",
    "description": "Innovate, Transform, Grow – Advanced Tech Services redefined.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Full-Stack Web Development",
          "description": "Custom, high-performance web architecture built with Next.js, Node.js, and MongoDB.",
          "url": "https://skds.in/services"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "App Development",
          "description": "Scalable, secure, and intuitive mobile applications designed for peak performance.",
          "url": "https://skds.in/services"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "UI/UX & Graphic Design",
          "description": "Immersive, user-centric interface systems and elite brand identity design.",
          "url": "https://skds.in/services"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Digital Marketing & SEO",
          "description": "Data-driven organic growth strategies and technical SEO optimization.",
          "url": "https://skds.in/services"
        }
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
        <ServicesSection />
        <WhyChooseUs />
      </main>
    </>
  );
}