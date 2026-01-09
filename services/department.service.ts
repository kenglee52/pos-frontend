import { Department } from "@/types/department.type";
import api from "@/lib/axios";

export const departmentService = {
   getAll: async() =>{
       const res = await api.get<Department[]>("/department");
       return res.data;
   },
   getById: async(id: number) => {
       const res = await api.get<Department>(`department/${id}`);
       return res.data;
   },
   create: async(data: Omit<Department, "departmentID">) => {
       const res = await api.post("/department", data);
       return res.data;
   },
   update: async(id: number,data: Omit<Department, "departmentID">) => {
       const res = await api.put(`/department/${id}`, data);
       return res.data;
   },
   remove: async(id: number)=>{
         await api.delete(`/department/${id}`);
   }
}