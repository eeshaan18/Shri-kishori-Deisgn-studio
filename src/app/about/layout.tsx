import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Shri Kishori Design Studio",
  description: "Learn more about Shri Kishori Design Studio. Discover our story, meet our founder, and understand the vision driving our high-performance digital architecture.",
  keywords: ["About SKDS", "Design Studio Story", "UI/UX Agency", "Digital Architecture", "Creative Agency Founder"],
  openGraph: {
    title: "About Us | Shri Kishori Design Studio",
    description: "Learn more about Shri Kishori Design Studio. Discover our story, meet our founder, and understand the vision driving our high-performance digital architecture.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Shri Kishori Design Studio",
    description: "Learn more about Shri Kishori Design Studio. Discover our story, meet our founder, and understand the vision driving our high-performance digital architecture.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}