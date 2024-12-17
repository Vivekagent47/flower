"use client";

import React from "react";

type NodeCardProps = {
  children: React.ReactNode;
  nodeId: string;
};

export default function NodeCard({ children, nodeId }: NodeCardProps) {
  return <div>{children}</div>;
}
