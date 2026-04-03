import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Initiate Transmission | Contact SK Design Studio",
  description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Ready to architect your next digital reality? Get in touch with Shri Kishori Design Studio.",
  keywords: [
    "Contact SKDS",
    "Hire UI/UX Agency",
    "Hire Next.js Developers",
    "Web Design Agency India",
    "Tech Consulting Contact",
    "Digital Architecture Collaboration",
    "Creative Studio Inquiry",
    "Advanced Tech Services"
  ],
  alternates: {
    canonical: "https://skds.in/contact", // Critical: Tells Google this is the official Contact page
  },
  openGraph: {
    title: "Initiate Transmission | Contact SK Design Studio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined. Let's collaborate on your next big digital architecture project.",
    type: "website",
    url: "https://skds.in/contact",
    images: [
      {
        url: "/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "Contact Shri Kishori Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Initiate Transmission | Contact SK Design Studio",
    description: "Innovate, Transform, Grow – Advanced Tech Services redefined.",
    images: ["/images/logo1.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}