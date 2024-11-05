import { LinkProps, NavLink as RNavLink } from "@remix-run/react";
import { twMerge } from "tailwind-merge";

export default function SidebarNavLink({ to, className, children }: LinkProps) {
  return (
    <RNavLink
      to={to ?? ""}
      className={({ isActive }) =>
        twMerge(
          "inline-flex items-center gap-x-3 rounded-md px-4 py-2 text-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cornflower-blue-500",
          isActive && "bg-gray-50 text-gray-800",
          !isActive && "text-white hover:bg-gray-50 hover:text-gray-800",
          className,
        )
      }
    >
      {children}
    </RNavLink>
  );
}
