"use client";

import { cn } from "@/lib/utils";
import { useReactFlow } from "@xyflow/react";
import React from "react";

type NodeCardProps = {
  children: React.ReactNode;
  nodeId: string;
  isSelected: boolean;
};

export default function NodeCard({
  children,
  nodeId,
  isSelected,
}: NodeCardProps) {
  const { getNode, setCenter } = useReactFlow();

  return (
    <div
      onDoubleClick={() => {
        const node = getNode(nodeId);
        if (!node) {
          return;
        }

        const { position, measured } = node;
        if (!position || !measured) {
          return;
        }
        const { x, y } = position;
        const { height, width } = measured;
        if (x === undefined || y === undefined) {
          return;
        }

        const xPosition = x + width! / 2;
        const yPosition = y + height! / 2;
        setCenter(xPosition, yPosition, { zoom: 1, duration: 500 });
      }}
      className={cn(
        "flex w-[420px] border-separate cursor-pointer flex-col gap-1 rounded-md border-2 bg-background text-xs",
        isSelected && "border-primary",
      )}
    >
      {children}
    </div>
  );
}
