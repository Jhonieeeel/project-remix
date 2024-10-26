import { Outlet } from "@remix-run/react";

export default function GuestShop() {
  return (
    <div className="min-h-screen w-full bg-gray-200">
      <Outlet />
    </div>
  );
}
