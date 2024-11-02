import { Outlet } from "@remix-run/react";
import { Carousel } from "flowbite-react";

export default function GuestShop() {
  return (
    <main className="min-h-screen w-full bg-gray-200">
      <Outlet />
    </main>
  );
}
