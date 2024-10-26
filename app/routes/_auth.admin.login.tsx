import { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
import React from "react";

export async function action({ request }: ActionFunctionArgs) {
  throw redirect("/admin/dashboard");
}

export default function Adminlogin() {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-32">
      <div className="flex items-center justify-center p-6">
        <Form className="w-[400px] rounded-lg bg-white p-6" method="post">
          <div className="mt-3 inline-flex w-full items-center justify-center">
            <img src="/public/urios_logo.svg" className="w-14" alt="" />
            <p className="text-lg font-semibold">Admin</p>
          </div>
          <div className="mt-12 w-full">
            <div className="mx-auto mb-6 max-w-lg">
              <label
                htmlFor="input-label"
                className="mb-2 block text-sm font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="input-label"
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
                required
                autoComplete="username"
              />
            </div>
            <div className="mx-auto mb-6 max-w-lg">
              <label
                htmlFor="input-label"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-200"
                required
              />
            </div>
            <div className="mx-auto mb-6 max-w-lg">
              <button className="block w-full rounded-lg border border-gray-300 bg-[#6F99EA] px-4 py-3 text-sm text-white hover:bg-blue-400 focus:border-gray-200">
                Login
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
