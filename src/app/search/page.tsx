"use client";

import Link from "next/link";
import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-muted-foreground">Carregando pesquisa...</p>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}

function SearchResults() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") || "").trim();
  const normalizedQuery = query.toLowerCase();

  const filteredProducts = useMemo(() => {
    if (!normalizedQuery) return [];

    return products.filter((product) => {
      const haystack = [
        product.name,
        product.category,
        product.description,
        Object.values(product.specifications).join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Pesquisa</span>
      </div>

      <h1 className="mb-2 text-3xl font-bold font-headline tracking-tight md:text-4xl">
        Resultados da pesquisa
      </h1>
      <p className="mb-8 text-muted-foreground">
        {query
          ? `Buscando por: "${query}"`
          : "Digite um termo de pesquisa para ver produtos."}
      </p>

      {query && filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          {query
            ? "Nenhum produto encontrado para esse termo."
            : "Nenhum termo informado."}
        </p>
      )}
    </div>
  );
}
