import { MetaFunction, useLoaderData } from "@remix-run/react";
import Books from "~/components/books";

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
  return [{ title: "WHATTHEFUCK" }];
};

export async function loader() {
  let response = await fetch(`${API_URL}/api/products?populate=images`);

  return { products: (await response.json()).data } as { products: Product[] };
}

export default function Home() {
  let { products } = useLoaderData<typeof loader>();

  return (
    <div className="flex w-full items-start justify-between">
      <div className="ml-6">
        <div className="mb-5 block py-8 text-6xl font-bold leading-normal">
          <h1>FSUU</h1>
          <h1>ONLINE BOOK STORE</h1>
          <p className="ml-5 text-xl font-semibold">
            "Why Wait in Line? Get Your School Gear Online
            <span className="block">– Fast, Easy, and Convenient!"</span>
          </p>
        </div>

        {/* books */}
        <div className="books ml-16">
          <h3 className="text-2xl font-semibold">Best Selling Book</h3>
          {/* <Books  /> */}
          {products.map((product) => (
            <>
              <p>{product.title}</p>
              <img src={`${API_URL}${product.images[0].url}`} alt="" />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
