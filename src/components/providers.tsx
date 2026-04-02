"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { TRPCReactProvider } from "@/trpc/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <div className="z-[99999]">
        <Toaster />
      </div>
      {children}
    </TRPCReactProvider>
  );
}
