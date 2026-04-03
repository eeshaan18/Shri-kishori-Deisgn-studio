import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services | Shri Kishori Design Studio",
  description: "Explore the comprehensive services offered by Shri Kishori Design Studio, including high-performance digital architecture, immersive UI/UX design, and more.",
  keywords: ["Design Services", "UI/UX Design", "Digital Architecture", "Web Development", "Brand Identity", "SKDS Services"],
  openGraph: {
    title: "Our Services | Shri Kishori Design Studio",
    description: "Explore the comprehensive services offered by Shri Kishori Design Studio, including high-performance digital architecture, immersive UI/UX design, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Shri Kishori Design Studio",
    description: "Explore the comprehensive services offered by Shri Kishori Design Studio, including high-performance digital architecture, immersive UI/UX design, and more.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}