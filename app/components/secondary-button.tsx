import { Link } from "@remix-run/react";
import { twMerge } from "tailwind-merge";
import { AnchorProps, ButtonProps, isAnchor } from "~/utils/button";

export default function SecondaryButton(props: AnchorProps | ButtonProps) {
  const defaultStyles =
    "inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cornflower-blue-500 focus:ring-offset-2";

  if (isAnchor(props)) {
    return (
      <Link
        {...props}
        to={props.href ?? ""}
        className={twMerge(defaultStyles, props.className)}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      type={props.type}
      className={twMerge(defaultStyles, props.className)}
    >
      {props.children}
    </button>
  );
}
