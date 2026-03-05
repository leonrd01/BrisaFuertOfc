"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { siteConfig } from "@/config/site";
import { useCart } from "@/hooks/use-cart";
import { Cart } from "@/components/cart";
import { Badge } from "../ui/badge";

export default function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Promo Bar */}
      <div className="bg-primary text-primary-foreground text-center text-sm font-semibold p-2">
        5% de desconto na primeira compra | Parcelamento em até 3x sem juros
      </div>

      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-background">
              <SheetTitle className="sr-only">Menu principal</SheetTitle>
              <div className="p-6">
                <SheetClose asChild>
                  <Link href="/" className="flex items-center gap-2 mb-8">
                    <Image
                      src="/imagens/sol-logo02.png"
                      alt="Brisa Fuert"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                    <span className="font-headline text-xl font-bold text-foreground">
                      Brisa Fuert
                    </span>
                  </Link>
                </SheetClose>
                <nav className="flex flex-col space-y-4">
                  {siteConfig.navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/imagens/sol-logo02.png"
              alt="Brisa Fuert"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="font-headline text-2xl font-bold text-foreground">
              Brisa Fuert
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icons and Search */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block w-64">
            <form className="relative" onSubmit={handleSearchSubmit}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar..."
                className="pl-9 bg-muted/50 border-0 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Pesquisar produtos"
              />
            </form>
          </div>

          <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Pesquisar"
              >
                <Search className="h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="top-20 translate-y-0 sm:top-1/2 sm:-translate-y-1/2">
              <DialogTitle className="sr-only">Pesquisar produtos</DialogTitle>
              <form className="relative mt-4" onSubmit={handleSearchSubmit}>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Pesquisar..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Pesquisar produtos"
                  autoFocus
                />
              </form>
            </DialogContent>
          </Dialog>

          <Button variant="ghost" size="icon" aria-label="Conta de usuário">
            <User className="h-6 w-6" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Carrinho de compras"
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {itemCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -right-2 -top-2 h-5 w-5 justify-center rounded-full p-0 text-xs"
                    >
                      {itemCount}
                    </Badge>
                  )}
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:max-w-none">
              <Cart />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
