import { Link } from "@remix-run/react";
import { ReactNode } from "react";

//  hover:bg-blue-300

export default function NavLink({
  active,
  url,
  children,
}: {
  active: boolean;
  url: string;
  children: ReactNode;
}) {
  return (
    <li
      className={
        "flex cursor-pointer items-center gap-3 rounded-lg p-3 " +
        (active ? "bg-blue-300 font-semibold" : " font-normal")
      }
    >
      <Link className="flex gap-x-2" to={url}>
        {children}
      </Link>
    </li>
  );
}
