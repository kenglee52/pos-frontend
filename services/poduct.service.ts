// services/product.service.ts
import api from "@/lib/axios";

export const productService = {
  getAll: async () => {
    const res = await api.get("/product");
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
};
