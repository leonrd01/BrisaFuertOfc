"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ProductCard } from "@/components/product-card";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/lib/products";
import type { Product } from "@/lib/types";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

interface Props {
  product: Product;
}

export default function ProductPageClient({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 8);

  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Produto adicionado!",
      description: `${quantity}x ${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center space-x-2 text-sm text-muted-foreground">
        <a href="/" className="hover:text-primary">
          Home
        </a>
        <ChevronRight className="h-4 w-4" />
        <span className="capitalize">{product.category}</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square w-full overflow-hidden rounded-xl border">
            <Image
              src={selectedImage}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={product.aiHint}
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={cn(
                  "overflow-hidden rounded-lg border-2 transition-colors",
                  selectedImage === image
                    ? "border-primary"
                    : "border-transparent hover:border-primary/50"
                )}
              >
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={150}
                  height={150}
                  className="aspect-square h-full w-full object-cover"
                  data-ai-hint={product.aiHint}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-3xl font-bold text-primary">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>
          <Separator className="my-6" />
          <p className="text-base text-muted-foreground">{product.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-md border">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Diminuir quantidade"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                className="h-10 w-16 border-x border-y-0 text-center"
                aria-label="Quantidade"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Aumentar quantidade"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Adicionar ao Carrinho
            </Button>
          </div>

          <Tabs defaultValue="description" className="mt-10 flex-grow">
            <TabsList>
              <TabsTrigger value="description">Descrição</TabsTrigger>
              <TabsTrigger value="specifications">Especificações</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4 text-sm text-muted-foreground">
              {product.description}
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <ul className="space-y-2 text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key} className="flex">
                    <span className="w-1/3 font-semibold">{key}:</span>
                    <span className="w-2/3 text-muted-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              {product.reviews.length > 0 ? (
                <div className="space-y-4">
                  {product.reviews.map((review, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < review.rating
                                ? "fill-primary text-primary"
                                : "fill-muted-foreground/50 text-muted-foreground/50"
                            )}
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{`"${review.text}"`}</p>
                      <p className="mt-1 text-xs font-semibold text-right">- {review.author}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Ainda não há avaliações para este produto.</p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-headline font-bold mb-6">Produtos Relacionados</h2>
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent>
              {relatedProducts.map((relatedProduct) => (
                <CarouselItem key={relatedProduct.id} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <ProductCard product={relatedProduct} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex" />
            <CarouselNext className="hidden sm:inline-flex" />
          </Carousel>
        </div>
      )}
    </div>
  );
}
