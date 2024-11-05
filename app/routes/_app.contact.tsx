import { Form } from "@remix-run/react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function AppContact() {
  return (
    <div className="m-28 rounded-md bg-white p-12 shadow-md md:mt-12">
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className="col-span-2 mr-auto space-y-5 p-3 md:col-span-1">
          <h3 className="text-md mb-6 font-semibold text-gray-700">
            Contact Information
          </h3>
          <ul className="list-none space-y-6">
            <li className="flex items-center gap-2 text-sm">
              <Phone />
              <p className="text-gray-700">0923 + 1283 + 2323</p>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Mail />
              <p className="text-blue-500">Testing@gmail.com</p>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <MapPin />
              <p className="text-gray-700">FSUU Etc</p>
            </li>
          </ul>
        </div>
        <Form
          method="post"
          className="col-span-2 grid grid-cols-2 gap-5 md:col-span-2"
        >
          <div className="col-span-2 mt-5 md:col-span-1">
            <label htmlFor="firstname" className="text-sm text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="w-full border-b-2 border-x-transparent border-b-gray-800 border-t-transparent p-2 focus:border-x-transparent focus:border-b-gray-800 focus:border-t-transparent focus:outline-none"
            />
          </div>
          <div className="col-span-2 mt-5 md:col-span-1">
            <label htmlFor="lastname" className="text-sm text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="w-full border-b-2 border-x-transparent border-b-gray-800 border-t-transparent p-2 focus:border-x-transparent focus:border-b-gray-800 focus:border-t-transparent focus:outline-none"
            />
          </div>
          <div className="col-span-2 mt-5 md:col-span-1">
            <label htmlFor="email" className="text-sm text-gray-700">
              Email Address
            </label>
            <input
              type="emal"
              name="email"
              id="email"
              autoComplete="off"
              className="w-full border-b-2 border-x-transparent border-b-gray-800 border-t-transparent p-2 focus:border-x-transparent focus:border-b-gray-800 focus:border-t-transparent focus:outline-none"
            />
          </div>
          <div className="col-span-2 mt-5 md:col-span-1">
            <label htmlFor="number" className="text-sm text-gray-700">
              Phone Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              inputMode="numeric"
              className="w-full border-b-2 border-x-transparent border-b-gray-800 border-t-transparent p-2 focus:border-x-transparent focus:border-b-gray-800 focus:border-t-transparent focus:outline-none"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="message" className="text-sm text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message"
              className="text-md w-full border-b-2 border-x-transparent border-b-gray-800 border-t-transparent p-2 placeholder:text-sm focus:border-x-transparent focus:border-b-gray-800 focus:border-t-transparent focus:outline-none"
              id=""
            ></textarea>
          </div>
          <div className="ml-auto w-full">
            <button className="text-md w-[200px] rounded-md bg-blue-600 px-3 py-2 text-gray-100 hover:bg-blue-800">
              Send
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
