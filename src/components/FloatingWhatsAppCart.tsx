import { useMemo, useState } from "react";
import { MessageCircle, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useWhatsAppCart } from "@/hooks/use-whatsapp-cart";

const FloatingWhatsAppCart = () => {
  const [open, setOpen] = useState(false);
  const { items, itemCount, setQuantity, removeItem, clear, getWhatsAppCheckoutUrl } =
    useWhatsAppCart();

  const checkoutUrl = useMemo(() => getWhatsAppCheckoutUrl(), [getWhatsAppCheckoutUrl]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="whatsapp-btn text-white rounded-full px-5 py-3 shadow-lg inline-flex items-center gap-2"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="font-medium">Cart</span>
            <span className="ml-1 min-w-[28px] h-6 px-2 rounded-full bg-background/20 text-white text-xs flex items-center justify-center">
              {itemCount}
            </span>
          </button>
        </SheetTrigger>

        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="font-display">Your Order</SheetTitle>
          </SheetHeader>

          <div className="mt-6 flex flex-col gap-4">
            {items.length === 0 ? (
              <p className="text-muted-foreground">Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-lg object-cover"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-foreground leading-snug">
                          {item.name}
                        </p>
                        <p className="text-muted-foreground text-sm">${item.price}</p>

                        <div className="mt-2 flex items-center justify-between gap-3">
                          <div className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-1">
                            <button
                              type="button"
                              onClick={() =>
                                setQuantity(item.id, Math.max(1, item.quantity - 1))
                              }
                              className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-accent"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => setQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-accent"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-accent"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border flex flex-col gap-3">
                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="whatsapp-btn text-white w-full rounded-full py-6 inline-flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Checkout on WhatsApp
                    </Button>
                  </a>

                  <Button
                    variant="outline"
                    className="w-full rounded-full"
                    onClick={() => clear()}
                  >
                    Clear cart
                  </Button>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FloatingWhatsAppCart;
