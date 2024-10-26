import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ShoppingCart } from "lucide-react";

import nursingBooks from "~/data/data";

export async function loader({ params }: LoaderFunctionArgs) {
  const book = nursingBooks.find((book) => book.book_id == params.id);

  if (!book) {
    throw new Response(null, { status: 404 });
  }

  return { book };
}

export default function ItemDetail() {
  const { book } = useLoaderData<typeof loader>();

  return (
    <div className="mx-14 flex w-full items-start justify-center gap-6 p-12">
      <div className="w-full">
        <img
          src={book.bookImage}
          className="h-[500px] w-full object-cover"
          alt=""
        />
      </div>

      <div className="mx-6 block p-8">
        <div className="mb-7">
          <p className="relative mx-auto text-start text-2xl font-bold text-gray-700">
            Book Available
          </p>
        </div>

        <h4 className="text-lg font-semibold">{book.title}</h4>
        <p className="mb-3 font-semibold">₱ {book.price.toFixed(2)}</p>
        <p className="mb-3 text-base">{book.book_data}</p>

        <button
          type="button"
          className="my-2 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-gray-600 px-4 py-3 text-sm font-medium text-white hover:bg-gray-900 focus:bg-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        >
          <ShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
