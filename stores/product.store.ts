// stores/product.store.ts
import { create } from "zustand";
import { Product } from "@/types/product.type";
import { productService } from "@/services/poduct.service";

interface ProductState {
  products: Product[];
  loading: boolean;
  fetchAll: () => Promise<void>;
  create: (formData: FormData) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,

  fetchAll: async () => {
    set({ loading: true });
    const data = await productService.getAll();
    set({ products: data, loading: false });
  },

  create: async (formData) => {
    await productService.create(formData);
    const data = await productService.getAll();
    set({ products: data });
  },
}));
