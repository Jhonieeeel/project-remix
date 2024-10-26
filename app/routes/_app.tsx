import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Navbar from "~/components/navbar";

export async function loader({ request }: LoaderFunctionArgs) {
  return { auth: "Test" };
}

export default function GuesyLayout() {
  let { auth } = useLoaderData<typeof loader>();

  return (
    <>
      <Navbar auth={auth} />
      <main className="min-h-screen w-full bg-gray-200 p-6">
        <Outlet />
      </main>
    </>
  );
}
