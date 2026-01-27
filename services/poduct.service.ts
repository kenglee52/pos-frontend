import api from "@/lib/axios";
import { Product } from "@/types/product.type";

export const productService = {
  getAll: async () => {
    const res = await api.get<Product[]>("/product");
    return res.data;
  },
  getById: async(id: number) => {
    const res = await api.get<Product>(`/product/${id}`);
    return res.data;
  },
  create: async (formData: FormData) => {
    const res = await api.post("/product", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  },
  update: async(id: number, data: Omit<Product, "productID">) =>{
    try {
      const res = await api.put(`/product/${id}`, data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  remove: async(id: number) => {
    await api.delete(`/product/${id}`);
  }
};
