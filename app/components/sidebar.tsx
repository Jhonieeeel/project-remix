import {
  LayoutDashboard,
  Users,
  ShoppingBasket,
  ShoppingCart,
  Star,
} from "lucide-react";

import NavLink from "./nav-link";
import { pathIs } from "~/utils/request";

export default function Sidebar() {
  return (
    <div className="min-h-screen w-[300px] bg-white p-6">
      <div className="flex flex-col items-center gap-y-14">
        <div className="flex items-center justify-start">
          <img src="/public/urios_logo.svg" alt="" />
          <p className="text-lg font-semibold">Admin</p>
        </div>
        <ul className="w-full space-y-4">
          <NavLink active={pathIs("admin/dashboard.*")} url={"admin/dashboard"}>
            <LayoutDashboard />
            Dashboard
          </NavLink>

          <NavLink active={pathIs("admin/orders.*")} url={"admin/orders"}>
            <ShoppingCart />
            Orders
          </NavLink>

          <NavLink active={pathIs("admin/customers.*")} url={"admin/customers"}>
            <Users />
            Customers
          </NavLink>

          <NavLink active={pathIs("admin/reviews.*")} url={"admin/reviews"}>
            <Star />
            Reviews
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
