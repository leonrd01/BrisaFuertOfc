"use client";

import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();

  return (
    <>
      <SheetHeader>
        <SheetTitle>Seu Carrinho</SheetTitle>
      </SheetHeader>
      {cartItems.length > 0 ? (
        <div className="flex h-full flex-col justify-between">
          <ScrollArea className="flex-grow pr-4">
            <div className="mt-4 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-md">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                      data-ai-hint={item.aiHint}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      R$ {item.price.toFixed(2).replace(".", ",")}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                        className="h-7 w-12 text-center"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
          <SheetFooter className="mt-4">
            <div className="w-full space-y-4">
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>R$ {getCartTotal().toFixed(2).replace(".", ",")}</span>
              </div>
              <Button className="w-full">Finalizar Compra</Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => clearCart()}
              >
                Limpar Carrinho
              </Button>
            </div>
          </SheetFooter>
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center">
          <p className="text-muted-foreground">Seu carrinho está vazio.</p>
        </div>
      )}
    </>
  );
}
