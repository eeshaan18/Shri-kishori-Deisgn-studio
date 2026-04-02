import React from "react";
// Pointing to the component we will build next
import PortfolioSection from "@/components/Portfolio/index"; 

export const metadata = {
  title: "Our Work | Shri Kishori Design Studio",
  description: "Explore our archive of high-performance digital architectures and premium brand identities.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-[#030406] min-h-screen pt-20">
      <PortfolioSection />
    </main>
  );
}