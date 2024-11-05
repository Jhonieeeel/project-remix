import { Link } from "@remix-run/react";
import { Pencil, ShoppingCart, User } from "lucide-react";

export default function AppNavbar() {
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
                  <Link
                    className="flex items-center rounded-lg p-2 text-sm text-gray-950 hover:font-semibold focus:bg-gray-100 focus:outline-none"
                    to={"/"}
                  >
                    <svg
                      className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Home
                  </Link>

                  <Link
                    className="flex items-center rounded-lg p-2 text-sm text-gray-950 hover:font-semibold focus:bg-gray-100 focus:outline-none"
                    to={"/shop"}
                  >
                    <svg
                      className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Shop
                  </Link>

                  <Link
                    className="flex items-center rounded-lg p-2 text-sm text-gray-950 hover:font-semibold focus:bg-gray-100 focus:outline-none"
                    to={"/about"}
                  >
                    <svg
                      className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 12h.01" />
                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                    About
                  </Link>

                  <Link
                    className="flex items-center rounded-lg p-2 text-sm text-gray-950 hover:font-semibold focus:bg-gray-100 focus:outline-none"
                    to={"/contact"}
                  >
                    <svg
                      className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                      <path d="M18 14h-8" />
                      <path d="M15 18h-5" />
                      <path d="M10 6h8v4h-8V6Z" />
                    </svg>
                    Contact
                  </Link>
                </div>
              </div>

              <div className="my-2 md:mx-2 md:my-0">
                <div className="h-px w-full bg-gray-100 dark:bg-neutral-700 md:h-4 md:w-px md:bg-gray-300"></div>
              </div>

              <div className="flex flex-wrap items-center gap-x-1.5">
                <Link
                  className="flex items-center gap-x-1.5 rounded-lg p-2 text-sm text-gray-800 hover:font-semibold focus:outline-none"
                  to={"/cart"}
                >
                  <ShoppingCart className="w-4" />
                  Cart
                </Link>
                <Link
                  className="flex items-center gap-x-1.5 rounded-lg p-2 text-sm text-gray-800 hover:font-semibold focus:outline-none"
                  to={"/myaccount"}
                >
                  <User className="w-4" />
                  My Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
