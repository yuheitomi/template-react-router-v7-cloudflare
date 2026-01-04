import { useQueryState } from "nuqs";

import { getCfContext } from "~/lib/cloudflare/context";

import type { Route } from "./+types/index";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: getCfContext(context).env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const [q, setQ] = useQueryState("q", {
    history: "replace",
    defaultValue: loaderData.message,
    clearOnDefault: false,
  });

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="w-96 rounded border border-gray-300 p-1"
      />
    </div>
  );
}
