"use server";

import prisma from "@/lib/prisma";
import { createWorkFlowShema } from "@/schema/Workflows";
import { WorkflowStatus } from "@/types/workflows";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function getWorkflowsForUser() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthenticated");
  }

  return prisma.workflow.findMany({
    where: { userId },
    orderBy: { createdAt: "asc" },
  });
}

export async function getWokflowById(id: string, userId: string) {
  return prisma.workflow.findUnique({ where: { id, userId } });
}

export async function createWorkflow(
  form: z.infer<typeof createWorkFlowShema>,
) {
  const { success, data } = createWorkFlowShema.safeParse(form);

  if (!success) {
    throw new Error("Invalid from data");
  }

  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthenticated");
  }

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: "TODO",
      ...data,
    },
  });

  if (!result) {
    throw new Error("Failed to create workflow");
  }

  redirect(`/workflow/editor/${result.id}`);
}

export async function deleteWorkflow(id: string) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthenticated");
  }

  await prisma.workflow.delete({ where: { id, userId } });

  revalidatePath("/workflows");
}
