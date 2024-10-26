import { useLocation } from "@remix-run/react";

export function pathIs(pattern: string) {
  let location = useLocation();

  let regex = new RegExp(pattern);

  return regex.test(location.pathname);
}
