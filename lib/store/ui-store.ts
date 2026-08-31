import { create } from 'zustand';
import { Product } from '@/types';

interface UIStore {
  quickViewProduct: Product | null;
  isSearchOpen: boolean;
  setQuickViewProduct: (product: Product | null) => void;
  setIsSearchOpen: (isOpen: boolean) => void;
  toggleSearch: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  quickViewProduct: null,
  isSearchOpen: false,
  setQuickViewProduct: (product) => set({ quickViewProduct: product }),
  setIsSearchOpen: (isOpen) => set({ isSearchOpen: isOpen }),
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
}));
