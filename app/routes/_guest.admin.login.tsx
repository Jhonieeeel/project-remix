import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
import InputLabel from "~/components/input-label";
import PrimaryButton from "~/components/primary-button";
import TextInput from "~/components/text-input";
import fsuuLogo from "~/images/urios-logo.png?url";

export const meta: MetaFunction = () => {
  return [{ title: "Admin Login - FSUU Online Book Store" }];
};

export async function action({ request }: ActionFunctionArgs) {
  throw redirect("/admin/dashboard");
}

export default function AdminLogin() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
      <div className="flex items-center justify-center">
        <img src={fsuuLogo} className="h-28 w-auto drop-shadow-xl" />
        <h2 className="text-2xl font-semibold leading-tight text-gray-800">
          Admin
        </h2>
      </div>

      <div className="mt-6 w-full bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
        <Form method="post">
          <div>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <TextInput
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full"
              required
              autoFocus
              autoComplete="username"
            />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextInput
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full"
              required
            />
          </div>

          <div className="mt-4">
            <PrimaryButton type="submit" className="block w-full text-base">
              Login
            </PrimaryButton>
          </div>
        </Form>
      </div>
    </div>
  );
}
