import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import InputLabel from "~/components/input-label";
import PrimaryButton from "~/components/primary-button";
import TextInput from "~/components/text-input";
import { Category } from "./types";
import Select from "~/components/select";
import SecondaryButton from "~/components/secondary-button";
import { getProducts } from "~/api/products";
import { getCategories } from "~/api/categories";
import Textarea from "~/components/textarea";
import { useRef, useState } from "react";

export const meta: MetaFunction = () => {
  return [{ title: "Add Product - FSUU Online Book Store" }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  return { categories: await getCategories() };
}

export default function NewProduct() {
  let { categories } = useLoaderData<typeof loader>();

  let [images, setImages] = useState<FileList | null>(null);

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          New Product
        </h2>

        <div className="mt-6 bg-white p-6 shadow-sm sm:rounded-lg">
          <Form
            method="post"
            encType="multipart/form-data"
            className="grid gap-6 md:grid-cols-2"
          >
            <div className="flex flex-col space-y-6">
              <div>
                <InputLabel htmlFor="title">Title</InputLabel>
                <TextInput
                  id="title"
                  name="title"
                  className="mt-1 block w-full"
                  required
                />
              </div>

              <div>
                <InputLabel htmlFor="price">Price</InputLabel>
                <TextInput
                  type="number"
                  inputMode="numeric"
                  id="price"
                  name="price"
                  className="mt-1 block w-full"
                  required
                />
              </div>

              <div>
                <InputLabel htmlFor="category">Category</InputLabel>
                <Select
                  id="category"
                  name="category"
                  className="mt-1 block w-full"
                  defaultValue="0"
                >
                  <option value="0" disabled>
                    Select an option
                  </option>
                  {categories?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </div>

              <div>
                <InputLabel htmlFor="slug">Slug</InputLabel>
                <TextInput
                  id="slug"
                  name="slug"
                  className="mt-1 block w-full"
                  required
                />
              </div>

              <div>
                <InputLabel htmlFor="sku">SKU</InputLabel>
                <TextInput
                  id="sku"
                  name="sku"
                  className="mt-1 block w-full"
                  required
                />
              </div>

              <div>
                <InputLabel htmlFor="description">Description</InputLabel>
                <Textarea
                  rows={3}
                  id="description"
                  name="description"
                  className="mt-1 block w-full resize-none"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div>
                <InputLabel htmlFor="images">Images</InputLabel>
                <input
                  id="images"
                  type="file"
                  onChange={(e) => setImages(e.target.files)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 file:me-4 file:border-0 file:bg-white file:px-4 file:py-2.5 file:text-sm focus:z-10 focus:border-cornflower-blue-500 focus:outline-none focus:ring-cornflower-blue-500 disabled:pointer-events-none disabled:opacity-25"
                  accept="image/*"
                  multiple
                />

                {images && (
                  <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {Array.from(images).map((src) => (
                      <img
                        src={URL.createObjectURL(src)}
                        alt=""
                        className="h-36 w-auto"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-center justify-end">
                <SecondaryButton href="/admin/products">Cancel</SecondaryButton>
                <PrimaryButton type="submit" className="ms-3">
                  Save Product
                </PrimaryButton>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
