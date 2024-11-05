interface OtherItems {
  id: string;
  name: string;
  image: string;
  price: number;
}

import { Carousel } from "flowbite-react";

export default function CardCarousel({
  other_items,
}: {
  other_items: OtherItems[];
}) {
  return (
    <div className="block h-56 md:hidden md:h-64">
      <Carousel rightControl={false} leftControl={false} indicators={false}>
        {other_items.map((data) => (
          <div
            key={data.id}
            className="border-2 border-gray-300 shadow-md md:col-span-1"
          >
            <div className="mx-auto h-40 w-32 overflow-hidden">
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
                <span className="text-xs">IN STOCK</span>
                <span className="text-sm">₱ {data.price}</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
