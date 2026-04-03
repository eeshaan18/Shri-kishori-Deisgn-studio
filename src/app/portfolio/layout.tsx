import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio & Our Work | Shri Kishori Design Studio",
  description: "Explore our archive of high-performance digital architectures, premium brand identities, and immersive UI/UX design projects by Shri Kishori Design Studio.",
  keywords: ["Design Portfolio", "UI/UX Projects", "Digital Architecture Work", "Brand Identity Case Studies", "SKDS Portfolio", "Web Design Examples"],
  openGraph: {
    title: "Portfolio & Our Work | Shri Kishori Design Studio",
    description: "Explore our archive of high-performance digital architectures, premium brand identities, and immersive UI/UX design projects by Shri Kishori Design Studio.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Our Work | Shri Kishori Design Studio",
    description: "Explore our archive of high-performance digital architectures, premium brand identities, and immersive UI/UX design projects by Shri Kishori Design Studio.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}