import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProducts } from "~/api/products";

export const meta: MetaFunction = () => {
  return [{ title: "FSUU Online Book Store" }];
};

export async function loader() {
  return { products: await getProducts({ category: "books" }) };
}

export default function Welcome() {
  let { products } = useLoaderData<typeof loader>();

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <header>
          <h1 className="text-6xl font-semibold uppercase leading-tight text-gray-900">
            FSUU <br /> Online Book Store
          </h1>
          <p className="mt-1 text-gray-700">
            &quot;Why Wait in Line? Get Your School Gear Online&quot;
          </p>
          <p className="text-gray-700">&minus; Fast Easy and Convenient</p>
        </header>

        <div className="mt-6">
          <h2 className="text-3xl font-medium leading-tight text-gray-900">
            Best Selling Books
          </h2>

          <div className="mt-6 grid max-w-3xl gap-6 md:grid-cols-3">
            {products?.map((product) => (
              <article
                key={product.id}
                className="flex flex-col items-start justify-center gap-y-2"
              >
                <img
                  src={product.images?.[0].url}
                  alt=""
                  className="mx-auto h-48 w-auto"
                />
                <h2 className="font-medium leading-tight text-gray-900">
                  {product.title}
                </h2>
                <p className="text-gray-700">
                  &#8369;{product.price.toLocaleString()}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
