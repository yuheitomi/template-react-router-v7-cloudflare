import { getClient } from "~/lib/hono-client";

import type { Route } from "./+types/test";

export async function clientLoader() {
  const client = getClient();
  const response = await client.api.test.$get();
  if (!response.ok) {
    throw new Error("Failed to fetch test");
  }
  const data = await response.json();
  return { message: data.message };
}

export default function Page({ loaderData }: Route.ComponentProps) {
  const { message } = loaderData;
  return <div>{message}</div>;
}
