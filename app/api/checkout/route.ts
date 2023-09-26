import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import Stripe from "stripe";
import { Product } from "use-shopping-cart/core";
const { validateCartItems } = require("use-shopping-cart/utilities");

export async function POST(request: NextRequest) {
  const cartDetails = request.json();
  const baseUrl = request.headers.get("origem");

  const stripeInventory = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = stripeInventory.data.map((p: Stripe.Product): Product => {
    return {
      id: p.id.toString(),
      name: p.name,
      price: (p.default_price as Stripe.Price)?.unit_amount ?? 0,
      currency: (p.default_price as Stripe.Price)?.currency ?? "BRL",
      image: p.images[0],
    };
  });

  const line_items = validateCartItems(products, cartDetails);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: line_items,
    success_url: `${baseUrl}/success/{CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cart`,
  });

  return NextResponse.json({}, { status: 200 });
}
