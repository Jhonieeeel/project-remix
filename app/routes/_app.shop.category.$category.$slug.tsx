import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useFetcher, useLoaderData } from "@remix-run/react";
import { Minus, Plus, Star } from "lucide-react";

// client
import { Modal } from "flowbite-react";
import { Check } from "lucide-react";
import { useState } from "react";

import { products } from "~/data/data";
import { addToCart, setCartOnResponse } from "~/lib/cart";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const slug = params.slug;
  const product = products.find((product) => product.name === slug);
  // const cart = await getCart(request);
  if (!product) throw new Response(null, { status: 404 });

  return { product };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const productId = formData.get("product_id");

  if (!productId) {
    throw new Response(null, {
      status: 400,
      statusText: "Product ID is required",
    });
  }

  const cart = await addToCart(request, +productId);
  const response = new Response();
  return await setCartOnResponse(response, cart);
}

export default function Slug() {
  const fetcher = useFetcher<typeof action>();
  const [openModal, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const { product } = useLoaderData<typeof loader>();

  function handleClick() {
    setModalOpen(true);
    fetcher.submit({ product_id: product.id }, { method: "post" });
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <Form
      className="m-12 min-h-screen bg-gray-50 p-2 shadow md:mx-32 md:mt-12"
      method="post"
    >
      <div className="grid max-h-screen grid-cols-2 gap-2">
        <div className="col-span-2 mx-auto mt-28 overflow-hidden border md:col-span-1 md:h-80 md:w-72">
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-cover"
          />
        </div>
        <div className="col-span-2 space-y-3 px-5 md:col-span-1 md:mt-16 md:py-6">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <div className="flex items-center justify-center gap-5">
            <span className="flex items-center gap-1 rounded-full bg-gray-300 px-2 py-1 text-xs text-gray-700">
              <Star className="w-5" />
              4.2 to 5.0 Reviews
            </span>
            <span className="flex items-center rounded-full bg-gray-300 px-3 py-2 text-xs text-gray-700">
              IN STOCK
            </span>
          </div>
          <p className="my-2 text-sm font-semibold">Price: ₱{product.price}</p>

          {/* size */}
          {product.category === "uniform" ? (
            <>
              <p className="mb-2 block text-sm font-medium">Sizes</p>
              <div className="flex items-center justify-center gap-3 overflow-hidden">
                {/* S */}
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="color"
                    value="S"
                    className="peer hidden"
                  />
                  <span className="flex h-8 w-8 items-center justify-center border-2 p-5 peer-checked:border-gray-800">
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
                  <span className="flex h-8 w-8 items-center justify-center border-2 p-5 peer-checked:border-gray-800">
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
                  <span className="flex h-8 w-8 items-center justify-center border-2 p-5 peer-checked:border-gray-800">
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
                  <span className="flex h-8 w-8 items-center justify-center border-2 p-5 peer-checked:border-gray-800">
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
                  <span className="flex h-8 w-8 items-center justify-center border-2 p-5 peer-checked:border-gray-800">
                    XXL
                  </span>
                </label>
              </div>
            </>
          ) : (
            ""
          )}
          {/* quantity */}
          <div className="py-2">
            <p className="leading-1 text-xs text-gray-700">QUANTITY</p>
            <div className="mx-12 mt-2 flex items-center justify-center border">
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-[50%] p-2 text-center md:w-[25%]"
              >
                <Plus className="mx-auto" />
              </button>
              <input
                type="hidden"
                name="quantity"
                value={quantity}
                min={0}
                id=""
              />
              <p>{quantity}</p>
              <button
                onClick={() => setQuantity(quantity - 1)}
                className="w-[50%] text-center md:w-[25%]"
              >
                <Minus className="mx-auto" />
              </button>
            </div>
          </div>
          {/* submit */}
          <div className="py-2">
            <fetcher.Form>
              <button
                onClick={handleClick}
                className="w-full rounded bg-gray-800 px-3 py-2 text-gray-200 md:w-auto"
                type="button"
              >
                Add to Cart
              </button>
            </fetcher.Form>
          </div>
        </div>
      </div>
      {/* modal */}
      <Modal show={openModal} size="md" onClose={closeModal} popup>
        <Modal.Header />

        <Modal.Body>
          <div className="text-center">
            <Check className="mx-auto mb-4 h-24 w-24 rounded-full bg-emerald-400 p-6 text-emerald-700" />
            <h3 className="mb-5 text-lg font-normal text-gray-700">
              Added to Cart !
            </h3>
          </div>
        </Modal.Body>
      </Modal>
    </Form>
  );
}
