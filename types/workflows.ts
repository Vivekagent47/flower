import { createWorkFlowShema } from "@/schema/Workflows";
import { z } from "zod";

export type createWorkFlowShemaType = z.infer<typeof createWorkFlowShema>;
export enum WorkflowStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}
