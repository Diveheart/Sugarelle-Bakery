import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsAppCart } from "@/hooks/use-whatsapp-cart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useMemo, useState } from "react";
import { CAKE_SIZES_IN } from "@/data/cake-catalog";
import { productImageSrc } from "@/lib/product-image";

export interface Cake {
  id: string;
  name: string;
  description: string;
  /** Default / lowest price (RM) */
  price: number;
  priceBySizeRm?: Partial<Record<number, number>>;
  availableSizesIn?: readonly number[];
  hideSizeSelector?: boolean;
  image: string;
}

interface CakeCardProps {
  cake: Cake;
}

function getFallbackPriceForSize(startingPriceRm: number, sizeIn: number) {
  if (sizeIn <= 6) return Math.round(startingPriceRm);
  const steps = Math.max(0, Math.floor((sizeIn - 6) / 2));
  const multiplier = 1 + steps * 0.25;
  return Math.round(startingPriceRm * multiplier);
}

function resolveSizes(cake: Cake): number[] {
  if (cake.hideSizeSelector) return [];
  if (cake.availableSizesIn?.length) return [...cake.availableSizesIn];
  if (cake.priceBySizeRm && Object.keys(cake.priceBySizeRm).length > 0) {
    return Object.keys(cake.priceBySizeRm)
      .map(Number)
      .sort((a, b) => a - b);
  }
  return [...CAKE_SIZES_IN];
}

const CakeCard = ({ cake }: CakeCardProps) => {
  const { addItem, setQuantity, removeItem, items } = useWhatsAppCart();
  const sizes = useMemo(() => resolveSizes(cake), [cake]);
  const [sizeIn, setSizeIn] = useState<number>(() => sizes[0] ?? CAKE_SIZES_IN[0]);

  useEffect(() => {
    if (sizes.length > 0 && !sizes.includes(sizeIn)) {
      setSizeIn(sizes[0]);
    }
  }, [sizes, sizeIn]);

  const unitPriceRm = useMemo(() => {
    if (cake.hideSizeSelector) return cake.price;
    const explicit = cake.priceBySizeRm?.[sizeIn];
    if (typeof explicit === "number" && Number.isFinite(explicit)) return explicit;
    return getFallbackPriceForSize(cake.price, sizeIn);
  }, [cake.hideSizeSelector, cake.price, cake.priceBySizeRm, sizeIn]);

  const cartId = cake.hideSizeSelector ? cake.id : `${cake.id}-${sizeIn}`;
  const cartName = cake.hideSizeSelector ? cake.name : `${cake.name} (${sizeIn}\")`;
  const cartItem = items.find((item) => item.id === cartId);
  const quantity = cartItem?.quantity || 0;

  const handleIncrement = () => {
    if (quantity === 0) {
      addItem(
        {
          ...cake,
          id: cartId,
          name: cartName,
          price: unitPriceRm,
        },
        1,
      );
    } else {
      setQuantity(cartId, quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(cartId, quantity - 1);
    } else if (quantity === 1) {
      removeItem(cartId);
    }
  };

  const handleRemove = () => {
    removeItem(cartId);
  };

  return (
    <div className="card-bakery group max-sm:rounded-xl">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden max-sm:aspect-[4/5]">
        <img
          src={productImageSrc(cake.image)}
          alt={cake.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.fallbackApplied) return;
            img.dataset.fallbackApplied = "1";
            img.src = `https://placehold.co/800x800/f5f0eb/8a7a6e?text=${encodeURIComponent(cake.name)}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5 md:p-6">
        <h3 className="font-display text-sm sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 text-foreground line-clamp-2 sm:line-clamp-none">
          {cake.name}
        </h3>
        <p className="hidden sm:block text-muted-foreground text-sm mb-4 line-clamp-2">
          {cake.description}
        </p>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className="font-display text-base sm:text-2xl font-bold text-accent">
                RM{unitPriceRm}
              </span>
              {!cake.hideSizeSelector && (
                <span className="text-muted-foreground text-[10px] sm:text-xs">/ {sizeIn}\"</span>
              )}
            </div>
            {!cake.hideSizeSelector && sizes.length > 0 && (
              <div className="mt-1.5 sm:mt-2 max-w-full sm:max-w-[180px]">
                <Select value={String(sizeIn)} onValueChange={(v) => setSizeIn(Number(v))}>
                  <SelectTrigger className="h-8 sm:h-9 rounded-full bg-background text-xs sm:text-sm">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map((s) => (
                      <SelectItem key={s} value={String(s)}>
                        {s}\"
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {quantity === 0 ? (
            <Button
              type="button"
              onClick={handleIncrement}
              className="whatsapp-btn text-white rounded-full w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="sm:hidden">Add</span>
              <span className="hidden sm:inline">Add to cart</span>
            </Button>
          ) : (
            <div className="flex items-center justify-center sm:justify-start gap-1 sm:gap-2 bg-secondary rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={handleDecrement}
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full hover:bg-muted"
              >
                <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Button>
              <span className="font-semibold text-foreground min-w-[20px] sm:min-w-[24px] text-center text-sm">
                {quantity}
              </span>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={handleIncrement}
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full hover:bg-muted"
              >
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={handleRemove}
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full hover:bg-destructive/10 text-destructive"
              >
                <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
