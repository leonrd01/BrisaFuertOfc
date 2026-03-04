import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { siteConfig } from "@/config/site";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Product } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import React from "react";

export async function generateStaticParams() {
  const categories = siteConfig.navLinks.map((link) => ({
    slug: link.href.split("/").pop(),
  }));
  return categories;
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // `params` can be a Promise in recent Next.js versions. Use React.use to
  // synchronously unwrap it before accessing its properties to avoid warnings
  // and be compatible with future Next.js releases.
  const { slug } = (React as any).use ? (React as any).use(params) : params;

  const category = siteConfig.navLinks.find(
    (link) => link.href === `/category/${slug}`
  );

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === category.label.toLowerCase()
  );

  // Exibir todos os produtos em uma única seção
  const sortedProducts = [...categoryProducts].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{category.label}</span>
      </div>

      <h1 className="mb-8 text-3xl font-bold font-headline tracking-tight md:text-4xl">
        {category.label}
      </h1>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          Nenhum produto encontrado nesta categoria ainda.
        </p>
      )}
    </div>
  );
}
