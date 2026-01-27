// stores/product.store.ts
import { create } from "zustand";
import { Product } from "@/types/product.type";
import { productService } from "@/services/poduct.service";

interface ProductState {
  products: Product[];
  loading: boolean;
  selected?: Product;
  fetchAll: () => Promise<void>;
  fetchById: (id: number) => Promise<void>;
  create: (formData: FormData) => Promise<void>;
  update: (id: number, data: Omit<Product, "productID">) => Promise<void>;
  remove: (id: number) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loading: false,
  selected: undefined,
  fetchAll: async () => {
    set({ loading: true });
    const data = await productService.getAll();
    set({ products: data, loading: false });
  },
  fetchById: async (id) => {
    set({ loading: true });
    const data = await productService.getById(id);
    set({ selected: data, loading: false });
  },
  create: async (formData) => {
    await productService.create(formData);
    const data = await productService.getAll();
    set({ products: data });
  },
  update: async (id, data) => {
    await productService.update(id, data);
    const result = await productService.getAll();
    set({ products: result });
  },
  remove: async (id) => {
    await productService.remove(id);
    set((state) => ({
      products: state.products.filter(
        (c) => c.productID !== id
      ),
    }))
  }
}));
