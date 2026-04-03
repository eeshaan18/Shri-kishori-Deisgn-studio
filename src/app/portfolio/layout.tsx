import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Archive | Elite Digital Portfolio of SK Design Studio",
  description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Explore our curated archive of high-performance web applications, immersive UI/UX interfaces, and premium brand architectures.",
  keywords: [
    "SKDS Portfolio",
    "Next.js Web Projects",
    "UI/UX Case Studies",
    "App Development Portfolio",
    "Brand Identity Archive",
    "Creative Agency Work",
    "Digital Architecture Case Studies",
    "Advanced Tech Services"
  ],
  alternates: {
    canonical: "https://skds.in/portfolio", // Locks down the SEO authority to this exact path
  },
  openGraph: {
    title: "The Archive | Elite Digital Portfolio of SK Design Studio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Step into our gallery of high-performance digital architectures and brand identities.",
    type: "website",
    url: "https://skds.in/portfolio",
    images: [
      {
        url: "/images/logo1.png", // Highly recommend a custom collage of your best work here later!
        width: 1200,
        height: 630,
        alt: "Portfolio of Shri Kishori Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Archive | Elite Digital Portfolio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Explore the SKDS proof of work.",
    images: ["/images/logo1.png"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}