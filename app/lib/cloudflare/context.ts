import { createContext, type RouterContextProvider } from "react-router";

export const CfContext = createContext<{
  env: Env;
  ctx: ExecutionContext;
}>();

export function getCfContext(context: Readonly<RouterContextProvider>) {
  const cfContext = context.get(CfContext);
  if (!cfContext) {
    throw new Error("Cloudflare context is not available");
  }
  return cfContext;
}
