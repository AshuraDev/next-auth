import React from "react";
import { Navbar } from "./_components/navBar";
import { Toaster } from "@/components/ui/sonner";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center">
      <Toaster />
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
