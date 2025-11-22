import { describe, expect, test } from "vitest";

import { app } from "~/lib/hono";

describe("api", () => {
  test("GET /api/test", async () => {
    const response = await app.request("/api/test");
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: "Hello, world!" });
  });
});
