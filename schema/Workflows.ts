import { z } from "zod";

export const createWorkFlowShema = z.object({
  name: z.string().max(50),
  description: z.string().max(80).optional(),
});
