import { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import PrimaryButton from "~/components/primary-button";
import TextInput from "~/components/text-input";

export const meta: MetaFunction = () => {
  return [{ title: "Products - FSUU Online Book Store" }];
};

export async function loader() {
  return { products: [] };
}

export default function Products() {
  let { products } = useLoaderData<typeof loader>();

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="flex flex-col gap-y-4 px-4 sm:gap-y-0 sm:px-0 md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Products
          </h2>

          <div className="flex items-center">
            <PrimaryButton href="/admin/products/new">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="me-2 size-4 shrink-0"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Add Product
            </PrimaryButton>
          </div>
        </div>

        <div className="mt-2 px-4 sm:px-0">
          <div className="relative">
            <TextInput
              className="peer block w-full max-w-xs ps-9 text-sm"
              placeholder="Search for a product"
            />
            <div className="pointer-events-none absolute inset-y-0 start-0 inline-flex items-center ps-3 peer-disabled:pointer-events-none peer-disabled:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0 text-gray-500"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>

        <table className="mt-4 w-full divide-y divide-gray-300 bg-white shadow-sm sm:rounded-lg">
          <thead>
            <tr className="divide-x divide-gray-300">
              <th className="px-4 py-3 text-start text-xs font-semibold uppercase text-gray-600">
                Name
              </th>
              <th className="px-4 py-3 text-start text-xs font-semibold uppercase text-gray-600">
                SKU
              </th>
              <th className="px-4 py-3 text-start text-xs font-semibold uppercase text-gray-600">
                Price
              </th>
              <th className="px-4 py-3 text-start text-xs font-semibold uppercase text-gray-600">
                Stock
              </th>
              <th className="px-4 py-3 text-start text-xs font-semibold uppercase text-gray-600">
                Categories
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {products.length === 0 && (
              <tr role="alert">
                <td
                  colSpan={5}
                  className="px-6 py-4 text-center text-sm text-gray-800"
                >
                  <p>No products available yet.</p>
                  <p className="mt-1">
                    Click <strong>"Add Product"</strong> to get started!
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
