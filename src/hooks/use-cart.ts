"use client";

import { useCartContext } from "@/context/cart-context";

export function useCart() {
  const context = useCartContext();
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
