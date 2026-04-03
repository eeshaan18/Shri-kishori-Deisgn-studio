import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | Shri Kishori Design Studio",
  description: "Get in touch with Shri Kishori Design Studio. We are ready to collaborate on your next big digital architecture and UI/UX project.",
  keywords: ["Contact SKDS", "Hire Design Studio", "UI/UX Agency Contact", "Digital Architecture Collaboration", "Web Design Inquiry"],
  openGraph: {
    title: "Contact | Shri Kishori Design Studio",
    description: "Get in touch with Shri Kishori Design Studio. We are ready to collaborate on your next big digital architecture and UI/UX project.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Shri Kishori Design Studio",
    description: "Get in touch with Shri Kishori Design Studio. We are ready to collaborate on your next big digital architecture and UI/UX project.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}