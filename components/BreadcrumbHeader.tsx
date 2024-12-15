"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { MobileSideBar } from "./sideBar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "./ui/breadcrumb";

function BreadcrumbHeader() {
  const pathName = usePathname();
  const paths =
    pathName === "/" ? [""] : pathName.split("/").filter((v) => v !== "");

  return (
    <div className="flex-start flex items-center">
      <MobileSideBar />
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => {
            return (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink className="capitalize" href={`/${path}`}>
                    {path === "" ? "home" : path}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbHeader;
