import { Hono } from "hono";

const app = new Hono().basePath("/api").get("/test", (c) => c.json({ message: "Hello, world!" }));

export { app };
