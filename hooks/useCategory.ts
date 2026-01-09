"use client";
import { useEffect } from "react";
import { useCategoryStore } from "@/stores/category.store";

export const useCategory = () => {
  const store = useCategoryStore();

  useEffect(() => {
    store.fetchAll();
  }, []);

  return {
    categories: store.categories,
    loading: store.loading,
    fetchAllCategories: store.fetchAll,
    removeCategory: store.remove,
    createCategory: store.create,
    updateCategory: store.update,
    fetchCategoryById: store.fetchById,
  };
};
