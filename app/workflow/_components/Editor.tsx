import { Workflow } from "@prisma/client";
import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./FlowEditor";

type EditorProps = {
  workflow: Workflow;
};

export default function Editor({ workflow }: EditorProps) {
  return (
    <ReactFlowProvider>
      <div className="flex h-full w-full flex-col overflow-hidden">
        <section className="flex h-full overflow-auto">
          <FlowEditor workflow={workflow} />
        </section>
      </div>
    </ReactFlowProvider>
  );
}
