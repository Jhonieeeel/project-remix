interface ComponentProp {
  id: number;
  product_image: string;
  product_name: string;
  product_date: string;
  product_price: number;
}

export default function ReviewsTable() {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="inline-block min-w-full p-1.5 align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                  >
                    Img
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                  >
                    Reviews
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-100">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                    IMG
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                    Mark Laurence Mejo
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quam, incidunt?
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                    IMG
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                    Mark Laurence Mejo
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quam, incidunt?
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                    IMG
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                    Mark Laurence Mejo
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quam, incidunt?
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
