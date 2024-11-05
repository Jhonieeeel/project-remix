import {
  LayoutDashboard,
  Users,
  ShoppingBasket,
  ShoppingCart,
  Star,
  Package2,
} from "lucide-react";

import SidebarNavLink from "./sidebar-nav-link";
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
          <SidebarNavLink active={pathIs("admin/dashboard.*")} url={"admin/dashboard"}>
            <LayoutDashboard />
            Dashboard
          </SidebarNavLink>

          <SidebarNavLink active={pathIs("admin/products.*")} url={"admin/products"}>
            <Package2 />
            Products
          </SidebarNavLink>

          <SidebarNavLink active={pathIs("admin/orders.*")} url={"admin/orders"}>
            <ShoppingCart />
            Orders
          </SidebarNavLink>

          <SidebarNavLink active={pathIs("admin/customers.*")} url={"admin/customers"}>
            <Users />
            Customers
          </SidebarNavLink>

          <SidebarNavLink active={pathIs("admin/reviews.*")} url={"admin/reviews"}>
            <Star />
            Reviews
          </SidebarNavLink>
        </ul>
      </div>
    </div>
  );
}
