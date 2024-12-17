import { AppNode } from "@/types/appNode";
import { TaskType } from "@/types/task";
import { XYPosition } from "@xyflow/react";

export function createFlowNode(
  nodeType: TaskType,
  position?: XYPosition,
): AppNode {
  return {
    id: crypto.randomUUID(),
    type: "Node",
    data: {
      type: nodeType,
      inputs: {},
    },
    position: position ?? { x: 0, y: 0 },
  };
}
