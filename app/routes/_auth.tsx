import { Outlet } from "@remix-run/react";

export default function Auth() {
  return (
    <div className="min-h-screen w-full">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
