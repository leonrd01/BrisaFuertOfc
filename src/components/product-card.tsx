"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Eye, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };


  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-lg border-border/60 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col",
        className
      )}
    >
      <Link
        href={`/products/${product.id}`}
        aria-label={`Ver detalhes de ${product.name}`}
      >
        <CardHeader className="p-0">
          <div className="aspect-square w-full overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.aiHint}
            />
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4 flex-grow">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-base font-semibold leading-tight truncate">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground capitalize mt-1">
          {product.category}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-lg font-bold text-primary">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
      </CardFooter>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
        <div className="flex flex-col gap-2 w-full">
          <Link href={`/products/${product.id}`} className="w-full">
            <Button variant="secondary" className="w-full">
              <Eye className="mr-2 h-4 w-4" />
              Ver Produto
            </Button>
          </Link>
          <Button variant="default" className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Adicionar
          </Button>
        </div>
      </div>
    </Card>
  );
}
