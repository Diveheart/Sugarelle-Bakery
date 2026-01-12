import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Cake } from "@/components/CakeCard";

export type CartItem = Cake & { quantity: number };

type WhatsAppCartContextValue = {
  items: CartItem[];
  itemCount: number;
  isInCart: (id: string) => boolean;
  addItem: (cake: Cake, qty?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  getWhatsAppCheckoutUrl: (phone?: string) => string;
};

const STORAGE_KEY = "sugarelle_whatsapp_cart_v1";
const DEFAULT_WHATSAPP_PHONE = "1234567890";

const WhatsAppCartContext = createContext<WhatsAppCartContextValue | null>(null);

function safeParseCart(raw: string | null): CartItem[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((x) => x && typeof x.id === "string")
      .map((x) => ({
        id: String(x.id),
        name: String(x.name ?? ""),
        description: String(x.description ?? ""),
        price: Number(x.price ?? 0),
        image: String(x.image ?? ""),
        quantity: Math.max(1, Number(x.quantity ?? 1)),
      }));
  } catch {
    return [];
  }
}

export function WhatsAppCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>(() =>
    safeParseCart(localStorage.getItem(STORAGE_KEY)),
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<WhatsAppCartContextValue>(() => {
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

    const isInCart = (id: string) => items.some((i) => i.id === id);

    const addItem = (cake: Cake, qty = 1) => {
      const q = Math.max(1, qty);
      setItems((prev) => {
        const existing = prev.find((i) => i.id === cake.id);
        if (!existing) return [...prev, { ...cake, quantity: q }];
        return prev.map((i) =>
          i.id === cake.id ? { ...i, quantity: i.quantity + q } : i,
        );
      });
    };

    const removeItem = (id: string) => {
      setItems((prev) => prev.filter((i) => i.id !== id));
    };

    const setQuantity = (id: string, quantity: number) => {
      const q = Math.max(1, Math.floor(quantity));
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: q } : i)));
    };

    const clear = () => setItems([]);

    const getWhatsAppCheckoutUrl = (phone = DEFAULT_WHATSAPP_PHONE) => {
      const lines = items
        .map((i) => `- ${i.name} x${i.quantity}`)
        .join("\n");

      const message = `Hi, I’d like to order the following cakes:\n\n${lines}\n\nThank you!`;
      return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    return {
      items,
      itemCount,
      isInCart,
      addItem,
      removeItem,
      setQuantity,
      clear,
      getWhatsAppCheckoutUrl,
    };
  }, [items]);

  return (
    <WhatsAppCartContext.Provider value={value}>
      {children}
    </WhatsAppCartContext.Provider>
  );
}

export function useWhatsAppCart() {
  const ctx = useContext(WhatsAppCartContext);
  if (!ctx) throw new Error("useWhatsAppCart must be used within WhatsAppCartProvider");
  return ctx;
}
