import api from "@/lib/axios";
import { Category } from "@/types/category.type";

export const categoryService = {
    getAll: async() =>{
         const res = await api.get<Category[]>("/category");
         return res.data;
    },
    getById: async(id: number)=>{
         const res = await api.get<Category>(`/category/${id}`);
         return res.data;
    },
    create: async(data: Omit<Category, "categoryID">) =>{
         const res = await api.post("/category", data);
         return res.data;
    },
    update: async(id: number, data: Omit<Category, "categoryID">) => {
         const res = await api.put(`/category/${id}`, data);
         return res.data;
    },
    remove: async(id: number) =>{
         await api.delete(`/category/${id}`);
    }
}