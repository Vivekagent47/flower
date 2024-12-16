import { getWokflowById } from "@/actions/workflows";
import Editor from "@/app/workflow/_components/Editor";
import { auth } from "@clerk/nextjs/server";

export default async function WorkFlowEditorPage({
  params,
}: {
  params: { workflowId: string };
}) {
  const workflowId = params.workflowId;
  const { userId } = await auth();

  if (!userId) {
    return <div>Unauthenticated</div>;
  }

  const workFlow = await getWokflowById(workflowId, userId);

  if (!workFlow) {
    return <div>Workflow not found.</div>;
  }

  return <Editor workflow={workFlow} />;
}
