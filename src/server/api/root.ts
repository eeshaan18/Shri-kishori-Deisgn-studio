import { createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
  healthCheck: publicProcedure.query(() => {
    return { status: "ok" };
  }),
});

export type AppRouter = typeof appRouter;
