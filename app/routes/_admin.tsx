import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Sidebar from "~/components/sidebar";

export async function loader({ request }: LoaderFunctionArgs) {
  let pathname = new URL(request.url).pathname;

  return { pathname };
}

export default function Admin() {
  return (
    <div className="flex min-h-screen w-full flex-row">
      <Sidebar />
      <main className="w-full bg-gray-200">
        <Outlet />
      </main>
    </div>
  );
}
