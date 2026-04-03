import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Elite Digital Capabilities | Services at SK Design Studio",
  description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Explore our capabilities in high-performance web architecture, app ecosystems, UI/UX design, and brand identity.",
  keywords: [
    "SKDS Services",
    "Full-Stack Web Development",
    "App Development India",
    "UI/UX Design Agency",
    "Digital Marketing SEO",
    "Brand Identity Architecture",
    "Next.js Tech Consulting",
    "Advanced Tech Services"
  ],
  alternates: {
    canonical: "https://skds.in/services", // Directs all authority to this exact URL
  },
  openGraph: {
    title: "Elite Digital Capabilities | Services at SK Design Studio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Architecting scalable tech solutions, from immersive UI/UX to full-stack applications.",
    type: "website",
    url: "https://skds.in/services",
    images: [
      {
        url: "/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "Services at Shri Kishori Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Digital Capabilities | SK Design Studio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Explore our full-stack engineering and design services.",
    images: ["/images/logo1.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}