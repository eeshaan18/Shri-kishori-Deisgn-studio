import React from "react";
import Contact from "@/components/Contact/contact";
import { Metadata } from "next";

// 1. PAGE-SPECIFIC METADATA OVERRIDE (Syncs with Layout)
export const metadata: Metadata = {
  title: "Initiate Transmission | Contact SK Design Studio",
  description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Ready to architect your next digital reality? Get in touch with Shri Kishori Design Studio.",
  alternates: {
    canonical: "https://skds.in/contact", 
  },
  openGraph: {
    title: "Initiate Transmission | Contact SK Design Studio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Let's collaborate on your next big digital architecture project.",
    url: "https://skds.in/contact",
  }
};

export default function ContactPage() {
  
  // 2. THE JSON-LD SCHEMA GRAPH (The "ContactPage" & "LocalBusiness" Entity)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Shri Kishori Design Studio",
    "description": "Innovate, Transform, Grow – Advanced Tech Services redefined. Official contact portal for SK Design Studio.",
    "url": "https://skds.in/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Shri Kishori Design Studio",
      "image": "https://skds.in/images/logo1.png",
      "telephone": "+917018671028",
      "email": "hello@skds.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nahan",
        "addressRegion": "Himachal Pradesh",
        "addressCountry": "IN"
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
        <Contact />
      </main>
    </>
  );
}