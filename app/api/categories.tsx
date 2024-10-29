import fetchWrapper from "~/utils/fetch";

interface Category {
  id: number;
  name: string;
}

interface CategoryQueryOptions {
  query?: string;
}

export async function getCategories({ query = "" }: CategoryQueryOptions = {}) {
  let url = new URL(`${process.env.STRAPI_URL}/api/categories`);

  url.search = new URLSearchParams({
    "filters[name][$containsi]": query,
  }).toString();

  let payload = await fetchWrapper<{ data: Category[] }>(url);

  return payload ? payload.data : null;
}
