import { useLoaderData } from "@remix-run/react";
import ProductTable from "~/components/tables";
import products from "~/data/product";

export async function loader() {
  const items = products;
  return { items };
}

export default function AdminProductIndex() {
  const { items } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="min-h-screen rounded-md bg-white p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-md px-6 font-semibold">Products</h4>
          <div className="flex items-center space-x-3">
            <button className="text-md rounded-md bg-gray-700 px-4 py-2 font-semibold text-gray-200 hover:bg-gray-800">
              Add Product
            </button>
            <div className="max-w-sm">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-3.5">
                  <svg
                    className="size-4 shrink-0 text-gray-400"
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
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <input
                  className="block w-full rounded-lg border border-gray-300 py-3 pe-4 ps-10 text-sm text-gray-600"
                  type="text"
                  role="combobox"
                  aria-expanded="false"
                  placeholder="Type a name"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <ProductTable items={items} />
      </div>
    </>
  );
}