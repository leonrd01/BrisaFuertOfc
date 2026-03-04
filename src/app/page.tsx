import { products } from "@/lib/products";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "@/components/product-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export default function Home() {
  const promotionalProducts = products.slice(0, 8);
   const sedasProducts = products
     .filter((p) => p.category === "Sedas")
     .slice(0, 4);
   const isqueirosProducts = products
     .filter((p) => p.category === "Isqueiros")
     .slice(0, 4);
   const acessoriosProducts = products
     .filter((p) => p.category === "Acessórios")
     .slice(0, 4);


  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Card className="bg-secondary/50 shadow-xl rounded-xl overflow-hidden mb-12">
        <CardContent className="p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">
            Produtos em Promoção
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {promotionalProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex" />
            <CarouselNext className="hidden sm:inline-flex" />
          </Carousel>
        </CardContent>
      </Card>

      {/* Sedas Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-headline font-bold">
            Sedas Populares
          </h2>
          <Button variant="link" asChild>
            <Link href="/category/sedas">
              Ver todas <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {sedasProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Isqueiros Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-headline font-bold">
            Isqueiros
          </h2>
          <Button variant="link" asChild>
            <Link href="#">
              Ver todos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {isqueirosProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Acessórios Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-headline font-bold">
            Acessórios Essenciais
          </h2>
          <Button variant="link" asChild>
            <Link href="#">
              Ver todos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {acessoriosProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
