import React from "react";
import ServicesSection from "@/components/Services/services/index"; 
import WhyChooseUs from "@/components/Services/whyChooseUs/index"; // Add this line!

export const metadata = {
  title: "Our Services | Shri Kishori Design Studio",
  description: "High-performance digital architecture and immersive UI/UX.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#030406] min-h-screen pt-20">
      <ServicesSection />
      <WhyChooseUs /> {/* Add this line! */}
    </main>
  );
}