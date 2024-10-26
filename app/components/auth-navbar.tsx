import { Link } from "@remix-run/react";
import { Pencil, User } from "lucide-react";

export default function AuthNavbar() {
  return (
    <header className="z-50 flex w-full flex-wrap bg-white md:flex-nowrap md:justify-start">
      <nav className="relative w-full bg-[#6F99EA] px-4 py-2 sm:px-6 md:flex md:items-center md:justify-between md:gap-3">
        {/* Brand */}
        <div className="flex items-center justify-between gap-x-1">
          <Link
            className="flex-none text-xl font-semibold text-gray-950"
            to={"/"}
            aria-label="Brand"
          >
            <img className="w-16" src="/public/urios_logo.svg" alt="" />
          </Link>
        </div>

        <div
          id="hs-header-base"
          className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
          aria-labelledby="hs-header-base-collapse"
        >
          <div className="max-h-[75vh] overflow-hidden overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2">
            <div className="flex flex-col gap-0.5 py-2 md:flex-row md:items-center md:gap-1 md:py-0">
              <div className="grow">
                <div className="ml-5 flex flex-col gap-0.5 md:flex-row md:items-center md:justify-start md:gap-1">
                  <h3 className="text-2xl font-bold">SHOP</h3>
                </div>
              </div>

              <div className="my-2 md:mx-2 md:my-0">
                <div className="h-px w-full bg-gray-100 md:h-4 md:w-px md:bg-gray-300 dark:bg-neutral-700"></div>
              </div>

              <div className="flex flex-wrap items-center gap-x-1.5">
                <Link
                  className="flex items-center gap-x-1.5 rounded-lg p-2 text-sm text-gray-800 hover:font-semibold focus:outline-none"
                  to={"/login"}
                >
                  <Pencil className="w-4" />
                  Login
                </Link>
                <Link
                  className="flex items-center gap-x-1.5 rounded-lg p-2 text-sm text-gray-800 hover:font-semibold focus:outline-none"
                  to={"/register"}
                >
                  <User className="w-4" />
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
