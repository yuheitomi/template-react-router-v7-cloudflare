import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>()
  .basePath("/api")
  .get("/test", (c) => c.json({ message: "Hello, world!" }));

type AppType = typeof app;

export { app, type AppType };
