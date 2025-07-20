import { z } from "zod";

export const productFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  images: z.any().optional(),
});
export type ProductFormValues = z.infer<typeof productFormSchema>;
