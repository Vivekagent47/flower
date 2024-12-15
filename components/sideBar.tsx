"use client";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const routes = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "Workflows",
    href: "/workflows",
    icon: Layers2Icon,
  },
  {
    label: "Credentials",
    href: "/credentials",
    icon: ShieldCheckIcon,
  },
  {
    label: "Billing",
    href: "/billing",
    icon: CoinsIcon,
  },
];

function DesktopSideBar() {
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 1 && pathName.includes(route.href),
    ) || routes[0];

  return (
    <div className="relative hidden h-screen w-full min-w-[280px] max-w-[280px] border-separate overflow-hidden border-r-2 bg-primary/5 text-muted-foreground dark:bg-secondary/30 dark:text-foreground md:block">
      <div className="flex border-separate items-center justify-center gap-2 border-b-[1px] p-4">
        <Logo />
      </div>

      <div className="p-2">TODO CREDITS</div>
      <div className="flex flex-col gap-2 p-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileSideBar() {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathName.includes(route.href),
    ) || routes[0];

  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="flex items-center justify-between">
        <Sheet open={isOpen} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[200px] space-y-4 sm:w-[540px]"
            side="left"
          >
            <Logo />
            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={buttonVariants({
                    variant:
                      activeRoute.href === route.href
                        ? "sidebarActiveItem"
                        : "sidebarItem",
                  })}
                  onClick={() => setOpen((prv) => !prv)}
                >
                  <route.icon size={20} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default DesktopSideBar;
