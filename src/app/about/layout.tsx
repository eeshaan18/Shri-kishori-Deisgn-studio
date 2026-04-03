import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Architecture of Innovation | About SK Design Studio",
  description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Discover the engineering precision, soulful design, and the founder's vision driving Shri Kishori Design Studio.",
  keywords: [
    "About SKDS",
    "Eeshaan Aggarwal",
    "Creative Agency Founder",
    "Full Stack Tech Agency",
    "Digital Architecture",
    "UI/UX Agency India",
    "Design Studio Story",
    "Advanced Tech Services"
  ],
  alternates: {
    canonical: "https://skds.in/about", // Critical: Tells Google this is the official About page
  },
  openGraph: {
    title: "The Architecture of Innovation | About SK Design Studio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Discover the vision and engineering precision driving our digital architecture.",
    type: "website",
    url: "https://skds.in/about",
    images: [
      {
        url: "/images/logo1.png", 
        width: 1200,
        height: 630,
        alt: "About Shri Kishori Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Architecture of Innovation | About SK Design Studio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined.",
    images: ["/images/logo1.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}