import { NodeProps } from "@xyflow/react";
import { memo } from "react";
import NodeCard from "./NodeCard";

const NodeComponent = memo((props: NodeProps) => {
  return <NodeCard nodeId={props.id}>App Node</NodeCard>;
});

export default NodeComponent;

NodeComponent.displayName = "NodeComponent";
