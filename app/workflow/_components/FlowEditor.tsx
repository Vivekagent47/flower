"use client";

import { Workflow } from "@prisma/client";
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

type FlowEditorProps = {
  workflow: Workflow;
};

export default function FlowEditor({ workflow }: FlowEditorProps) {
  const [nodes, setNodes, onNodeChange] = useNodesState([]);
  const [edges, setEdges, onEdgeChange] = useEdgesState([]);

  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgeChange}
        onNodesChange={onNodeChange}
      >
        <Controls position="top-left" />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </main>
  );
}
