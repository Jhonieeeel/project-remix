import { Link, Outlet } from "@remix-run/react";
import NavLink from "~/components/nav-link";
import fsuuLogo from "~/images/urios-logo.png?url";

export default function ApplicationLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="border-b border-gray-100 bg-cornflower-blue-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <Link to="/">
                  <img
                    src={fsuuLogo}
                    className="block h-9 w-auto drop-shadow-xl"
                  />
                </Link>
              </div>

              <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>

            <div className="flex items-center gap-x-2">
              <Link
                to="/login"
                className="inline-flex items-center text-sm font-medium text-gray-50 hover:text-white hover:underline hover:underline-offset-4"
              >
                Login
              </Link>
              <span className="text-xs text-gray-50">|</span>
              <Link
                to="/login"
                className="inline-flex items-center text-sm font-medium text-gray-50 hover:text-white hover:underline hover:underline-offset-4"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
