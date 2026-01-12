import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsAppCart } from "@/hooks/use-whatsapp-cart";

export interface Cake {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CakeCardProps {
  cake: Cake;
}

const CakeCard = ({ cake }: CakeCardProps) => {
  const { addItem, setQuantity, removeItem, items } = useWhatsAppCart();
  const cartItem = items.find((item) => item.id === cake.id);
  const quantity = cartItem?.quantity || 0;

  const handleIncrement = () => {
    if (quantity === 0) {
      addItem(cake, 1);
    } else {
      setQuantity(cake.id, quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(cake.id, quantity - 1);
    } else if (quantity === 1) {
      removeItem(cake.id);
    }
  };

  const handleRemove = () => {
    removeItem(cake.id);
  };

  return (
    <div className="card-bakery group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 text-foreground">
          {cake.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {cake.description}
        </p>

        <div className="flex items-center justify-between gap-4">
          <span className="font-display text-2xl font-bold text-accent">${cake.price}</span>

          {quantity === 0 ? (
            <Button
              type="button"
              onClick={handleIncrement}
              className="whatsapp-btn text-white rounded-full px-4 py-2 inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to cart
            </Button>
          ) : (
            <div className="flex items-center gap-2 bg-secondary rounded-full px-2 py-1">
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={handleDecrement}
                className="h-8 w-8 rounded-full hover:bg-muted"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="font-semibold text-foreground min-w-[24px] text-center">
                {quantity}
              </span>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={handleIncrement}
                className="h-8 w-8 rounded-full hover:bg-muted"
              >
                <Plus className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={handleRemove}
                className="h-8 w-8 rounded-full hover:bg-destructive/10 text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
