import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCart } from "~/lib/cart";

import { products } from "~/data/data";

export async function loader({ request }: LoaderFunctionArgs) {
  const cart = await getCart(request);
  const productIds = cart.map((product) => product.id);
  const cartProductsWithQuantity = cart.map((cartProduct) => {
    const cartItem = products.find((item) => +item.id === cartProduct.id);
    if (!cartItem) return;
    return {
      ...cartItem,
      quantity: cartProduct.quantity,
    };
  });

  console.log(cartProductsWithQuantity);

  return { cart, cartProductsWithQuantity };
}
export default function MyOrders() {
  const { cart, cartProductsWithQuantity } = useLoaderData<typeof loader>();

  return (
    <div className="m-12 min-h-screen bg-gray-100 text-gray-800">
      <div className="px-5 py-6 shadow-md">
        <h3 className="text-md font-semibold">Order Details</h3>
      </div>
      <div className="grid gap-3 border md:grid-cols-3">
        <div className="md:col-span-2">
          {cartProductsWithQuantity.map((item) => (
            <div
              key={item?.id}
              className="mx-4 my-3 flex items-center justify-center bg-gray-100 p-3 shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-5">
                  <img src={item?.image} className="object-cover" alt="" />
                  <div className="flex flex-col space-y-3">
                    <span className="text-md font-semibold">{item?.name}</span>
                    <span className="text-xs font-semibold">Product Color</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <span className="font-semibold">P {item?.price}</span>
                  <span className="font-semibold">
                    Quantity: {item?.quantity}
                  </span>
                  <button className="bg-gray-400 px-2">X</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6 border border-gray-300 px-6 py-3 md:col-span-1">
          <h3 className="text-md font-semibold">Order Sumamry</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-sm font-semibold">Subtotal</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Total</span>
            <span className="text-sm font-semibold">Total</span>
          </div>
          <button className="w-full rounded-md bg-gray-800 px-4 py-2 text-gray-200">
            Checkout
          </button>
          <p className="text-center underline">Continue Shopping</p>
        </div>
      </div>
    </div>
  );
}
