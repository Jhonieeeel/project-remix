import { Form } from "@remix-run/react";

export default function Login() {
  return (
    <div className="min-h-screen w-full p-32">
      <div className="flex items-center justify-center p-6">
        <form className="w-full" action="#" method="post">
          <div className="mx-auto mb-6 max-w-lg">
            <h3 className="text-center text-2xl font-semibold">Welcome Back</h3>
          </div>
          <div className="mx-auto mb-6 max-w-lg">
            <label
              htmlFor="input-label"
              className="mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="input-label"
              className="block w-full rounded-lg bg-gray-200 px-4 py-3 text-sm"
              placeholder="Input ID No. here"
            />
          </div>
          <div className="mx-auto max-w-lg">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg bg-gray-200 px-4 py-3 text-sm"
              placeholder="Input password here"
            />
          </div>
          <div className="mx-auto mb-6 flex max-w-lg justify-center">
            <button
              type="button"
              className="my-4 w-[200px] items-center gap-x-2 rounded-xl border border-transparent bg-[#6F99EA] px-6 py-3 text-center text-sm font-medium text-white hover:bg-blue-400 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

{
  /* <input className="block w-full rounded-lg border border-gray-600 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500" /> */
}
