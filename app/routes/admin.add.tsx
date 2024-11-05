export default function AdminAddProduct() {
  return (
    <div className="min-h-screen bg-gray-200 p-9">
      <h3 className="text-lg font-semibold text-gray-700">Add Product</h3>
      <form action="#" method="post">
        <div className="mx-auto mb-6 max-w-lg">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="input-label"
            className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
          />
        </div>
      </form>
    </div>
  );
}
