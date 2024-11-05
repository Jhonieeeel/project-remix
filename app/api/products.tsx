import { ProductDTO } from "~/model/product";
import fetchWrapper from "~/utils/fetch";

export interface Image {
  url: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images?: Image[];
}

interface ProductQueryOptions {
  query?: string;
  category?: string;
}

export async function getProducts({
  query = "",
  category = "",
}: ProductQueryOptions = {}) {
  let url = new URL(`${process.env.STRAPI_URL}/api/products`);

  url.search = new URLSearchParams({
    "populate[images][fields]": "url",
    "populate[category][fields]": "name",
    "filters[category][name][$eq]": category,
    "filters[title][$containsi]": query,
  }).toString();

  let payload = await fetchWrapper<{ data: Product[] }>(url);

  return payload ? payload.data.map(ProductDTO.fromJSON) : null;
}
