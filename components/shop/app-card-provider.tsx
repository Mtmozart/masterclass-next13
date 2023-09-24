"use client";

import { CartProvider } from "use-shopping-cart";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;

interface AppCardProvideProps {
  children: React.ReactNode;
}

export default function AppCardProvider({ children }: AppCardProvideProps) {
  return (
    <CartProvider
      shouldPersist={true}
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="BRL"
    >
      {children}
    </CartProvider>
  );
}
