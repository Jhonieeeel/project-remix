import ReviewsTable from "~/components/reviews-table";

import { data_1, data_2 } from "~/data/test";

export default function AdminReviewsIndex() {
  return (
    <div className="min-h-screen rounded-md bg-white p-4">
      <div className="flex items-center justify-between">
        <h4 className="text-md px-6 font-semibold">Reviews</h4>
        <div className="flex items-center space-x-3">
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
      <ReviewsTable />
    </div>
  );
}
