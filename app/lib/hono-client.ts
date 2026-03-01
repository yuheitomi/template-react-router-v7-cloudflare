import { hc } from "hono/client";

import type { AppType } from "./hono";

const getBaseUrl = () => {
  // clientLoader only runs on the client, so window is always defined
  if (typeof window === "undefined") {
    throw new Error("getClient() can only be used in client-side code (clientLoader)");
  }
  return window.location.origin;
};

export const getClient = () => {
  return hc<AppType>(getBaseUrl());
};
