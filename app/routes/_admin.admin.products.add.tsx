import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Add Product" }];
};

export default function AddProduct() {
  return (
    <div className="w-full">
      <h3 className="p-3 text-xl font-semibold text-gray-700">Add Product</h3>
      <span className="my-4 w-full border-t border-gray-200"></span>

      <form
        action="3"
        method="post"
        className="flex w-full items-start justify-between"
      >
        <div className="mx-8 my-6 w-full">
          {/* title */}
          <div className="mb-6">
            <label htmlFor="title" className="mb-2 block text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="input-label"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
            />
          </div>
          {/* price */}
          <div className="mb-6">
            <label htmlFor="price" className="mb-2 block text-sm font-medium">
              Price
            </label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={8}
              min={0}
              id="price"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
            />
          </div>
          {/* category */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-medium"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
            />
          </div>
          {/* Slug */}
          <div className="mb-6">
            <label htmlFor="slug" className="mb-2 block text-sm font-medium">
              Slug
            </label>
            <input
              type="text"
              id="slug"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
            />
          </div>
          {/* SKU */}
          <div className="mb-6">
            <label htmlFor="sku" className="mb-2 block text-sm font-medium">
              SKU
            </label>
            <input
              type="email"
              id="sku"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
            />
          </div>
          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium"
            >
              Description
            </label>
            <textarea
              rows={6}
              id="description"
              name="description"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
            ></textarea>
          </div>

          <div className="mb-6">
            <button
              type="button"
              className="my-4 w-[160px] items-center gap-x-2 rounded-xl border border-transparent bg-gray-700 px-6 py-3 text-center text-sm font-medium text-white hover:bg-gray-900 focus:bg-gray-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              Add Product
            </button>
          </div>
        </div>
        <div className="mx-8 my-6 w-full">
          {/* stock status */}
          <div className="mb-6">
            <label
              htmlFor="input-label"
              className="mb-2 block text-sm font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="input-label"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
            />
          </div>
          {/* available quantity */}
          <div className="mb-6">
            <label
              htmlFor="input-label"
              className="mb-2 block text-sm font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="input-label"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="images" className="mb-2 block text-sm font-medium">
              Images
            </label>
            <input
              type="file"
              src=""
              alt=""
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
            />
          </div>

          {/* images */}
          <div className="mb-6">{/* No image yet */}</div>

          {/* 4 colors */}
          <div className="mb-6">
            <label htmlFor="colors" className="mb-2 block text-sm font-medium">
              Colors
            </label>
            <div className="mx-12 mb-6 flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="#A3BEF8"
                  className="peer hidden"
                />
                <span className="h-8 w-8 rounded-full border-2 border-transparent bg-[#A3BEF8] peer-checked:border-gray-800"></span>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="#FFD58A"
                  className="peer hidden"
                />
                <span className="h-8 w-8 rounded-full border-2 border-transparent bg-[#FFD58A] peer-checked:border-gray-800"></span>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="#83B18B"
                  className="peer hidden"
                />
                <span className="h-8 w-8 rounded-full border-2 border-transparent bg-[#83B18B] peer-checked:border-gray-800"></span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="#4078FF"
                  className="peer hidden"
                />
                <span className="h-8 w-8 rounded-full border-2 border-transparent bg-[#4078FF] peer-checked:border-gray-800"></span>
              </label>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <label htmlFor="size" className="mb-2 block text-sm font-medium">
              Sizes
            </label>
            <div className="mb-6 flex items-center space-x-6">
              {/* S */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="S"
                  className="peer hidden"
                />
                <span className="flex h-8 w-8 items-center justify-center border-2 border-transparent bg-[#A3BEF8] p-3 peer-checked:border-gray-800">
                  S
                </span>
              </label>
              {/* M */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="M"
                  className="peer hidden"
                />
                <span className="flex h-8 w-8 items-center justify-center border-2 border-transparent bg-[#A3BEF8] p-3 peer-checked:border-gray-800">
                  M
                </span>
              </label>
              {/* X */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="X"
                  className="peer hidden"
                />
                <span className="flex h-8 w-8 items-center justify-center border-2 border-transparent bg-[#A3BEF8] p-3 peer-checked:border-gray-800">
                  X
                </span>
              </label>
              {/* XL */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="XL"
                  className="peer hidden"
                />
                <span className="flex h-8 w-8 items-center justify-center border-2 border-transparent bg-[#A3BEF8] p-3 peer-checked:border-gray-800">
                  XL
                </span>
              </label>
              {/* XXL */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  value="XXL"
                  className="peer hidden"
                />
                <span className="flex h-8 w-8 items-center justify-center border-2 border-transparent bg-[#A3BEF8] p-3 peer-checked:border-gray-800">
                  XXL
                </span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
