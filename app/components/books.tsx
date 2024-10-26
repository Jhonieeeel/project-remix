import { Link } from "@remix-run/react";
import NursingBooks from "~/data/data";

export default function Books() {
  return (
    <div className="grid items-center gap-5 md:grid-cols-3">
      {NursingBooks.map((book) => {
        return (
          <Link
            className="flex h-full flex-col items-center justify-between p-4"
            key={book.book_id}
            to={book.book_link}
          >
            <div className="pt-5">
              <img
                src={book.bookImage}
                className="h-64 w-64 object-cover"
                alt={book.title}
              />
            </div>
            <div className="mt-2 text-center">
              <p>{book.title}</p>
              <small>${book.price}</small>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
