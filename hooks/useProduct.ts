"use client";
import { useEffect } from "react";
import { useProductStore } from "@/stores/product.store";
export const useProduct = () =>{
    const store = useProductStore();
    useEffect(()=>{
         store.fetchAll();
    }, []);

    return {
         products: store.products,
         loading: store.loading,
         fetchAllProducts: store.fetchAll,
         createProduct: store.create
    }
}