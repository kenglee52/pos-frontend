import api from "@/lib/axios";
import { Unit } from "@/types/unit.type";

export const unitService = {
    getAll: async() => {
        const res = await api.get<Unit[]>("/unit");
        return res.data; 
    },
    getById: async(id: number) =>{
         const res = await api.get<Unit>(`/unit/${id}`);
         return res.data;
    },
    create: async(data: Omit<Unit, "unitID">) =>{
         const res = await api.post("/unit", data);
         return res.data;
    },
    update: async(id: number,data: Omit<Unit, "unitID">) => {
         const res = await api.put(`/unit/${id}`, data);
         return res.data;
    },
    remove: async(id: number)=>{
         await api.delete(`/unit/${id}`);
    }
}