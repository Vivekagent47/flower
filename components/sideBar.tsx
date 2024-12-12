"use client";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from "lucide-react";
import Logo from "./Logo";

const routes = [
  {
    label: "Home",
    href: "",
    icon: HomeIcon,
  },
  {
    label: "workflows",
    href: "workflows",
    icon: Layers2Icon,
  },
  {
    label: "credentials",
    href: "credentials",
    icon: ShieldCheckIcon,
  },
  {
    label: "billing",
    href: "billing",
    icon: CoinsIcon,
  },
];

function DesktopSideBar() {
  return (
    <div className="relative hidden h-screen w-full min-w-[280px] max-w-[280px] border-separate overflow-hidden border-r-2 bg-primary/5 text-muted-foreground dark:bg-secondary/30 dark:text-foreground md:block">
      <div className="flex border-separate items-center justify-center gap-2 border-b-[1px] p-4">
        <Logo />
      </div>

      <div className="flex flex-col p-2"></div>
    </div>
  );
}

export default DesktopSideBar;
