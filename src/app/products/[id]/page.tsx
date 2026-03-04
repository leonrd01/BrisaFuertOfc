import React from "react";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import type { Product } from "@/lib/types";
import ProductPageClient from "@/components/product-page-client";

export default function ProductPage({ params }: { params: { id: string } }) {
  // `params` can be a Promise in recent Next.js versions. Use React use to
  // synchronously unwrap it before accessing its properties to avoid warnings
  // and be compatible with future Next.js releases.
  const { id } = (React as any).use ? (React as any).use(params) : params;

  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Pass the resolved product to a client component which handles state/hooks
  // and interactive UI.
  return <ProductPageClient product={product!} />;
}
