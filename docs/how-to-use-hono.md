# How to use Hono to handle new requests

You can use Hono for handling new requests intead of the default handler.

```ts
// server/index.ts

import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>().get("/hono", (c) => {
  return c.text("Hello Hono!");
});

export const getHonoApp = (
  handler: (request: Request, env: Env, ctx: ExecutionContext) => Promise<Response>
) => {
  app.all("*", async (context) => {
    return handler(context.req.raw, context.env, context.executionCtx as ExecutionContext);
  });

  return app;
};
```

```ts
// workers/app.ts

import { getHonoApp } from "./server";

const app = getHonoApp(async (request, env, ctx) => {
  const context = new RouterContextProvider();
  context.set(CloudflareContext, { env, ctx });
  return requestHandler(request, context);
});

export default app;
```
