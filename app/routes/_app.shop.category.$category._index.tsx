import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import CardCarousel from "~/components/card-carousel";
import { otherItems, products } from "~/data/data";

export async function loader({ params }: LoaderFunctionArgs) {
  const item = products.filter(
    (category) => category.category === params.category,
  );

  let other_items = otherItems;

  if (!item || !other_items) {
    throw new Response(null, { status: 404 });
  }

  return { item, other_items };
}

export default function Items() {
  const { item, other_items } = useLoaderData<typeof loader>();

  return (
    <div className="mx-12 mt-8 rounded-md bg-white p-12 shadow-md md:mt-12">
      <div className="py-3">
        <h2 className="text-left text-xl font-semibold">Best Selling</h2>
        <span className="uppercase text-gray-300">similar products</span>
      </div>
      <div className="mx-auto grid gap-5 md:grid-cols-4">
        {item.map((data) => (
          <Link
            to={`${data.name}`}
            key={data.id}
            className="col-span-1 border-2 border-gray-300 shadow-md md:col-span-1"
          >
            <div className="mx-auto h-40 w-32 overflow-hidden">
              <img
                src={data.image}
                className="mx-auto h-full w-full object-cover p-2"
                alt={data.name}
              />
            </div>
            <div className="bg-gray-300 p-2">
              <p className="py-2 text-center text-sm font-semibold">
                {data.name}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs">IN STOCK</span>
                <span className="text-sm">₱ {data.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-48">
        <div className="py-5">
          <h3 className="text-start text-xl font-semibold">
            You might also like
          </h3>
        </div>
        <div className="hidden md:mx-16 md:grid md:grid-cols-3 md:gap-6">
          {other_items.map((data) => (
            <div
              key={data.id}
              className="border-2 border-gray-300 shadow-md md:col-span-1"
            >
              <div className="mx-auto h-32 w-28 overflow-hidden md:h-40 md:w-32">
                <img
                  src={data.image}
                  className="h-full w-full object-cover p-2"
                  alt={data.name}
                />
              </div>
              <div className="bg-gray-300 p-2">
                <p className="py-2 text-center text-sm font-semibold">
                  {data.name}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-xs">IN STOCK</span>
                  <span className="text-xs md:text-sm">₱ {data.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CardCarousel other_items={other_items} />
      </div>
    </div>
  );
}
