"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

export default function CardButton() {
  return (
    <Link href={"/cart"} className="flex items-center justify-center gap-2">
      (R$ 150.00), (3)
      <ShoppingCart className="font-extrabold h-6 w-6" />
    </Link>
  );
}
