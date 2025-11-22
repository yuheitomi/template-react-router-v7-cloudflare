import { createContext, createRequestHandler, RouterContextProvider } from "react-router";

import { getHonoApp } from "../server";

export const CloudflareContext = createContext<{
  env: Env;
  ctx: ExecutionContext;
}>();

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

// Comment out if you want to use the default router handler
// export default {
//   async fetch(request, env, ctx) {
//     const context = new RouterContextProvider();
//     context.set(CloudflareContext, { env, ctx });
//     return requestHandler(request, context);
//   },
// } satisfies ExportedHandler<Env>;

// Use the Hono handler to handle requests
const app = getHonoApp(async (request, env, ctx) => {
  const context = new RouterContextProvider();
  context.set(CloudflareContext, { env, ctx });
  return requestHandler(request, context);
});

export default app;
