interface ComponentProp {
  id: number;
  product_name: string;
  product_sku: string;
  product_price: number;
  product_stock: boolean;
  product_image: string;
  product_category: string;
}

export default function ProductTable({ items }: { items: ComponentProp[] }) {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="inline-block min-w-full p-1.5 align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                  >
                    Img
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                  >
                    SKU
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                  >
                    Stock
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                  >
                    Categories
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium uppercase text-gray-500 dark:text-neutral-500"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-start">
                {items.map((item: any) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-800">
                      <img
                        src={item.product_image}
                        className="h-10 w-10"
                        alt=""
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-800">
                      {item.product_name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-800">
                      {item.product_sku}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 text-center text-sm font-medium text-gray-800">
                      P {item.product_price.toFixed(2)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 text-center text-sm font-medium text-gray-800">
                      {item.product_stock ? "In stock" : "Out of Stock"}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 text-center text-sm font-medium text-gray-800">
                      {item.product_category}
                    </td>
                    <td className="whitespace-nowrap px-6 py-3 text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
