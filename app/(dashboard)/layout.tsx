import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import DesktopSideBar from "@/components/sideBar";
import { Separator } from "@/components/ui/separator";
import React from "react";

function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <DesktopSideBar />
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="container flex h-[50px] items-center justify-between px-6 py-4">
          <BreadcrumbHeader />
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="container flex-1 py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardLayout;
