import { createRequestHandler, RouterContextProvider } from "react-router";

import { CfContext } from "~/lib/cloudflare/context";

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

// Use the default router handler
export default {
  async fetch(request, env, ctx) {
    const context = new RouterContextProvider();
    context.set(CfContext, { env, ctx });
    return requestHandler(request, context);
  },
} satisfies ExportedHandler<Env>;
