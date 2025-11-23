import { SELF } from "cloudflare:test";
import { describe, expect, test } from "vitest";

import { app } from "~/lib/hono";

describe("api", () => {
  test("GET /api/test (Hono)", async () => {
    const response = await app.request("/api/test");
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: "Hello, world!" });
  });

  test("GET /api/test (React Router)", async () => {
    const response = await SELF.fetch("http://localhost/api/test");
    console.log(JSON.stringify(response, null, 2));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: "Hello, world!" });
  });
});
