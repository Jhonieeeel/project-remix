export default function MyPurchased() {
  return (
    <div className="m-12 mx-24 min-h-screen bg-gray-50 text-gray-800">
      <div className="mb-12 flex justify-center gap-6">{/* Progress */}</div>
      <h3 className="mx-12 text-lg font-bold">Order Details</h3>
      <div className="m-8 flex items-center justify-evenly border p-4 py-3 shadow-md hover:bg-gray-100">
        <div className="flex items-center gap-4">
          <img
            src="/public/products/polo-college-male.svg"
            className="w-24 border-2 shadow-lg"
            alt=""
          />
          <div className="flex flex-col items-start gap-2">
            <span className="text-md">College Polo (Male)</span>
            <span className="text-sm text-gray-500">Color: None</span>
          </div>
        </div>
        <div className="flex items-center gap-6 space-x-6 border">
          <p className="font-semibold">₱1234</p>
          <button className="w-full rounded-md bg-gray-800 px-3 py-2 text-gray-200">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}
