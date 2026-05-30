import { ShoppingBag, Plus, Minus, Trash2, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsAppCart } from "@/hooks/use-whatsapp-cart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { useEffect, useMemo, useState } from "react";
import { CAKE_SIZES_IN, getCategoryBySlug } from "@/data/cake-catalog";
import { productImageSrc } from "@/lib/product-image";
import { useIsMobile } from "@/hooks/use-mobile";

export interface Cake {
  id: string;
  categorySlug: string;
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

function getPriceForSize(cake: Cake, sizeIn: number) {
  if (cake.hideSizeSelector) return cake.price;
  const explicit = cake.priceBySizeRm?.[sizeIn];
  if (typeof explicit === "number" && Number.isFinite(explicit)) return explicit;
  return getFallbackPriceForSize(cake.price, sizeIn);
}

function formatPrice(n: number) {
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

function ProductImage({
  cake,
  className,
}: {
  cake: Cake;
  className?: string;
}) {
  return (
    <img
      src={productImageSrc(cake.image)}
      alt={cake.name}
      className={className}
      loading="lazy"
      draggable={false}
      onError={(e) => {
        const img = e.currentTarget;
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = "1";
        img.src = `https://placehold.co/800x800/f5f0eb/8a7a6e?text=${encodeURIComponent(cake.name)}`;
      }}
    />
  );
}

interface PurchaseControlsProps {
  cake: Cake;
  sizes: number[];
  sizeIn: number;
  setSizeIn: (size: number) => void;
  unitPriceRm: number;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
  compact?: boolean;
}

function PurchaseControls({
  cake,
  sizes,
  sizeIn,
  setSizeIn,
  unitPriceRm,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
  compact = false,
}: PurchaseControlsProps) {
  return (
    <div
      className={
        compact
          ? "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4"
          : "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      }
      onClick={(e) => e.stopPropagation()}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="min-w-0">
        <div className="flex items-baseline gap-1 sm:gap-2">
          <span
            className={
              compact
                ? "font-display text-base sm:text-2xl font-bold text-accent"
                : "font-display text-2xl font-bold text-accent"
            }
          >
            RM{unitPriceRm}
          </span>
          {!cake.hideSizeSelector && (
            <span className="text-muted-foreground text-xs">/ {sizeIn}\"</span>
          )}
        </div>
        {!cake.hideSizeSelector && sizes.length > 0 && (
          <div className={compact ? "mt-1.5 sm:mt-2 max-w-full sm:max-w-[180px]" : "mt-3 max-w-[220px]"}>
            <Select value={String(sizeIn)} onValueChange={(v) => setSizeIn(Number(v))}>
              <SelectTrigger
                className={
                  compact
                    ? "h-8 sm:h-9 rounded-full bg-background text-xs sm:text-sm"
                    : "h-10 rounded-full bg-background"
                }
              >
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
          onClick={onIncrement}
          className={
            compact
              ? "whatsapp-btn text-white rounded-full w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
              : "whatsapp-btn text-white rounded-full px-6 py-2.5 inline-flex items-center gap-2"
          }
        >
          <ShoppingBag className={compact ? "w-3.5 h-3.5 sm:w-4 sm:h-4" : "w-4 h-4"} />
          {compact ? (
            <>
              <span className="sm:hidden">Add</span>
              <span className="hidden sm:inline">Add to cart</span>
            </>
          ) : (
            "Add to cart"
          )}
        </Button>
      ) : (
        <div
          className={
            compact
              ? "flex items-center justify-center sm:justify-start gap-1 sm:gap-2 bg-secondary rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1"
              : "flex items-center gap-2 bg-secondary rounded-full px-2 py-1"
          }
        >
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={onDecrement}
            className={
              compact
                ? "h-7 w-7 sm:h-8 sm:w-8 rounded-full hover:bg-muted"
                : "h-9 w-9 rounded-full hover:bg-muted"
            }
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="font-semibold text-foreground min-w-[24px] text-center">{quantity}</span>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={onIncrement}
            className={
              compact
                ? "h-7 w-7 sm:h-8 sm:w-8 rounded-full hover:bg-muted"
                : "h-9 w-9 rounded-full hover:bg-muted"
            }
          >
            <Plus className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={onRemove}
            className={
              compact
                ? "h-7 w-7 sm:h-8 sm:w-8 rounded-full hover:bg-destructive/10 text-destructive"
                : "h-9 w-9 rounded-full hover:bg-destructive/10 text-destructive"
            }
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

function ProductDetailBody({
  cake,
  sizePrices,
  purchaseProps,
  Title,
  Description,
}: {
  cake: Cake;
  sizePrices: { size: number; price: number }[];
  purchaseProps: PurchaseControlsProps;
  Title: typeof DialogTitle;
  Description: typeof DialogDescription;
}) {
  const category = getCategoryBySlug(cake.categorySlug);
  const detailDescription = category?.description ?? cake.description;

  return (
    <>
      <div className="aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-muted shrink-0">
        <ProductImage cake={cake} className="w-full h-full object-cover" />
      </div>

      <div className="px-5 pb-6 pt-4 sm:px-6 sm:pb-6 sm:pt-5 space-y-4">
        <div className="pr-10">
          <Title className="font-display text-xl sm:text-2xl font-semibold leading-snug tracking-normal text-left m-0 p-0">
            {cake.name}
          </Title>
          <Description className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed text-left">
            {detailDescription}
          </Description>
        </div>

        {sizePrices.length > 1 && (
          <div className="rounded-xl border border-border/60 bg-secondary/40 p-4">
            <p className="text-sm font-medium text-foreground mb-2">Available sizes</p>
            <ul className="space-y-1.5">
              {sizePrices.map(({ size, price }) => (
                <li
                  key={size}
                  className="flex items-center justify-between text-sm text-muted-foreground"
                >
                  <span>{size}&quot; cake</span>
                  <span className="font-semibold text-accent">RM{formatPrice(price)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <PurchaseControls {...purchaseProps} />
      </div>
    </>
  );
}

function ProductDetailPanel({
  open,
  onOpenChange,
  cake,
  sizePrices,
  purchaseProps,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cake: Cake;
  sizePrices: { size: number; price: number }[];
  purchaseProps: PurchaseControlsProps;
}) {
  const isMobile = useIsMobile();
  const Title = isMobile ? SheetTitle : DialogTitle;
  const Description = isMobile ? SheetDescription : DialogDescription;

  const body = (
    <ProductDetailBody
      cake={cake}
      sizePrices={sizePrices}
      purchaseProps={purchaseProps}
      Title={Title}
      Description={Description}
    />
  );

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="bottom"
          className="max-h-[92vh] overflow-y-auto rounded-t-2xl p-0 gap-0 border-t-0"
        >
          {body}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg sm:max-w-2xl gap-0 p-0 overflow-hidden max-h-[92vh] overflow-y-auto">
        {body}
      </DialogContent>
    </Dialog>
  );
}

const CakeCard = ({ cake }: CakeCardProps) => {
  const { addItem, setQuantity, removeItem, items } = useWhatsAppCart();
  const sizes = useMemo(() => resolveSizes(cake), [cake]);
  const [sizeIn, setSizeIn] = useState<number>(() => sizes[0] ?? CAKE_SIZES_IN[0]);
  const [detailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    if (sizes.length > 0 && !sizes.includes(sizeIn)) {
      setSizeIn(sizes[0]);
    }
  }, [sizes, sizeIn]);

  const unitPriceRm = useMemo(() => getPriceForSize(cake, sizeIn), [cake, sizeIn]);

  const sizePrices = useMemo(
    () => sizes.map((s) => ({ size: s, price: getPriceForSize(cake, s) })),
    [cake, sizes],
  );

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

  const openDetail = () => setDetailOpen(true);

  const purchaseProps: PurchaseControlsProps = {
    cake,
    sizes,
    sizeIn,
    setSizeIn,
    unitPriceRm,
    quantity,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onRemove: handleRemove,
  };

  return (
    <>
      <div className="card-bakery group max-sm:rounded-xl max-sm:hover:transform-none">
        <div
          role="button"
          tabIndex={0}
          onClick={openDetail}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openDetail();
            }
          }}
          className="relative touch-manipulation cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset active:opacity-95"
          aria-label={`View ${cake.name} details`}
        >
          <div className="relative aspect-square w-full overflow-hidden max-sm:aspect-[4/5]">
            <ProductImage
              cake={cake}
              className="w-full h-full object-cover transition-transform duration-700 [@media(hover:hover)]:group-hover:scale-110 pointer-events-none"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent opacity-60 sm:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 transition-opacity duration-300" />
            <span className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-background/95 px-2 py-1 text-[10px] sm:text-xs font-medium text-foreground shadow-sm sm:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
              <ZoomIn className="h-3 w-3" />
              <span className="sm:hidden">Tap for details</span>
              <span className="hidden sm:inline">View</span>
            </span>
          </div>

          <div className="p-3 sm:p-5 md:p-6 pb-2 sm:pb-4">
            <h3 className="font-display text-sm sm:text-xl md:text-2xl font-semibold mb-0 sm:mb-0 text-foreground line-clamp-2 sm:line-clamp-none">
              {cake.name}
            </h3>
          </div>
        </div>

        <div className="px-3 pb-3 sm:px-5 sm:pb-5 md:px-6 md:pb-6 pt-0">
          <PurchaseControls {...purchaseProps} compact />
        </div>
      </div>

      <ProductDetailPanel
        open={detailOpen}
        onOpenChange={setDetailOpen}
        cake={cake}
        sizePrices={sizePrices}
        purchaseProps={purchaseProps}
      />
    </>
  );
};

export default CakeCard;
