import { createCookie } from "@remix-run/node";

let secret = process.env.COOKIE_SECRET || "default";
if (secret === "default") {
  console.warn(
    "🚨 No COOKIE_SECRET environment variable set, using default. The app is insecure in production.",
  );
  secret = "default-secret";
}

let cookie = createCookie("cart", {
  secrets: [secret],
  // 30 days
  maxAge: 30 * 24 * 60 * 60,
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
});

interface Product {
  id: number;
}

interface CartProduct {
  id: number;
  quantity: number;
}

export async function getCart(request: Request): Promise<CartProduct[]> {
  let cart = await cookie.parse(request.headers.get("Cookie"));
  return cart ?? [];
}

export async function addToCart(request: Request, productId: number) {
  let cart = await getCart(request);
  let existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  return cart;
}

export async function setCartOnResponse(response: Response, cart: Product[]) {
  let header = await cookie.serialize(cart);
  response.headers.append("Set-Cookie", header);
  return response;
}

export async function clearCartOnRespone(response: Response) {
  let header = await cookie.serialize([]);
  response.headers.append("Set-Cookie", header);
  return response;
}
