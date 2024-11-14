import { Link } from "@remix-run/react";
import { ShoppingBag, Star } from "lucide-react";

// modal
import { Modal } from "flowbite-react";
import { useState } from "react";

export default function ProductPurchased() {
  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState(1);

  function onCloseModal() {
    setOpenModal(false);
  }

  function handleClick(number: number) {
    setRating(number);
  }

  return (
    <div>
      <div className="message">
        <div className="flex items-center justify-center">
          <span className="mt-12 flex flex-col items-center justify-center space-y-3">
            <ShoppingBag className="h-32 w-32" />
            <h3 className="text-3xl font-semibold">Thank you for Shopping!</h3>
            <p className="text-gray-500">
              Your order has been successfully placed and is now being
              processed.
            </p>
            <button className="rounded-md bg-gray-800 px-3 py-2 text-sm text-gray-200">
              Go to Home
            </button>
            <button
              onClick={() => setOpenModal(true)}
              className="text-sm text-gray-600 underline"
            >
              Write a Feedback
            </button>
          </span>
        </div>
      </div>

      <>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header className="flex items-center justify-between p-3">
            <h3 className="text-sm font-medium text-gray-900">
              Write A Review
            </h3>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-3">
              <div>
                <div className="mb-2 block">
                  <label htmlFor="email" className="text-sm">
                    Email Address
                  </label>
                </div>
                <input
                  type="email"
                  name="emal"
                  id="email"
                  className="w-full rounded-md border-gray-700 focus:border-gray-800"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="email" className="text-sm">
                    Full name
                  </label>
                </div>
                <input
                  type="email"
                  name="fullname"
                  id="fullname"
                  className="w-full rounded-md border-gray-700 focus:border-gray-800"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="email" className="text-sm">
                    Reivew
                  </label>
                </div>
                <textarea
                  name="review"
                  id="review"
                  rows={5}
                  className="w-full rounded-md border-gray-700 focus:border-gray-800"
                ></textarea>
              </div>

              <div className="flex items-center gap-2">
                <h3 className="text-sm text-gray-700">Rate us</h3>
                <input type="hidden" name="rating" value={rating} />
                {Array.from(Array(5).keys()).map((i) => {
                  if (i < rating) {
                    return (
                      <Star
                        key={i}
                        onClick={() => handleClick(i + 1)}
                        className="fill-current text-gray-500"
                      />
                    );
                  }
                  return <Star key={i} onClick={() => handleClick(i + 1)} />;
                })}
              </div>
              <div>
                <button className="mt-5 w-full rounded-md bg-gray-800 py-2 text-gray-100">
                  Submit your Response
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}
