
import { MetaFunction, useLoaderData } from "@remix-run/react";
import Books from "~/components/books";
import products from "~/data/product";

const API_URL = "https://fsuu-store-api.onrender.com";

interface Image {
  url: string;
}

interface Product {
  id: number;
  title: string;
  price: string;
  images: Image[];
}

export const meta: MetaFunction = () => {
  return [{ title: "FSUU Online Book Store" }];
};

export async function loader() {
  try {
    let response = await fetch(`${API_URL}/api/products?populate=images`);
    return { products: (await response.json()).data } as {
      products: Product[];
    };
  } catch (error) {
    return { products: [] };
  }
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
        </div>

        <div className="books ml-16">
          <h3 className="text-2xl font-semibold">Best Selling Book</h3>
          {products.map((product) => (
            <>
              <p>{product.title}</p>
              <img src={`${API_URL}${product.images[0].url}`} alt="" />
            </>
          ))}
          {products && <p>Cannot connect to backend.</p>}
        </div>
      </div>
    </div>
  );
}
