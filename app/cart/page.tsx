"use client";
import { DebugCart } from "use-shopping-cart";
export default function Cart() {
  return (
    <section className="flex flex-col items-center justify-center">
      Carrinho
      <DebugCart />
    </section>
  );
}
