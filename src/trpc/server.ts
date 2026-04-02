import "server-only";

import { createTRPCContext } from "@/server/api/trpc";
import { appRouter } from "@/server/api/root";

export const api = async () => {
  // Ideally wrap header propagation here if needed
  return appRouter.createCaller({ headers: new Headers() });
};
