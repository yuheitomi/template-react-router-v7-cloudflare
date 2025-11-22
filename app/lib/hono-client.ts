import { env } from "cloudflare:workers";
import { hc } from "hono/client";

import type { AppType } from "./hono";

export const client = hc<AppType>(env.VITE_API_URL ?? "http://localhost:5173");
