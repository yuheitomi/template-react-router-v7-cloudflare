import { app } from "~/lib/hono";

import type { Route } from "./+types/$";

export async function loader({ request }: Route.LoaderArgs) {
  return app.fetch(request);
}

export async function action({ request }: Route.ActionArgs) {
  return app.fetch(request);
}
