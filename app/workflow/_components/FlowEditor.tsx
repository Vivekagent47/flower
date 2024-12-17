"use client";

import { createFlowNode } from "@/lib/workflow/createFlowNode";
import { TaskType } from "@/types/task";
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
import NodeComponent from "./nodes/NodeComponents";

type FlowEditorProps = {
  workflow: Workflow;
};

const NodeTypes = {
  Node: NodeComponent,
};

const snapGrid: [number, number] = [50, 50];
const fitViewOptiosn = { padding: 1 };

export default function FlowEditor({ workflow }: FlowEditorProps) {
  const [nodes, setNodes, onNodeChange] = useNodesState([
    createFlowNode(TaskType.LAUNCH_BROWSER),
  ]);
  const [edges, setEdges, onEdgeChange] = useEdgesState([]);

  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgeChange}
        onNodesChange={onNodeChange}
        nodeTypes={NodeTypes}
        snapToGrid
        snapGrid={snapGrid}
        fitView
        fitViewOptions={fitViewOptiosn}
      >
        <Controls position="top-left" fitViewOptions={fitViewOptiosn} />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </main>
  );
}
