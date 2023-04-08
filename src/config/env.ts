import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string(),
  VITE_WEB_NAME: z.string(),
  MODE: z.string(),
});

export type ENVType = z.infer<typeof envSchema>;
