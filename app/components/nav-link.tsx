import { NavLink as RNavLink, LinkProps } from "@remix-run/react";
import { twMerge } from "tailwind-merge";

export default function NavLink({ to, className, children }: LinkProps) {
  return (
    <RNavLink
      to={to ?? ""}
      className={({ isActive }) =>
        twMerge(
          "inline-flex items-center text-sm font-medium leading-5 text-gray-50 transition duration-150 ease-in-out focus:outline-none",
          isActive && "underline underline-offset-4",
          !isActive &&
            "hover:text-white hover:underline hover:underline-offset-4",
        )
      }
    >
      {children}
    </RNavLink>
  );
}
