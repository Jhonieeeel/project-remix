import { MetaFunction } from "@remix-run/react";
import Books from "~/components/books";

export const meta: MetaFunction = () => {
  return [{ title: "WHATTHEFUCK" }];
};

export default function Home() {
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
          <Books />
        </div>
      </div>
    </div>
  );
}
