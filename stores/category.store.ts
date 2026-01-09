import {create} from "zustand";
import { Category } from "@/types/category.type";
import { categoryService } from "@/services/category.service";

interface CategoryState{
   categories : Category[];
   selected? : Category;
   loading: boolean;

   fetchAll: () => Promise<void>;
   fetchById: (id: number) => Promise<void>
   create: (data: Omit<Category, "categoryID">) => Promise<void>;
   update: (id: number,data: Omit<Category, "categoryID">) => Promise<void>
   remove: (id: number) => Promise<void>;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],    
  selected: undefined,
  loading: false,     

  fetchAll: async () => {
    set({ loading: true });
    const data = await categoryService.getAll();
    set({ categories: data, loading: false });
  },

  fetchById: async (id) => {
    set({ loading: true });
    const data = await categoryService.getById(id);
    set({ selected: data, loading: false });
  },

  create: async (data) => {
    await categoryService.create(data);
    const categories = await categoryService.getAll();
    set({ categories });
  },

  update: async (id, data) => {
    await categoryService.update(id, data);
    const categories = await categoryService.getAll();
    set({ categories });
  },

  remove: async (id) => {
    await categoryService.remove(id);
    set((state) => ({
      categories: state.categories.filter(
        (c) => c.categoryID !== id
      ),
    }));
  },
}));
