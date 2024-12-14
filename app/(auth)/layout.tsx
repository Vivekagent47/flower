import Logo from "@/components/Logo";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <Logo />
      {children}
    </div>
  );
}
