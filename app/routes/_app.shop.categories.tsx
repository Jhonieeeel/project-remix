export default function Shop() {
  return (
    <div className="mt-32 rounded-md bg-white p-12 md:mx-12 md:mt-16">
      <div className="">
        <h2 className="py-3 text-center text-3xl font-semibold text-gray-800 md:text-5xl">
          Product Categories
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="card col-span-1 w-full overflow-hidden rounded bg-blue-200 p-2 shadow-md">
          {/* card content here */}
          <div className="p-4">
            {/* text */}
            <span className="block text-3xl font-bold text-blue-700 md:text-4xl">
              SCHOOL SUPPLIES
            </span>
          </div>
          {/* img */}
          <div className="flex justify-center p-4">
            <img
              src="/public/shop/schoolsupplies.png"
              alt=""
              className="w-48"
            />
          </div>
        </div>

        <div className="card col-span-1 w-full overflow-hidden rounded bg-emerald-200 p-2 shadow-md">
          {/* card content here */}
          <div className="p-4">
            {/* text */}
            <span className="block text-3xl font-bold text-emerald-700 md:text-4xl">
              SCHOOL UNIFORM
            </span>
          </div>
          {/* img */}
          <div className="flex justify-center p-4">
            <img src="/public/shop/uniform.png" alt="" className="w-48" />
          </div>
        </div>

        <div className="card col-span-1 w-full overflow-hidden rounded bg-amber-200 p-2 shadow-md">
          {/* card content here */}
          <div className="mb-8 p-4">
            {/* text */}
            <span className="block text-3xl font-bold text-amber-700 md:text-4xl">
              BOOKS
            </span>
          </div>
          {/* img */}
          <div className="flex justify-center p-4">
            <img src="/public/shop/books.png" alt="" className="w-48" />
          </div>
        </div>
      </div>
    </div>
  );
}
