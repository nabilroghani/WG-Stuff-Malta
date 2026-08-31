import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, Product } from '@/types';

// Malta Free Delivery Threshold
export const FREE_SHIPPING_THRESHOLD = 50.0;
export const STANDARD_SHIPPING_FEE = 4.5;

interface CartStore {
  items: CartItem[];
  isDrawerOpen: boolean;
  
  // Actions
  addItem: (product: Product, quantity?: number, selectedSize?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;

  // Computed Getters
  getItemsCount: () => number;
  getSubtotal: () => number;
  getShippingFee: () => number;
  getTotal: () => number;
  getFreeShippingProgress: () => { remaining: number; percentage: number; isEligible: boolean };
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isDrawerOpen: false,

      addItem: (product, quantity = 1, selectedSize) => {
        const currentItems = get().items;
        const sizeKey = selectedSize || product.volumeOrSize || 'default';
        const itemId = `${product.id}-${sizeKey}`;

        const existingIndex = currentItems.findIndex((item) => item.id === itemId);

        if (existingIndex > -1) {
          const updated = [...currentItems];
          updated[existingIndex].quantity += quantity;
          set({ items: updated, isDrawerOpen: true });
        } else {
          const newItem: CartItem = {
            id: itemId,
            product,
            quantity,
            selectedSize: sizeKey !== 'default' ? sizeKey : undefined,
          };
          set({ items: [...currentItems, newItem], isDrawerOpen: true });
        }
      },

      removeItem: (itemId) => {
        set({ items: get().items.filter((item) => item.id !== itemId) });
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
      toggleDrawer: () => set({ isDrawerOpen: !get().isDrawerOpen }),

      getItemsCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        const subtotal = get().items.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );
        return Math.round(subtotal * 100) / 100;
      },

      getShippingFee: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD) {
          return 0.0;
        }
        return STANDARD_SHIPPING_FEE;
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const shipping = get().getShippingFee();
        return Math.round((subtotal + shipping) * 100) / 100;
      },

      getFreeShippingProgress: () => {
        const subtotal = get().getSubtotal();
        const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
        const percentage = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
        return {
          remaining: Math.round(remaining * 100) / 100,
          percentage: Math.round(percentage),
          isEligible: subtotal >= FREE_SHIPPING_THRESHOLD,
        };
      },
    }),
    {
      name: 'wg-cart-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }), // Only persist cart items, not UI drawer state
    }
  )
);
